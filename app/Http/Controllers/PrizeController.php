<?php

namespace App\Http\Controllers;

use App\Checkin;
use App\Prize;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Auth;

class PrizeController extends Controller
{
    public function index() {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        $prizes = Prize::all();
        return response()->json($prizes);
    }

    public function enabled() {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        $enabledPrizes = Prize::where('enabled', 1)->get();
        return response()->json($enabledPrizes);
    }

    public function create(Request $request) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }

        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'enabled' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json($validator);
        }

        $prize = Prize::create($request->all());

        return response()->json($prize);
    }

    public function update(Request $request, Prize $prize) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        if($request->has('name')) {
            $prize->name = $request->name;
        }

        if($request->has('enabled')) {
            $prize->enabled = $request->enabled;
        }

        $prize->save();

        return response()->json($prize);
    }

    public function destroy(Request $request, Prize $prize) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        try {
            $prize->delete();
            return response()->json('deleted');
        }
        catch(Exception $e) {
            return response()->json($e);
        }
    }

    public function assign(Request $request, $id) {

        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }

        $today = Carbon::today();

        $winner = Checkin::where('created_at', '>=', $today->toDateTimeString())
            ->where('chosen', '0')
            ->inRandomOrder()
            ->first();

        // Return something so the admin app doesn't have to deal with null shite
        if (!$winner) {
            return [
                "id" => 0,
                "name" => "Ed",
                "email" => "neigh@sgfwebdevs.com",
                "image" => "https://our.umbraco.org/media/wiki/273377/636549974626135825_horsestrapprofileimagepng.png"
            ];
        }

        $winner->chosen = true;
        $winner->save();


        // Send request to OneSignal
        $response = $this->SendAlert($id, $winner);
        //$return["allresponses"] = $response;
        //$return = json_encode( $return);

        return $winner;
    }

    private function SendAlert($prizeId, $winner)
    {
        $prize = Prize::find($prizeId);

        $content = array("en" => 'Congrats, ' . $winner->name . ', you are the winner of ' . $prize->name);

        $fields = array(
            'app_id' => env('ONESIGNAL_APP_ID'),
            'filters' => array(array("field" => "tag", "key" => "email", "relation" => "=", "value" => $winner->email)),
            'data' => array("foo" => "bar", "send_more" => "data"),
            'contents' => $content
        );

        $fields = json_encode($fields);

        $authHeader = 'Authorization: Basic ' . env('ONESIGNAL_REST_API_KEY');

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8', $authHeader));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, FALSE);
        curl_setopt($ch, CURLOPT_POST, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

        $response = curl_exec($ch);
        curl_close($ch);

        return $response;
    }
}

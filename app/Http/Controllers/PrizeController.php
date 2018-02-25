<?php

namespace App\Http\Controllers;

use App\Prize;
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
}

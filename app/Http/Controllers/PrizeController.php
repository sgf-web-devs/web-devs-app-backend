<?php

namespace App\Http\Controllers;

use App\Prize;
use Illuminate\Http\Request;

class PrizeController extends Controller
{
    public function index() {
      $prizes = Prize::all();
      return response()->json($prizes);
    }

    public function enabled() {
      $enabledPrizes = Prize::where('enabled', 1)->get();
      return response()->json($enabledPrizes);
    }

    public function create(Request $request) {

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
        if($request->has('name')) {
            $prize->name = $request->name;
        }

        if($request->has('enabled')) {
            $prize->enabled = $request->enabled;
        }

        $prize->save();

        return response()->json($prize);
    }
}

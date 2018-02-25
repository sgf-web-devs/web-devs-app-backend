<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request) {
        $validator = \Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json('Both email and password are required');
        }

        if(Auth::attempt($request->all())) {
            return response()->json('success');
        }

        return response()->json('Incorrect username and/or password', 401);
    }
}

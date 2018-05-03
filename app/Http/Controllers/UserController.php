<?php

namespace App\Http\Controllers;

//use App\Checkin;
use App\User;
//use Carbon\Carbon;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Validator;

class UserController extends Controller
{
    public function index() {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        $users = User::all()->toArray();
        return response()->json($users);
    }

    public function create(Request $request) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
//            'enabled' => 'boolean'
        ]);

        if ($validator->fails()) {
            return response()->json($validator);
        }

        $user = User::create($request->all());

        return response()->json($user);
    }

    public function read(Request $request, User $user) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        return response()->json($user->toArray());
    }

    public function update(Request $request, User $user) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        if($request->has('name')) {
            $user->name = $request->name;
        }

        $user->save();

        return response()->json($user);
    }

    public function destroy(Request $request, User $user) {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        try {
            $user->delete();
            return response()->json('deleted');
        }
        catch(Exception $e) {
            return response()->json($e);
        }
    }

}

<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Validation\Validator;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all()->toArray();

        return response()->json($users);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator);
        }

        $user = User::create($request->all());

        return response()->json($user);
    }

    public function read(Request $request, User $user)
    {
        return response()->json($user->toArray());
    }

    public function update(Request $request, User $user)
    {
        if ($request->has('name')) {
            $user->name = $request->name;
        }
        $user->save();

        return response()->json($user);
    }

    public function destroy(Request $request, User $user)
    {
        try {
            $user->delete();
            return response()->json('deleted');
        } catch (Exception $e) {
            return response()->json($e);
        }
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
    public function checkin(Request $request) {
        return response()->json(true);
    }
}

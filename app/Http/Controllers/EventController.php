<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\AttendeeCheckIn;

class EventController extends Controller
{
    public function checkin(Request $request) {

        event(new AttedeeCheckIn($attendee));
        
        return response()->json(true);
    }
}

<?php

namespace App\Http\Controllers;

use App\Checkin;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class AttendeeController extends Controller
{
    public function index() {
        if(!Auth::check()) {
            return response()->json('Denied', 401);
        }
        // return all Check In records Created In past N hours
        $hours = 6;
        $attendees = Checkin::where('created_at', '>=', Carbon::now()->subHours($hours))->get();
        return response()->json($attendees);
    }
}

<?php

namespace App\Http\Controllers;

use App\Checkin;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\CheckinPost;

class AttendeeController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['checkin']]);
    }

    public function index()
    {
        // return all Check In records Created In past N hours
        $hours = 12;
        $attendees = Checkin::where('created_at', '>=', Carbon::now()->subHours($hours))->get();
        return response()->json($attendees);
    }

    public function checkin(CheckinPost $request)
    {
        $validated = $request->validated();

        // TODO
        // We will need to crack down on this
        // There are several ways to handle... but soon
        // we should make sure these dev-folk cant force
        // a bunch of bunk entries through.
        // - Myke
        $checkin = new Checkin();
        $checkin->name = $request->name;
        $checkin->email = $request->email;
        $checkin->image = $request->image;
        $checkin->chosen = false;
        $checkin->save();

        return $checkin;
    }
}

<?php

namespace App\Http\Controllers;

use App\Checkin;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\CheckinPost;
use Pusher\Pusher;

class AttendeeController extends Controller
{

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

        $options = array(
            'cluster' => 'us2',
            'encrypted' => true
        );
        $pusher = new Pusher(
            env('PUSHER_APP_KEY'),
            env('PUSHER_APP_SECRET'),
            env('PUSHER_APP_ID'),
            $options
        );

        $pusher->trigger('attendees', 'new-checkin', $checkin);

        return $checkin;
    }
}

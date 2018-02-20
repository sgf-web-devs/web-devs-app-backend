<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    public function attendees() {
    	return $this->belongsToMany('App\User');
		}
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class AngularController extends Controller
{
	public function index() {
		return File::get(public_path('dist/index.html'));
	}
}

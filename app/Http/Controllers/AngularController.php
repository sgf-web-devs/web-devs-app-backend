<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use File;

class AngularController extends Controller
{
    public function index() {
        $file = public_path('dist/index.html');
        if (file_exists($file)) {
            return File::get($file);
        }
        else {
            return 'Hello Developer! This site uses Angular. Per README, run "npm start" then browse to <a href="http://localhost:4200">http://localhost:4200</a> to view the Angular interface.';
        }
    }
}

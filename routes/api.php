<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
// All events
Route::get('/events');
// Upcoming event
Route::get('/event');
// Specific event
Route::get('/event/:id');

Route::middleware('auth:api')->get('/checkin');


// Admin routes
// All prizes
Route::get('/prizes');
// Enabled prizes
Route::get('/prizes/enabled');
// New prize
Route::post('/prize');
// Update prize
Route::patch('/prize/:id');
// Delete prize
Route::delete('/prize/:id');
// Pick random winner
Route::post('/winner');

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
//Route::get('/events');
//// Upcoming event
//Route::get('/event');
//// Specific event
//Route::get('/event/:id');
//
//Route::get('/checkin')->middleware('auth:api');

// Admin routes
// All prizes
Route::get('/prizes', 'PrizeController@index');
// Enabled prizes
Route::get('/prizes/enabled', 'PrizeController@enabled');
// New prize
Route::post('/prize', 'PrizeController@create');
// Update prize
//Route::patch('/prize/:id');
//// Delete prize
//Route::delete('/prize/:id');
//// Pick random winner
//Route::post('/winner');

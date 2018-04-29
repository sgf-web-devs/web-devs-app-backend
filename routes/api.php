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
Route::post('/checkin', 'EventController@checkin');

// Admin routes
// Auth endpoints
Route::post('/login', 'LoginController@login');
Route::get('/logout', 'LoginController@logout');
// All prizes
Route::get('/prizes', 'PrizeController@index');
// Enabled prizes
Route::get('/prizes/enabled', 'PrizeController@enabled');
// New prize
Route::post('/prize', 'PrizeController@create');
// Update prize
Route::patch('/prize/{prize}', 'PrizeController@update');
//// Delete prize
Route::delete('/prize/{prize}' ,'PrizeController@destroy');
//// Pick random winner

//Route::post('/winner');
Route::get('/prizes/assign/{id}', 'PrizeController@assign');

Route::get('/pusher-test', function() {
    $options = array(
        'cluster' => 'us2',
        'encrypted' => true
      );
      $pusher = new Pusher\Pusher(
        env('PUSHER_APP_KEY'),
        env('PUSHER_APP_SECRET'),
        env('PUSHER_APP_ID'),
        $options
      );

      $data['message'] = 'Levi Zitting';
      $pusher->trigger('my-channel', 'my-event', $data);
});

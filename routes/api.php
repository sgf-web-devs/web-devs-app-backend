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

// Admin routes
// Authentication Routes
Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

// NOTE: Do NOT mix singular and plural nouns in API endpoints. Group needs to decide on singular or plural,
// then include naming convention guidance in this file. Making singular endpoints available until decision is made.

// TODO: Choose singular or plural and update frontend as needed before removing unused endpoints.
// Read attendee list
Route::get('/attendees', 'AttendeeController@index');

// Read attendee list
Route::get('/attendee', 'AttendeeController@index');

Route::middleware(['api'])->group(function() {
    // TODO: Choose singular or plural and update frontend as needed before removing unused endpoints.
    // Read prize list
    Route::get('/prizes', 'PrizeController@index');
    // Read enabled prize list
    Route::get('/prizes/enabled', 'PrizeController@enabled');
    // Assign and Read random winner for specified prize
    Route::get('/prizes/assign/{id}', 'PrizeController@assign');

    // Create prize
    Route::post('/prize', 'PrizeController@create');
    // Read prize list
    Route::get('/prize', 'PrizeController@index');
    // Read enabled prize list
    Route::get('/prize/enabled', 'PrizeController@enabled');
    // Update prize
    Route::patch('/prize/{prize}', 'PrizeController@update');
    // Delete prize
    Route::delete('/prize/{prize}' ,'PrizeController@destroy');
    // Assign and Read random winner for specified prize
    Route::get('/prize/assign/{id}', 'PrizeController@assign');

    // Read user list
    Route::get('/user', 'UserController@index');
    // Create user
    Route::post('/user', 'UserController@create');
    // Read user
    Route::get('/user/{user}', 'UserController@read');
    // Update user
    Route::patch('/user/{user}', 'UserController@update');
    // Delete user
    Route::delete('/user/{user}' ,'UserController@destroy');
});



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

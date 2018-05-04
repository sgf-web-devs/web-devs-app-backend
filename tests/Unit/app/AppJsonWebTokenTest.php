<?php

namespace Tests\Unit\App;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use TypeError;

class AppJsonWebTokenTest extends TestCase
{
    /**
     * Attempt to generate JWT token for specified user
     *
     * @return void
     */
    public function testGenerateUserToken(): void
    {
        // Assume User ID 1 always exists
        $userId = 1;

        // Read user object from database
        $user = User::where('id', $userId)->first();

        $token = null;
        try {
            // Perform JWT authentication as User
            $token = JWTAuth::fromUser($user);
        }
        catch (TypeError $e)
        {
            // Do not display TypeError message
            // Either the user could not be read from database, or the JWT_SECRET has not been configured.
        }

        $message = 'ERROR: Unable to generate JWT token. Did you run "artisan jwt:secret" per README?';
        $this->assertNotEmpty($token, $message);
    }

    /**
     * Attempt to read from API endpoint as a JWT authenticated user.
     *
     * @return void
     */
    public function testReadFromAPI(): void
    {
        // Assume User ID 1 always exists
        $userId = 1;

        // Read user object from database
        $user = User::where('id', $userId)->first();

        // Perform JWT authentication as User
        $token = JWTAuth::fromUser($user);
        JWTAuth::setToken($token);
        $headers['Authorization'] = 'Bearer '.$token;

        // Read specified user from API endpoint
        $url = '/api/user/' . $userId;
        $response = $this->get($url, $headers);

        $response->assertStatus(200);
    }
}

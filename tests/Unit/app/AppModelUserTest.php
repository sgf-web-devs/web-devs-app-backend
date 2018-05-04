<?php

namespace Tests\Unit\App;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AppModelUserTest extends TestCase
{
    /**
     * Attempt to read specified user from database
     *
     * @return void
     */
    public function testReadUserFromDatabaseModel(): void
    {
        // Assume User ID 1 always exists
        $userId = 1;

        // Read user object from database
        $user = User::where('id', $userId)->first();

        $message = 'ERROR: Could not read from User Model. Did you run "artisan db:seed" to generate fake data per README?';
        $this->assertNotEmpty($user, $message);
    }
}

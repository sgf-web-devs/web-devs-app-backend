<?php

namespace Tests\Unit\App;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AppLaravelKeyTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testSecretToken()
    {
        $value = config('app.key');

        $message = 'ERROR: Unable to read Laravel Key. Did you run "artisan key:generate" per README?';
        $this->assertNotEmpty($value, $message);
    }
}

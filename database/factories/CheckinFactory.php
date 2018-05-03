<?php

use Faker\Generator as Faker;

$factory->define(App\Checkin::class, function(Faker $faker) {
	return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'image' => 'https://www.gravatar.com/avatar/' . $faker->md5 . '?s=32&d=identicon&r=PG',
	];
});

<?php

use Faker\Generator as Faker;

$factory->define(App\Prize::class, function(Faker $faker) {
	return [
		'name' => $faker->unique()->word,
		'enabled' => $faker->randomElement(array(true, false))
	];
});
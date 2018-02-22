<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function(Faker $faker) {
	return [
		'name' => $faker->unique()->words(4),
		'lat' => 37.2119562,
		'lng' => -93.2925957,
		'description' => $faker->randomHtml(1),
		'date' => $faker->dateTimeBetween($startDate = '-1 years', $endDate = '+ 1 years')
	];
});
<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		// $this->call(UsersTableSeeder::class);
		factory(App\User::class, 50)->create();
		factory(App\Event::class, 10)->create();
		factory(App\Prize::class, 20)->create();
	}
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class LandlordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $user = User::create([
       'name' =>'Zainab',
       'email' => 'zainab@gmail.com',
       'username' => 'Zainab',
       'house_number' =>0,
       'password' => 'zainab@gmail.com',
       'rent' => 0
      ]);

      $user->assignRole('landlord');
    }
}

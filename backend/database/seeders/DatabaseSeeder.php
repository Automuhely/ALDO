<?php

namespace Database\Seeders;

use App\Models\Auto;
use App\Models\Munkalap;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory(10)->create();   
         Auto::factory(10)->create();
         Munkalap::factory(10)->create();
    }
}

<?php

namespace Database\Seeders;

use App\Models\Auto;
use App\Models\Feladat;
use App\Models\Munkalap;
use App\Models\MunkalapTetel;
use App\Models\User;
use Exception;
use GuzzleHttp\Psr7\Message;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {


    User::factory(4)->create();
    Auto::factory(10)->create();

    $maxProbalkozasSzama = 3;
    $probalkozas = 0;

    do {
      try {
        Munkalap::factory(20)->create();
        MunkalapTetel::factory(30)->create();

        // ha sikeres kilép
        break;
      } catch (Exception $e) {
        if ($e->getMessage()) {
          dd("Hiba a seedelés során:", $e->getMessage());
        } else {
          dd($e);
        }
        $probalkozas++;

        if ($probalkozas >= $maxProbalkozasSzama) {
          dd("nem sikerült");
          break;
        }
      }
    } while (true);

  }
}

<?php

namespace Database\Factories;

use App\Models\Feladat;
use App\Models\MunkaAr;
use App\Models\Munkalap;
use App\Models\MunkalapTetel;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MunkalapTetel>
 */
class MunkalapTetelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $repeats = 30;
        do {
            $feladat_id = Feladat::all()->random()->id;
            $munkalapszam = Munkalap::all()->random()->munkalapszam;
            $szerelo = User::where('name', 'Szerelo Janos')->first()->id; // Retrieve the first User with name 'Szerelo Janos' and get its id
            $munkalapTetel = MunkalapTetel::where('feladat_id', $feladat_id)
                ->where('munkalapszam', $munkalapszam)
                ->get();
            $repeats--;
        } while ($repeats >= 0 && count($munkalapTetel) > 0);

        return [
            'feladat_id' => $feladat_id,
            'munkalapszam' => $munkalapszam,
            'szerelo' => $szerelo,
            'leiras' => Feladat::$megnevezesek[array_rand(Feladat::$megnevezesek)],
      
        ];
    }
}

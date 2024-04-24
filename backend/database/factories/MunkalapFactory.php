<?php

namespace Database\Factories;

use App\Models\Auto;
use App\Models\MunkaAr;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Munkalap>
 */
class MunkalapFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'auto' => Auto::all()->random(),
            'ugyfel' => User::where("szerepkor", "!=", "szerelo")->where("szerepkor", "!=", "vezetoszerelo")->get()->random(),
            'munkavezeto' => User::where("szerepkor", "szerelo")->get()->random(),
            'altalanosLeiras' => fake()->realText(20),
            'elvitel_ido' => null,
            'statusz' => rand(0,2),
            'uzembentarto' => User::all()->random(),
            'szamlaszam' => rand(111111,999999)
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Auto;
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
            'ugyfel' => User::all()->random(),
            'munkavezeto' => User::all()->random(),
            'leiras' => fake()->realText(50),
            'elvitel_ido' => null,
            'statusz' => rand(0,1),
            'uzembentarto' => User::all()->random(),
        ];
    }
}

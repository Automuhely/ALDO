<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Auto>
 */
class AutoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            'alvazszam' => fake()->text($minNbChars = 17, $maxNbChars = 17),
            'marka' => fake()->name(),
            'motorkod' => fake()->text(),
            'ugyfel' => User::all()->random(),
            'evjarat' => rand(1890,2024),
        ];
    }
}

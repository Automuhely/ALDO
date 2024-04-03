<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Nette\Utils\Random;

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
        // teszteléshez márkanevek
        $markak = ["BMW", "Skoda", "Mercedes", "Audi", "Ford", "Opel"];

        return [
            'alvazszam' => $this->generateRandomString(17),
            'marka' => $markak[array_rand($markak)],
            'becenev' => fake()->name(),
            'rendszam' => fake()->unique()->bothify("########"),
            'motorkod' => $this->generateRandomString(3),
            'ugyfel' => User::all()->random(),
            'evjarat' => rand(1890, 2024),
        ];
    }

    protected function generateRandomString($lenght)
    {
        $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        $randomString = '';

        for ($i = 0; $i < $lenght; $i++) {
            $randomString .= $characters[rand(0, strlen($characters) - 1)];
        }

        return $randomString;
    }
}

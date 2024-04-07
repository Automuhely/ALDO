<?php

use App\Models\Feladat;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('feladats', function (Blueprint $table) {
            $table->id();
            $table-> string('megnevezes');
            $table-> integer('munkadij');
            $table->timestamps();
        });
        Feladat::create([
            "megnevezes" => "Gumicsere",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => "Általános ellenőrzés",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => " a",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => " ab",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => " ac",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => " ad",
            "munkadij" => 15000,
        ]);
        Feladat::create([
            "megnevezes" => " ae",
            "munkadij" => 15000,
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('feladats');
    }
};

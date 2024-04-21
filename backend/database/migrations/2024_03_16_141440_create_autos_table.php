<?php

use App\Models\Auto;
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
        Schema::create('autos', function (Blueprint $table) {
            $table->id();
            $table->string('alvazszam')->unique();
            $table->string('marka');
            $table->string('motorkod')->unique();
            $table->integer('evjarat');
            $table->string('rendszam')->unique();
            $table->string('becenev')->nullable()->default(null);
            $table->foreignId('ugyfel')->constrained('users');
            $table->boolean('hitelesitett')->default(false);
            $table->timestamps();
        });
        Auto::create([
            'alvazszam' => "12345678901234567",
            'marka' => "Mercedes",
            'motorkod' => "abc",
            'evjarat' => "2000",
            'rendszam' => "abc123",
            'becenev' => "Bogár",
            'ugyfel' => "1",
        ]);
        Auto::create([
            'alvazszam' => "12345678907894562",
            'marka' => "Bmw",
            'motorkod' => "guf",
            'evjarat' => "2001",
            'rendszam' => "dan123",
            'becenev' => "Dante",
            'ugyfel' => "1",
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autos');
    }
};

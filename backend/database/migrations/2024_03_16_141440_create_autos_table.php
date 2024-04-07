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
            $table->timestamps();
        });
        Auto::create([
            'alvazszam' => "asd",
            'marka' => "Mercedes",
            'motorkod' => "asd",
            'evjarat' => "2000",
            'rendszam' => "asd123",
            'becenev' => "Macika",
            'ugyfel' => "1",
        ]);
        Auto::create([
            'alvazszam' => "asdef",
            'marka' => "Bmw",
            'motorkod' => "asdef",
            'evjarat' => "2001",
            'rendszam' => "efef12",
            'becenev' => "Kicsi",
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

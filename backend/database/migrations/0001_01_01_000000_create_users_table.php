<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('telefon')->nullable()->default(null);
            $table->string('cim')->nullable()->default(null);
            $table->date('szulido')->nullable()->default('2000-01-01');
            $table->string('szerepkor')->default(0);
            $table->string('adoazonosito')->nullable()->default(null);
            $table->string('adoszam')->nullable()->default(null);
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        User::create([
            'name' => "Szerelo Pista",
            'telefon' => '06702001234',
            'cim' => '1234 Budapest, Szerelők útja 1.',
            'szulido' => '1980-01-01',
            'szerepkor' => 'szerelo',
            'adoazonosito' => '12345678911',
            'email' => 'szerelo.pista@gmail.com',
            'password' => 'szerelopista',
            'remember_token' => Str::random(10),
        ]);

        User::create([
            'name' => "Szerelo Janos",
            'telefon' => '06702001235',
            'cim' => '1234 Budapest, Szerelők útja 1.',
            'szulido' => '1980-01-02',
            'szerepkor' => 'szerelo',
            'adoazonosito' => '12345674911',
            'email' => 'szerelo.janos@gmail.com',
            'password' => 'szerelojanos',
            'remember_token' => Str::random(10),
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};

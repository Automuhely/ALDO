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
            $table->string('name', 50);
            $table->string('telefon', 15);
            $table->string('cim', 150);
            $table->date('szulido')->nullable()->default('2000-01-01');
            $table->string('szerepkor', 15)->default("ugyfel");
            $table->string('adoazonosito', 15)->nullable()->default(null);
            $table->string('adoszam', 15)->nullable()->default(null);
            $table->string('email', 50)->unique();
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
            'id' => '1',
            'name' => "Szerelo Admin",
            'telefon' => '06702001234',
            'cim' => '1234 Budapest, Vezér út 1.',
            'szulido' => '1980-01-01',
            'szerepkor' => 'vezetoszerelo',
            'adoazonosito' => '12345678911',
            'email' => 'vezetoszerelo@aldo.hu',
            'password' => 'aldomuhely',
            'remember_token' => Str::random(10),
        ]);

        User::create([
            'id' => '2',
            'name' => "Szerelo Janos",
            'telefon' => '06702001135',
            'cim' => '1234 Budapest, Szerelők útja 1.',
            'szulido' => '1980-01-02',
            'szerepkor' => 'szerelo',
            'adoazonosito' => '12345674911',
            'email' => 'szerelo@aldo.hu',
            'password' => 'aldomuhely',
            'remember_token' => Str::random(10),
        ]);

        User::create([
            'id' => '3',
            'name' => "Felhasználó Béla",
            'telefon' => '06702001235',
            'cim' => '1234 Budapest, Béla utca 1.',
            'szulido' => '1980-01-02',
            'szerepkor' => 'ugyfel',
            'adoazonosito' => '12345674911',
            'email' => 'user@gmail.com',
            'password' => 'aldomuhely',
            'remember_token' => Str::random(10),
        ]);

        User::create([
            'id' => '4',
            'name' => "Céges Elek",
            'telefon' => '06702001125',
            'cim' => '1234 Budapest, Cég útja 1.',
            'szulido' => '1980-01-02',
            'szerepkor' => 'ugyfel',
            'adoszam' => '1234567491',
            'email' => 'ceges@ceg.hu',
            'password' => 'aldomuhely',
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

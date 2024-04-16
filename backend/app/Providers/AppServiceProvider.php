<?php

namespace App\Providers;

use App\Models\Munkalap;
use App\Models\MunkalapTetel;
use App\Observers\MunkalapObserver;
use App\Observers\MunkalapTetelObserver;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        

        ResetPassword::createUrlUsing(function (object $notifiable, string $token) {
            return config('app.frontend_url')."/password-reset/$token?email={$notifiable->getEmailForPasswordReset()}";
        });

        // observerekre való feliratkozás
        Munkalap::observe(MunkalapObserver::class);
        MunkalapTetel::observe(MunkalapTetelObserver::class);

    }

    protected function registerMiddleware()
    {
        // Itt regisztrálhatod a middleware-eket
        Route::middleware('cors')->register();
    }

   
}

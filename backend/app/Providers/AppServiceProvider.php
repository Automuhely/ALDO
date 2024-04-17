<?php

namespace App\Providers;

use App\Models\Auto;
use App\Models\Munkalap;
use App\Models\MunkalapTetel;
use App\Observers\AutoObserver;
use App\Observers\MunkalapObserver;
use App\Observers\MunkalapTetelObserver;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\ServiceProvider;

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
        Auto::observe(AutoObserver::class);


    }
}

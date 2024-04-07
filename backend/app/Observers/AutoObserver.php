<?php

namespace App\Observers;

use App\Models\Auto;

class AutoObserver
{
    /**
     * Handle the Auto "created" event.
     */
    public function created(Auto $auto): void
    {
       
    }

    /**
     * Handle the Auto "updated" event.
     */
    public function updated(Auto $auto): void
    {
        //
    }

    /**
     * Handle the Auto "deleted" event.
     */
    public function deleted(Auto $auto): void
    {
        //
    }

    /**
     * Handle the Auto "restored" event.
     */
    public function restored(Auto $auto): void
    {
        //
    }

    /**
     * Handle the Auto "force deleted" event.
     */
    public function forceDeleted(Auto $auto): void
    {
        //
    }
}

<?php

namespace App\Observers;

use App\Models\Munkalap;
use Exception;

class MunkalapObserver
{
    /**
     * Handle the Munkalap "created" event.
     */
    public function created(Munkalap $munkalap): void
    {
       // dd("Munkalap observer meghívva - create");
        if ($munkalap->ugyfel === $munkalap->munkavezeto) {
            throw new Exception('Munkalap Observer: Ügyfél és munkavezető nem lehet ugyanaz a személy.');
        }
    }

    /**
     * Handle the Munkalap "updated" event.
     */
    public function updated(Munkalap $munkalap): void
    {
       // dd("Munkalap observer meghívva - update");
        if ($munkalap->ugyfel === $munkalap->munkavezeto) {
            throw new Exception('Ügyfél és munkavezető nem lehet ugyanaz a személy.');
        }
    }

    /**
     * Handle the Munkalap "deleted" event.
     */
    public function deleted(Munkalap $munkalap): void
    {
        //
    }

    /**
     * Handle the Munkalap "restored" event.
     */
    public function restored(Munkalap $munkalap): void
    {
        //
    }

    /**
     * Handle the Munkalap "force deleted" event.
     */
    public function forceDeleted(Munkalap $munkalap): void
    {
        //
    }
}

<?php

namespace App\Observers;

use App\Models\MunkalapTetel;
use Exception;

class MunkalapTetelObserver
{
    /**
     * Handle the MunkalapTetel "created" event.
     */
    public function created(MunkalapTetel $munkalapTetel): void
    {
        // dd("MunkalapTétel observer meghívva - create");
        $letezoTetel = MunkalapTetel::where('munkalapszam', $munkalapTetel->munkalapszam)
            ->where('feladat_id', $munkalapTetel->feladat_id)
            ->exists();

        if ($letezoTetel) {
            throw new Exception('MunkalapTétel Observer: Ez a munkalap már tartalmazza ezt a tételt.');
        }
    }

    /**
     * Handle the MunkalapTetel "updated" event.
     */
    public function updated(MunkalapTetel $munkalapTetel): void
    {
        //
    }

    /**
     * Handle the MunkalapTetel "deleted" event.
     */
    public function deleted(MunkalapTetel $munkalapTetel): void
    {
        //
    }

    /**
     * Handle the MunkalapTetel "restored" event.
     */
    public function restored(MunkalapTetel $munkalapTetel): void
    {
        //
    }

    /**
     * Handle the MunkalapTetel "force deleted" event.
     */
    public function forceDeleted(MunkalapTetel $munkalapTetel): void
    {
        //
    }
}

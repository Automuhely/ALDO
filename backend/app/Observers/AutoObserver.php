<?php

namespace App\Observers;

use App\Models\Auto;

class AutoObserver
{
    /**
     * Handle the Auto "created" event.
     */
    public function created(Auto $auto)
    {
        $ugyfelAutok = Auto::where('ugyfel', $auto->ugyfel)
            ->where('becenev', $auto->becenev)
            ->where('id', '!=', $auto->id)
            ->exists();

        if ($ugyfelAutok) {
            abort(422, 'Már van ilyen nevű autód.');
            return response()->json(['error' => 'Már van ilyen nevű autód.'], 422);
        }
    }

    /**
     * Handle the Auto "updated" event.
     */
    public function updated(Auto $auto)
    {
        $ugyfelAutok = Auto::where('ugyfel', $auto->ugyfel)
            ->where('becenev', $auto->becenev)
            ->where('id', '!=', $auto->id)
            ->exists();

        if ($ugyfelAutok) {
            abort(422, 'Már van ilyen nevű autód.');
            return response()->json(['error' => 'Már van ilyen nevű autód.'], 422);
        }
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

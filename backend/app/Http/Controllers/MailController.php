<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail; 
use App\Mail\Email;
use Illuminate\Http\Request; 

class MailController extends Controller 
{ 
   
    public function store(Request $request)
    {
        // Ellenőrizd a bejövő adatokat és készítsd elő a $mailData tömböt
        $mailData = [
            'title' => $request->input('title'),
            'body' => $request->input('body')
        ];

        // Küldd el az emailt
        Mail::to('aldo.szerviz@gmail.com')
            ->send(new Email($mailData));

        // Visszajelzés a sikeres kérésekről
        return response()->json(['message' => 'Email sent successfully'], 200);
    }
} 


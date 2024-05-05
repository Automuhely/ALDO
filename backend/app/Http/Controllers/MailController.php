<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Email;

class MailController extends Controller
{
    public function store(Request $request)
    {
        // Ellenőrizd a bejövő adatokat és készítsd elő a $mailData tömböt
        $mailData = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'subject' => $request->input('subject'),
            'rendszam' => $request->input('rendszam'),
            'uzenet' => $request->input('uzenet'),
        ];

        // Küldd el az emailt
        $email = new Email($mailData);
        $email->subject($mailData['subject']);
        $email->from($mailData['email'], $mailData['name']);

        Mail::to('aldo.szerviz@gmail.com')->send($email);

        // Visszajelzés a sikeres kérésekről
        return response()->json(['message' => 'Email sikeresen elküldve!'], 200);
    }
}
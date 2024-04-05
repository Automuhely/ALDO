<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\DemoMail;

class MailController extends Controller
{
    // Az index metódus kívül van a sendEmail metóduson
    public function index()
    {
        $mailData = [
            'title' => 'Mail from your_email.com',
            'body' => 'This is for testing email using smtp.',
        ];

        Mail::to('aldo.szerviz@gmail.com')
            ->send(new DemoMail($mailData));

        // Válasz küldése a frontend-nek, hogy az tudja, hogy sikeres volt az e-mail küldés
        return response()->json(['message' => 'Email sent successfully'], 200);
    }

    // A sendEmail metódus a MailController osztályon belül van
    public function sendEmail(Request $request)
    {
        $mailData = [
            'vezeteknev' => $request->input('vezeteknev'),
            'keresztnev' => $request->input('keresztnev'),
            'email' => $request->input('email'),
            'subject' => $request->input('subject'),
            'message' => $request->input('message'),
            'attachment' => $request->file('attachment'),
        ];

        Mail::to('aldo.szerviz@gmail.com')
            ->send(new DemoMail($mailData));

        // Válasz küldése a frontend-nek, hogy az tudja, hogy sikeres volt az e-mail küldés
        return response()->json(['message' => 'Email sent successfully'], 200);
    }
}


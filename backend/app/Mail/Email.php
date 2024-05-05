<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Email extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * Create a new message instance.
     */
    public $mailData;   
    public function __construct($mailData)
    {
        {                                  
            $this->mailData = $mailData;    
            
            } 
            
    }
    


    public function envelope(): Envelope
    {
        return new Envelope(
            subject: $this->mailData['subject'],
        );
    }

    public function content(): Content
    {
        return new Content( 
            view: 'email.test', 
        ); 
    }
    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}

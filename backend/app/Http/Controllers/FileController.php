<?php 
namespace App\Http\Controllers; 
use Illuminate\Http\Request; 
class FileController extends Controller 
{ 
    public function index() 
    { 
        return view('fileUpload'); 
    } 
    public function store(Request $request) 
    { 
        $request->validate([ 
            'file' => 'required|mimes:txt,pdf,xlx,csv,png,jpg,jpeg,mp3,mp4|max:2048', 

        ]); 
        //ha eredeti nevét megtartanád, a jobb oldalon legyen: $request->file->getClientOriginalName(); 
        $fileName = time() . '.' . $request->file->extension(); 
        $request->file->move(public_path('uploads'), $fileName); 
        // ebben az esetben ide kerülnek a fájlok: 
        //public/uploads/file.txt 
        return back() 
            ->with('success', 'You have successfully upload file.') 
            ->with('file', $fileName); 
    } 
} 


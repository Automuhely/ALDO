<?php

namespace App\Http\Controllers;

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        return response()->json(User::all());
    }

    public function show($id)
    {
        return response()->json(User::find($id));
    }

    public function store(Request $request)
    {
        (new User())->fill($request->all())->save();
    }

    public function update(Request $request, $id)
    {
        User::findorFail($id)->fill($request->all())->save();
    }
    
    public function destroy($id)
    {
        User::findOrFail($id)->delete();
    }

    // bejelentkezett felhasználó
    
    public function bejelentkezettFelhasznalo(){
        $user = Auth::user();
        return $user;
    }
}

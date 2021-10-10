<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store() {
       $attributes= request()->validate([
           'name'=> 'required',
           'email'=> 'required|email',
           'password'=> 'required',
       ]);
       $attributes['password']=Hash::make($attributes['password']);
       $user=User::create($attributes);
       return $user;
    }
    
}

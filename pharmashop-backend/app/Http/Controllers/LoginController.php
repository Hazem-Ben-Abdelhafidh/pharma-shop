<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function store(){
        
    $user= User::where('email',request()->email)->first();
    if(!$user || !Hash::check(request()->password, $user->password)) {
        return  ['error'=>'please check your informations!'];
    }
    return $user;
    
    
}
}

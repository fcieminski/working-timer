<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
   public function getUser(Request $request)
   {
        return Auth::user();
   }

   public function logout(Request $request)
   {
        return Auth::logout();
   }

   public function getUserWorks()
   {
     
   }
}

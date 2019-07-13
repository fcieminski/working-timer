<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class ProfileController extends Controller
{
   public function getuser(Request $request)
   {
        return $request->user();
   }
   public function logout(Request $request)
   {
        return Auth::logout();
   }
}

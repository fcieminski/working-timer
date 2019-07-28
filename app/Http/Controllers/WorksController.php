<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ProfileController;
use App\Works;
class WorksController extends Controller
{
    public function show()
    {
        return Works::where('user_id', auth()->id())->get();
    }

    public function create(Request $request)
    {
        $works = new Works();
        $works->time = $request->time;
        $works->done = false;
       //AUTH USER NOT WORKING
        $works->user_id = auth()->user();
        $works->save();
        return response()->json();
    }

    public function updateDone(Request $request, $id)
    {
        $works = Works::findOrFail($id);
        $works->done = $request->done;
        $works->save();
        return response()->json();
    }

}

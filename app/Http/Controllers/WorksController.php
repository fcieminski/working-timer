<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use ProfileController;
use App\Works;

class WorksController extends Controller
{
    public function show()
    {
        return Works::all();
    }

    public function create(Request $request)
    {
        $works = new Works();
        $works->time = $request->time;
        $works->done = false;
        $works->save();
        return ['works' => $works];
    }

    public function updateDone(Request $request, $id)
    {
        $works = Works::findOrFail($id);
        $works->done = $request->done;
        $works->save();
        return ['done' => $works->done];
    }

}

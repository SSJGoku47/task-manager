<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{   
    public function index()
    {   
        return Inertia::render('Dashboard');
    }

    public function users()
    {   
        return Inertia::render('Users/Users');
    }

    public function overview()
    {
        return Inertia::render('Overview');
    }

    public function map()
    {
        return Inertia::render('Map');
    }

    public function departments()
    {
        return Inertia::render('Departments');
    }

    public function doctors()
    {
        return Inertia::render('Doctors');
    }

    public function history()
    {
        return Inertia::render('History');
    }

    public function settings()
    {
        return Inertia::render('Settings');
    }
}

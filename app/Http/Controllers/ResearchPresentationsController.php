<?php

namespace App\Http\Controllers;

use App\Models\ResearchPresentations;
use Illuminate\Http\Request;

class ResearchPresentationsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}

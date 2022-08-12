<?php

namespace App\Http\Controllers;

use App\Models\ResearchPublications;
use Illuminate\Http\Request;

class ResearchPublicationsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}

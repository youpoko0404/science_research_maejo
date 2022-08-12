<?php

namespace App\Http\Controllers;

use App\Models\ResearchFundings;
use Illuminate\Http\Request;

class ResearchFundingsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}

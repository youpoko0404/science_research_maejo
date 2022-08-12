<?php

namespace App\Http\Controllers;

use App\Models\ResearchBenefits;
use Illuminate\Http\Request;

class ResearchBenefitsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}

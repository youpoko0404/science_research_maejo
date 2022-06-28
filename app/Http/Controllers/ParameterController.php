<?php

namespace App\Http\Controllers;

use App\Models\Parameter;

use Illuminate\Http\Request;

class ParameterController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function fetch(Request $request)
    {
        $collection = collect();
        foreach ($request->group_name as $group_name) {
            $result = Parameter::where([
                ['group_name', '=', $group_name],
                ['is_deleted', '=', 0]
            ])->orderBy('sort_order')->get();
            $collection->put($group_name, $result)->all();
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $collection
        ], 200);
    }
}

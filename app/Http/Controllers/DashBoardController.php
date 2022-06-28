<?php

namespace App\Http\Controllers;

use App\Models\Parameter;
use App\Models\Researchs;

use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function fetch()
    {
        $collection = collect();
        $branch_group = Parameter::where([
            ['group_name', '=', 'branch_group'],
            ['is_deleted', '=', 0]
        ])->orderBy('sort_order')->get();

        foreach ($branch_group as $group_name) {
            $researchs = Researchs::where([
                ['research_branch', '=', $group_name->value], ['is_deleted', '=', 0]
            ])->get();
            $collection->push(
                [
                    'branch' => $group_name->value_ref,
                    'count' =>  $researchs->count(),
                    'color' => $group_name->remark
                ]
            );
        }
        $collection->all();

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $collection
        ], 200);
    }
}

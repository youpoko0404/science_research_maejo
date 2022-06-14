<?php

namespace App\Http\Controllers;

use App\Models\Parameter;

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
            $collection->push(
                [
                    'branch' => $group_name->value_ref,
                    'count' => 3,
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

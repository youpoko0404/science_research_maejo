<?php

namespace App\Http\Controllers;

use App\Models\Parameter;
use App\Models\Researchs;
use App\Models\ResearchUsers;
use Illuminate\Support\Str;

use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function fetchDashboard()
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

    public function fetchSearchById($id)
    {
        $research = Researchs::find($id);
        if ($research) {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $research
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function fetchSearch(Request $request)
    {
        $q = $request->q;

        $results = Researchs::where('is_deleted', '=', 0)
            ->orderBy('created_at')
            ->get();

        foreach ($results as $result) {
            $researchs_user = ResearchUsers::where('research_id', '=', $result->id)->get();
            $result['part_2'] = $researchs_user;
        }

        $collection = collect($results);

        $filtered = $collection->filter(function ($value, $key) use ($q) {
            $filtered_arr = array_filter(
                json_decode($value->part_2),
                function ($obj) use ($q) {
                    return str_contains(strtolower($obj->name), strtolower($q));
                }
            );
            return str_contains(strtolower($value->research_name), strtolower($q)) || str_contains(strtolower($value->university_code), strtolower($q)) || $filtered_arr;
        });

        $filtered->all();

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $filtered
        ], 200);
    }
}

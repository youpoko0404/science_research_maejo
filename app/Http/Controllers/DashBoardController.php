<?php

namespace App\Http\Controllers;

use App\Models\Parameter;
use App\Models\Researchs;
use App\Models\ResearchUsers;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\ResearchFundings;
use App\Models\ResearchPresentations;
use App\Models\ResearchPublications;
use App\Models\ResearchBenefits;

use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    public function fetchDashboard()
    {
        $collection = collect();

        $branch_group = Parameter::where([
            ['group_name', '=', 'bachelor_degree_branch_group'],
            ['is_deleted', '=', 0]
        ])->orWhere('group_name', '=', 'master_degree_branch_group')
            ->orWhere('group_name', '=', 'doctor_degree_branch_group')
            ->orderBy('sort_order')->get();


        foreach ($branch_group as $branch) {
            $research = Researchs::where([
                ['research_branch', '=', $branch->value], ['is_deleted', '=', 0],
                ['research_branch_main', '=', $branch->group_name], ['is_deleted', '=', 0]
            ])->get();
            $collection->push(
                [
                    'branch' => $branch->value_ref,
                    'count' =>  $research->count(),
                    'color' => $branch->remark
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
        $research_funding = ResearchFundings::where('research_id', '=', $id)->get();
        $research_presentations = ResearchPresentations::where('research_id', '=', $id)->get();
        $research_publications = ResearchPublications::where('research_id', '=', $id)->get();
        $research_benefits = ResearchBenefits::where('research_id', '=', $id)->get();

        if ($research) {
            $research['research_fundings'] = $research_funding;
            $research['research_presentations'] = $research_presentations;
            $research['research_publications'] = $research_publications;
            $research['research_benefits'] = $research_benefits;
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

        // foreach ($results as $result) {
        //     $researchs_user = ResearchUsers::where('research_id', '=', $result->id)->get();
        //     $result['part_2'] = $researchs_user;
        // }

        $collection = collect($results);

        $filtered = $collection->filter(function ($value, $key) use ($q) {
            // $filtered_name = array_filter(
            //     json_decode($value->part_2),
            //     function ($obj) use ($q) {
            //         return str_contains(strtolower($obj->name), strtolower($q));
            //     }
            // );
            return
                str_contains(strtolower($value->ref_code_university), strtolower($q)) ||
                str_contains(strtolower($value->title_name_th), strtolower($q)) ||
                str_contains(strtolower($value->title_name_en), strtolower($q)) ||
                str_contains(strtolower($value->research_main_name), strtolower($q)) ||
                str_contains(strtolower($value->research_second_name), strtolower($q));

            // str_contains(strtolower($value->university_code), strtolower($q)) ||
            // $filtered_name;
        })->values();


        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $filtered
        ], 200);
    }

    public function downloadFile(Request $request)
    {
        if (Storage::get('public/files/' . $request->id . '/' . $request->filename)) {
            return Storage::download('public/files/' . $request->id . '/' . $request->filename);
        }
        return response()->json([
            'success' => true,
            'message' => 'Not Found',
            'payload' =>  null
        ], 404);;
    }
}

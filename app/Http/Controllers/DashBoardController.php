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
use App\Models\ResearchSeconds;
use App\Models\UserExpertise;
use Illuminate\Support\Facades\DB;

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


        foreach ($branch_group as $branch) {
            $research = Researchs::where([
                ['research_branch', '=', $branch->value], ['is_deleted', '=', 0],
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
        $research_seconds = ResearchSeconds::where('research_id', '=', $id)->get();

        if ($research) {
            $research['research_fundings'] = $research_funding;
            $research['research_presentations'] = $research_presentations;
            $research['research_publications'] = $research_publications;
            $research['research_benefits'] = $research_benefits;
            $research['research_seconds'] = $research_seconds;
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

        $collection = collect($results);

        $split_search_or = explode("OR", $q);

        $res = collect();

        foreach ($split_search_or as $name) {
            if ($name) {
                $space = str_replace(' ', '', $name);
                $filtered = $collection->filter(function ($value, $key) use ($space) {
                    return
                        str_contains(strtolower($value->ref_code_university), strtolower($space)) ||
                        str_contains(strtolower($value->title_name_th), strtolower($space)) ||
                        str_contains(strtolower($value->title_name_en), strtolower($space)) ||
                        str_contains(strtolower($value->research_main_name), strtolower($space)) ||
                        str_contains(strtolower($value->research_second_name), strtolower($space)) ||
                        str_contains(strtolower($value->research_period_start), strtolower($space));
                })->values();

                foreach ($filtered as $obj) {
                    $res->push($obj);
                }
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $res->unique('id')->all()
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

    public function fetchSearchUserExpertise(Request $request)
    {
        $q = $request->q;

        $results = UserExpertise::orderBy('created_at')->get();

        if ($q == '') {
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $results
            ], 200);
        }

        $results = UserExpertise::orderBy('created_at')->get();

        $collection = collect($results);

        $filtered = $collection->filter(function ($value, $key) use ($q) {
            return
                str_contains(strtolower($value->citizen_id), strtolower($q)) ||
                str_contains(strtolower($value->title_position_short), strtolower($q)) ||
                str_contains(strtolower($value->first_name), strtolower($q)) ||
                str_contains(strtolower($value->last_name), strtolower($q)) ||
                str_contains(strtolower($value->section_id), strtolower($q)) ||
                str_contains(strtolower($value->section), strtolower($q)) ||
                str_contains(strtolower($value->division_id), strtolower($q)) ||
                str_contains(strtolower($value->division), strtolower($q)) ||
                str_contains(strtolower($value->faculty_id), strtolower($q)) ||
                str_contains(strtolower($value->faculty), strtolower($q)) ||
                str_contains(strtolower($value->person_exp_id), strtolower($q)) ||
                str_contains(strtolower($value->exp_type_id), strtolower($q)) ||
                str_contains(strtolower($value->exp_type), strtolower($q)) ||
                str_contains(strtolower($value->exp_acad_position), strtolower($q)) ||
                str_contains(strtolower($value->exp_group_field_id), strtolower($q)) ||
                str_contains(strtolower($value->exp_group_field), strtolower($q)) ||
                str_contains(strtolower($value->exp_group_field_en), strtolower($q)) ||
                str_contains(strtolower($value->exp_main_field_id), strtolower($q)) ||
                str_contains(strtolower($value->exp_main_field_en), strtolower($q)) ||
                str_contains(strtolower($value->exp_sub_field_id), strtolower($q)) ||
                str_contains(strtolower($value->exp_sub_field), strtolower($q)) ||
                str_contains(strtolower($value->exp_sub_field_en), strtolower($q)) ||
                str_contains(strtolower($value->exp_detail), strtolower($q)) ||
                str_contains(strtolower($value->exp_main_field), strtolower($q));
        })->values();


        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $filtered
        ], 200);
    }
}

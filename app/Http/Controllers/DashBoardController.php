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

    public function table()
    {
        $tables = DB::select('SHOW TABLES');
        return response()->json($tables, 200);
    }

    public function database(Request $request)
    {
        $result = DB::table($request->table)->get();
        return response()->json($result, 200);
    }
}

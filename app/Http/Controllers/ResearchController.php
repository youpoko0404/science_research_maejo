<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Researchs;
use App\Models\ResearchUsers;

class ResearchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchAll()
    {
        $research = Researchs::where([
            ['created_by', '=', auth()->user()->id],
            ['is_deleted', '=', 0]
        ])->get();

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

    public function fetchById($id)
    {
        $research = Researchs::find($id);
        $researchs_user = ResearchUsers::where('research_id', '=', $id)->get();

        if ($research && $research->created_by == auth()->user()->id) {
            if ($researchs_user) {
                $research['part_2'] = $researchs_user;
            }
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

    public function save(Request $request)
    {
        $research = new Researchs($request->all());
        $research->created_by = auth()->user()->id;
        $research->save();

        $research->update(
            [
                'research_code' =>  'R' . $research->id,
                'part_11' =>  $this->uploadFile($request->file('part_11'), $research->id)['name'] ?? null,
                'ref_file' => $this->uploadFile($request->file('ref_file'), $research->id)['name'] ?? null,
            ]
        );

        if ($request->part_2) {
            foreach (json_decode($request->part_2) as $research_user) {
                $researchUsersModels = new ResearchUsers;
                $researchUsersModels->research_id = $research->id;
                $researchUsersModels->name = $research_user->name;
                $researchUsersModels->agency = $research_user->agency;
                $researchUsersModels->branch = $research_user->branch;
                $researchUsersModels->research_position = $research_user->research_position;
                $researchUsersModels->percen_responsibility = $research_user->percen_responsibility;
                $researchUsersModels->save();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $research->id
        ], 200);
    }

    public function edit($id, Request $request)
    {
        $research = Researchs::find($id);
        $research->university_code = $request->university_code;
        $research->part_11 = $this->updateFile($request->file('part_11'), $research->part_11,  $id)['name'] ?? null;
        $research->ref_file = $this->updateFile($request->file('ref_file'), $research->ref_file, $id)['name'] ?? null;
        $research->update();

        if ($request->part_2) {
            $researchUsersToDelete = ResearchUsers::all()->pluck('id', 'id');
            foreach (json_decode($request->part_2) as $research_user) {
                $researchUsersWhere = [
                    'id' => $research_user->id ?? 0,
                ];
                $researchUsersData = [
                    'agency' => $research_user->agency,
                    'branch' => $research_user->branch,
                    'name' => $research_user->name,
                    'percen_responsibility' => $research_user->percen_responsibility,
                    'research_id' => $research->id,
                    'research_position' => $research_user->research_position,
                ];
                $createdOrUpdated = ResearchUsers::updateOrCreate($researchUsersWhere, $researchUsersData);
                if (!empty($researchUsersToDelete[$createdOrUpdated->id])) {
                    unset($researchUsersToDelete[$createdOrUpdated->id]);
                }
            }
            if (count($researchUsersToDelete)) {
                ResearchUsers::whereIn('id', $researchUsersToDelete)->where('research_id', $research->id)->delete();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $research->id
        ], 200);
    }

    public function delete($id)
    {
        $research = Researchs::find($id);
        if ($research) {
            $research->update(
                [
                    'is_deleted' => 1
                ]
            );
            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  null
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'File not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function uploadFile($request, $id)
    {
        if ($request && $request->getSize() != 0) {
            $filename = $request->getClientOriginalName();
            $path = $request->storeAs('public/files/' . $id . '/', $filename);
            $response = [
                'path' => $path,
                'name' => $filename
            ];
            return $response;
        }
        return null;
    }

    public function updateFile($request, $oldFilename, $id)
    {
        if ($request && $request->getSize() != 0) {
            $filename = $request->getClientOriginalName();
            $path = $request->storeAs('public/files/' . $id . '/', $filename);
            $response = [
                'path' => $path,
                'name' => $filename
            ];
            return $response;
        } else if ($request && $request->getSize() == 0) {
            $response = [
                'name' => $oldFilename
            ];
            return $response;
        }
        return null;
    }
}

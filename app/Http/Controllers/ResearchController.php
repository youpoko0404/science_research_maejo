<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Researchs;

class ResearchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchAll()
    {
        $research = Researchs::where("created_by", auth()->user()->id)->get();
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

    public function save(Request $request)
    {
        $research = new Researchs($request->all());
        $research->created_by = auth()->user()->id;
        $research->save();

        $research->update(
            [
                'part_11' =>  $this->uploadFile($request->file('part_11'), $research->id)['name'] ?? null,
                'ref_file' => $this->uploadFile($request->file('ref_file'), $research->id)['name'] ?? null,
            ]
        );

        return response()->json([
            'success' => true,
            'message' => 'Successfully',
            'payload' =>  $research->id
        ], 200);
    }

    public function edit($id, Request $request)
    {

        $research = Researchs::find($id);

        $research->part_11 = $this->updateFile($request->file('part_11'),  $research->part_11, $id)['name'] ?? null;
        $research->ref_file = $this->updateFile($request->file('ref_file'), $research->ref_file, $id)['name'] ?? null;
        $research->save();

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
                'success' => true,
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
            if (Storage::exists('public/files/' . $id . '/' . $oldFilename)) {
                Storage::delete('public/files/' . $id . '/' . $oldFilename);
            }
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
}

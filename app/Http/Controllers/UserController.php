<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\UserExpertise;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchExpertiseAll()
    {
        $research = UserExpertise::where([
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

    public function insertExpertise(Request $request)
    {
        if ($request) {
            $expertise = new UserExpertise($request->all());
            $expertise->type = $request->user_expertise;
            $expertise->user_id = auth()->user()->id;
            $expertise->save();

            return response()->json([
                'success' => true,
                'message' => 'Successfully',
                'payload' =>  $expertise
            ], 200);
        } else {
            return response()->json([
                'success' => true,
                'message' => 'Not found',
                'payload' =>  null
            ], 404);
        }
    }

    public function deleteUserExpertise($id)
    {
        $item = UserExpertise::find($id);
        if ($item) {
            $item->is_deleted = 1;
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
}

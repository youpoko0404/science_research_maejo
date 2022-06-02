<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Carbon\Carbon;


class ChangePasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function changePassword(Request $request)
    {

        if ($request->get('skip')) {
            $user = User::find(auth()->user()->id);
            $user->last_login = Carbon::now()->toDateTimeString();
            $user->save();
            return response()->json(['success' => "Skip Changed Password"]);
        }

        if (!(Hash::check($request->get('current_password'), User::find(auth()->user()->id)->password))) {
            // The passwords matches
            return response()->json(['error' =>  "Your current password does not matches with the password you provided. Please try again."]);
        }

        if (strcmp($request->get('current_password'), $request->get('new_password')) == 0) {
            //Current password and new password are same
            return response()->json(['error' =>   "New Password cannot be same as your current password. Please choose a different password."]);
        }

        // Change Password
        $user = User::find(auth()->user()->id);
        $user->password = bcrypt($request->get('new_password'));
        $user->last_login = Carbon::now()->toDateTimeString();
        $user->save();

        return response()->json(['success' => "Password has been changed"]);
    }
}

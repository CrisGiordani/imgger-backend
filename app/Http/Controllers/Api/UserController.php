<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function show($id) {
        $user = DB::table('users')
            ->where('id', $id)
            ->get();

        return response()->json($user);
    }

    public function store(Request $request)
    {

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->admin = 0;
        $user->password = Hash::make($request->password);

        $user->save();
      
        return response()->json($user);
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        $user->name = $request->name;
        $user->email = $request->email;
        
        if(!empty($request->password)) {
            $user->password = Hash::make($request->password);
        }
        $user->update();

        return $user;
    }

 
}

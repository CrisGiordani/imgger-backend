<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{

    public function indexUser()
    {
        // verifica se é ADMIN
        if(auth('api')->user()->admin) {
            $users = User::all();
            return response()->json($users);
        } else {
            return response()->json(['error' => 'Operação não permitida'], 401); 
        }
    }

    public function indexImages() 
    {
        $files = Storage::allFiles('uploaded_images');
        return $files;
    }


    public function updateUser(Request $request, $id)
    {
        // verifica se é ADMIN
        if(auth('api')->user()->admin) {

            $user = DB::table('users')
            ->where('id', $id)
            ->update([
                'name' => $request->name,
                'email' => $request->email
            ]);

            if(!empty($request->password)) {
                $user = DB::table('users')
                ->where('id', $id)
                ->update([
                    'password' => Hash::make($request->password)
                ]);
            }
            return response()->json(['message' => 'Perfil atualizado com sucesso'], 200);

        } else {
            return response()->json(['error' => 'Operação não permitida'], 401); 
        }
    }


    public function destroyUser($id)
    {
        // verifica se é ADMIN
        if(auth('api')->user()->admin) {

            $user = DB::table('users')
            ->where('id', $id)
            ->delete();

            return response()->json(['message' => 'Perfil excluído com sucesso'], 200);

        } else {
            return response()->json(['error' => 'Operação não permitida'], 401); 
        }
    }

    

}

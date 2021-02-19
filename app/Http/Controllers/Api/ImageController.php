<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use File;
use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{


    public function list($id) 
    {

        $user = DB::table('users')
            ->where('id', '=', $id)
            ->get();
        
        $photos = DB::table('images')
            ->where('user_id', '=', $id)
            ->orderBy('updated_at', 'DESC')
            ->get();

        $result = (object) array();

        $result->user = $user;
        $result->photos = $photos;

        return response()->json($result);
    }

    public function listAll(Request $request) 
    {

        if($request->search) {
            $allImages = DB::table('images')
                ->join('users', 'users.id', '=', 'images.user_id')
                ->select('users.*', 'images.*')
                ->where('images.title', 'like', '%'.$request->search.'%')
                ->orWhere('images.description', 'like', '%'.$request->search.'%')
                ->orWhere('images.tags', 'like', '%'.$request->search.'%')
                ->orderBy('images.updated_at', 'desc')
                ->simplePaginate(15);
        } else {
            $allImages = DB::table('images')
                ->join('users', 'users.id', '=', 'images.user_id')
                ->select('users.*', 'images.*')
                ->orderBy('images.updated_at', 'desc')
                ->simplePaginate(15);
        }
    
        return response()->json($allImages);
    }

    public function delete($id) 
    {
        
        // verifica se é ADMIN
        if(auth('api')->user()->admin) {
            $image = DB::table('images')
                ->where('path', $id)
                ->delete();
        } else {
            $image = DB::table('images')
                ->where('user_id', auth('api')->user()->id)
                ->where('path', $id)
                ->delete();
        }
        if($image) {
            $path = $id;
            $thumb = "thumb_" . $path;
    
            if(Storage::exists($path)) {
                Storage::delete($path);
                Storage::delete($thumb);
            } else {
                return response()->json(['error' => 'Operação não permitida'], 401);    
            }
            return response()->json(['message' => 'Imagem excluída com sucesso'], 200);
        } else {
            return response()->json(['error' => 'Imagem não encontrada'], 404);    
        }
        

    }
}

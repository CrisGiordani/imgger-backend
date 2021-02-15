<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\DB;

class ImageController extends Controller
{
    public function index() 
    {
        $files = Storage::allFiles('uploaded_images');
        return $files;
    }

    public function list() 
    {
        $files = DB::table('images')
            ->where('user_id', auth('api')->user()->id)
            ->orderBy('id', 'DESC')
            ->get();
        return $files;
    }

    public function delete(Request $request) 
    {
        $image = DB::table('images')
            ->where('user_id', auth('api')->user()->id)
            ->where('path', $request->id)
            ->delete();
        
        if(\File::exists(public_path($request->id))){
            \File::delete(public_path($request->id));
        } else {
            return response()->json(['error' => 'Operação não permitida'], 401);    
        }
        
        return response()->json(['message' => 'Imagem excluída com sucesso'], 200);
        

    }
}

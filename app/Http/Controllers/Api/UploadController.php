<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Images;

class UploadController extends Controller
{
    public function upload(Request $request) {

        $image = new Image();
        $image->user_id = auth('api')->user()->id;
        $image->title = $request->title;
        $image->description = $request->description;
        $image->tags = $request->tags;
        
        // salva imagem original
        $path = $request->file('photo')->store('/');
        
        $image->path = $path;
        $image->save();

        // salva um thumbnail de 300px
        $thumb = Images::make($request->file('photo'))
            ->fit(200)
            ->save(public_path('storage/thumb_'.$path));
    }
}

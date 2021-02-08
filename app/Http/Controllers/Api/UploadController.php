<?php

namespace App\Http\Controllers\Api;

use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request) {

        $image = new Image();
        $image->user_id = auth('api')->user()->id;
        $image->title = $request->title;
        $image->description = $request->description;
        $image->tags = $request->tags;
        $image->path = $request->file('photo')->store('/');
        $image->save();

    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        Image::create([
            'uploaded_at' => $request->uploaded_at,
            'image' => '/storage/'.$request->file('image')->store('images','public')
        ]);

        return response()->json(['msg' => 'Imagen Guardada']);
    }


    public function getImages()
    {
        return response()->json([
            'images' => Image::orderBy('uploaded_at', 'desc')->get()
        ]);
    }
}

<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
use App\Models\List_Materi;
use App\Http\Resources\ListMateriResource;
use Inertia\Inertia;


class ListMateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(List_Materi $list_Materi)
    {
        $Detailmateri = List_Materi::where('kode_materi',$list_Materi->kode_materi)->get();
        $DetailMateriResource = ListMateriResource::collection($Detailmateri)->resolve();
        return Inertia::render('Dashboard/DetailMateri', [
            'title' => "Detail Materi",
            'Detail_materi' => $DetailMateriResource
            
        ]);
    }



    
}

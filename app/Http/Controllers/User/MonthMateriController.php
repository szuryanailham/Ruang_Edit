<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;
// CALLING MODEL
use App\Models\Month_Materi;
use App\Models\List_Materi;
// RESOUCE
use App\Http\Resources\ListMateriResource;

use Inertia\Inertia;
use App\Http\Requests\StoreMonth_MateriRequest;
use App\Http\Requests\UpdateMonth_MateriRequest;

class MonthMateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Welcome', [
            'title' => "List Materi perbulan",
            'Months' => Month_Materi::all(),
        ]);
    }
    public function show(Month_Materi $month_Materi)
    {
        $materi = List_Materi::where('KD_bulan', $month_Materi->id)->paginate(5);
        $materiResource = ListMateriResource::collection($materi)->resolve();
        $link = $materi->links();
        return Inertia::render('Dashboard/ListMateri', [
            'title' => "daftar materi ". $month_Materi->nama_bulan,
            'materi' => $materiResource,
            'Links' => $link->paginator,
            'paginator' => $link->elements
        ]);
    }

    public function listMateriAdmin(){
        return Inertia::render('Dashboard/Admin/ListEditMateri', [
            'title' => "Edit Materi bulanan",
            'Months' => Month_Materi::all(),
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
// resource
use App\Http\Resources\ListMateriResource;
// CALLING MODEL
use App\Models\Month_Materi;
use App\Models\List_Materi;

class AdminMateriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard/Admin/ListEditMateri', [
            'title' => "List Materi perbulan",
            'Months' => Month_Materi::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/Admin/AddNewMateri', [
            'title' => "Tambah Materi Baru",
            'Months' => Month_Materi::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Month_Materi $month_Materi)
    {
        $materi = List_Materi::where('KD_bulan', $month_Materi->id)->get();
        $materiResource = ListMateriResource::collection($materi)->resolve();
        return Inertia::render('Dashboard/Admin/Materi', [
            'title' => "daftar materi ". $month_Materi->nama_bulan,
            'materi' => $materiResource,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Month_Materi $month_Materi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Month_Materi $month_Materi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Month_Materi $month_Materi)
    {
        //
    }
}

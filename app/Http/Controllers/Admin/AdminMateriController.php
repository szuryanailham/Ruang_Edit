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
// Request
use App\Http\Requests\MateriRequest;
use App\Http\Requests\UpdateMateriRequest;
use App\Models\User;

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

    public function updateCheckbox($id, Request $request)
    {
        $request->validate([
            'members' => 'required|array',
            'members.*.id' => 'required|integer|exists:users,id',
            'members.*.isChecked' => 'required|boolean',
        ]);
        $statusChecked = $request->members;
        dd($statusChecked);
        return response()->json(['success' => true]);
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
    public function store(MateriRequest $request)
    {
        $validatedData = $request->validated();
         // Menemukan ID dari Month_Materi berdasarkan nama_bulan
         $kode_bulan = Month_Materi::where('nama_bulan', $validatedData['nama_bulan'])->value('id');
         // Menggabungkan KD_bulan ke dalam request
         $validatedData['KD_bulan'] = $kode_bulan;

         $listMateri = List_Materi::create($validatedData);
        // Redirect atau berikan response sesuai kebutuhan Anda
         // Redirect dengan pesan sukses
         return redirect()->route('admin.list-materi')->with('success', 'Materi berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Month_Materi $month_Materi)
    {
        $materi = List_Materi::where('KD_bulan', $month_Materi->id)->paginate(5);
        $materiResource = ListMateriResource::collection($materi)->resolve();
        return Inertia::render('Dashboard/Admin/Materi', [
            'title' => "daftar materi ". $month_Materi->nama_bulan,
            'materi' => $materiResource,
            'pagination' => $materi
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($kode_materi)
    {
        $materi = List_Materi::where('id', $kode_materi)->first();
        $bulan = Month_Materi::where('id',$materi->KD_bulan)->first();
        return Inertia::render('Dashboard/Admin/EditMateri',[
            'Months' => Month_Materi::all(),
            'Materi'=> $materi,
            'bulancurrent' => $bulan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMateriRequest $request, List_Materi $edit_materi)
    {
        
        $validatedData = $request->validated();
    
        $materi = List_Materi::where('kode_materi', $edit_materi->kode_materi)->first();
    
        if ($materi) {
            $materi->update($validatedData);
    
            return redirect()->route('admin.list-materi')->with('success', 'Materi berhasil diupdate!');
        } else {
            return redirect()->route('admin.list-materi')->with('error', 'Materi tidak ditemukan.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($kode_materi)
    {
        $materi = List_Materi::findOrfail($kode_materi);
        $materi->delete();

        if($materi) {
            return redirect()->route('admin.list-materi')->with('success', 'Materi berhasil dihapus!');
        }
    }
}

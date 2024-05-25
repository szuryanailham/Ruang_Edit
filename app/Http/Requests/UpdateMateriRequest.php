<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMateriRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'kode_materi' =>'required|string|exists:list__materis,kode_materi',
            'judul' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'kode_youtube' => 'required|string|max:255',
            'nama_bulan' => 'required|string|exists:month__materis,nama_bulan',
            'deskripsi' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'judul.required' => 'Judul wajib diisi.',
            'author.required' => 'Author wajib diisi.',
            'kode_youtube.required' => 'Kode YouTube wajib diisi.',
            'nama_bulan.required' => 'Nama bulan wajib diisi.',
            'nama_bulan.exists' => 'Nama bulan tidak valid.',
            'deskripsi.required' => 'Deskripsi wajib diisi.',
        ];
    }
}

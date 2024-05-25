<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;
use App\Models\Month_Materi;

class MateriRequest extends FormRequest
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
            'nama_bulan' => 'required|exists:month__materis,nama_bulan',
            'kode_materi' => 'required|string',
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'kode_youtube' => 'required|string',
            'author' => 'required|string|max:255',
        ];
    }

    /**
     * Custom error messages.
     */
    public function messages(): array
    {
        return [
            'KD_bulan.required' => 'Kolom KD_bulan wajib diisi.',
            'KD_bulan.exists' => 'KD_bulan tidak valid.',
            'kode_materi.required' => 'Kolom kode_materi wajib diisi.',
            'kode_materi.unique' => 'Kode materi harus unik.',
            'judul.required' => 'Kolom judul wajib diisi.',
            'deskripsi.required' => 'Kolom deskripsi wajib diisi.',
            'kode_youtube.required' => 'Kolom kode_youtube wajib diisi.',
            'author.required' => 'Kolom author wajib diisi.',
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {  
            $this->merge([
                'kode_materi' => 'KD-' . Str::random(8),
            ]);

        }

}


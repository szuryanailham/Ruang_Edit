<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ListMateriResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'KD_bulan' => $this->KD_bulan,
            'kode_materi' => $this->kode_materi,
            'judul' => $this->judul,
            'deskripsi' => $this->deskripsi,
            'link_youtube' => $this->link_youtube,
            'author' => $this->author,
        ];
    }
}

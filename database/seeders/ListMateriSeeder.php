<?php

namespace Database\Seeders;
use App\Models\List_Materi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class ListMateriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D001',
                'judul' => 'Pengenalan Desain Grafis',
                'deskripsi' => 'Materi ini membahas dasar-dasar desain grafis, termasuk elemen dan prinsip desain.',
                'kode_youtube' => 'zQ_FUW_orks',
                'author' => 'Alice Green'
            ],
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D002',
                'judul' => 'Fotografi Dasar',
                'deskripsi' => 'Materi ini membahas teknik dasar fotografi, termasuk komposisi dan pencahayaan.',
                'kode_youtube' => 'oGSApd6naIA',
                'author' => 'Bob Smith'
            ],
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D003',
                'judul' => 'Editing Foto dengan Photoshop',
                'deskripsi' => 'Materi ini membahas teknik dasar pengeditan foto menggunakan Adobe Photoshop.',
                'kode_youtube' => '0480Rrzy8Xs',
                'author' => 'Charlie Johnson'
            ],
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D004',
                'judul' => 'Pengenalan Videografi',
                'deskripsi' => 'Materi ini membahas dasar-dasar videografi, termasuk penggunaan kamera dan pengaturan pengambilan gambar.',
                'kode_youtube' => 'weftV1gYSD8',
                'author' => 'Diana Brown'
            ],
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D005',
                'judul' => 'Editing Video dengan Adobe Premiere Pro',
                'deskripsi' => 'Materi ini membahas teknik dasar pengeditan video menggunakan Adobe Premiere Pro.',
                'kode_youtube' => '0480Rrzy8Xs',
                'author' => 'Edward Wilson'
            ],
            [
                'KD_bulan' => 1,
                'kode_materi' => 'D006',
                'judul' => 'Editing Video dengan Adobe Premiere Pro',
                'deskripsi' => 'Materi ini membahas teknik dasar pengeditan video menggunakan Adobe Premiere Pro.',
                'kode_youtube' => '0480Rrzy8Xs',
                'author' => 'Edward Wilson'
            ]
        ];
        
    
        
        

            List_Materi::insert($data);
    }
}

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
                'kode_materi' => 'M001',
                'judul' => 'Pengenalan Pemrograman PHP',
                'deskripsi' => 'Materi ini membahas dasar-dasar pemrograman PHP.',
                'link_youtube' => 'https://www.youtube.com/watch?v=12345',
                'author' => 'John Doe'
            ],
            [
                'KD_bulan' => 2,
                'kode_materi' => 'M002',
                'judul' => 'Manipulasi Database dengan SQL',
                'deskripsi' => 'Materi ini membahas cara manipulasi database menggunakan SQL.',
                'link_youtube' => 'https://www.youtube.com/watch?v=67890',
                'author' => 'Jane Smith'
            ],
            [
                'KD_bulan' => 2,
                'kode_materi' => 'M003',
                'judul' => 'Pengenalan Framework Laravel',
                'deskripsi' => 'Materi ini membahas pengenalan dan penggunaan dasar Laravel.',
                'link_youtube' => 'https://www.youtube.com/watch?v=ABCDE',
                'author' => 'Mike Johnson'
            ],
            [
                'KD_bulan' => 4,
                'kode_materi' => 'M004',
                'judul' => 'Penggunaan Blade Templating Engine',
                'deskripsi' => 'Materi ini membahas penggunaan Blade untuk membuat tampilan dinamis.',
                'link_youtube' => 'https://www.youtube.com/watch?v=FGHIJ',
                'author' => 'Emily Brown'
            ],
            [
                'KD_bulan' => 5,
                'kode_materi' => 'M005',
                'judul' => 'Pengenalan Vue.js',
                'deskripsi' => 'Materi ini membahas pengenalan dan penggunaan dasar Vue.js.',
                'link_youtube' => 'https://www.youtube.com/watch?v=KLMNO',
                'author' => 'David Wilson'
            ]
        ];

            List_Materi::insert($data);
    }
}

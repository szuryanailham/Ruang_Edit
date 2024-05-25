import Navbar from "@/Components/Dashboard/Navbar";
import React from "react";
import { Button } from "@/Components/shadcn/ui/button";
import { Input } from "@/Components/shadcn/ui/input";
import { Label } from "@/Components/shadcn/ui/label";
import { Textarea } from "@/Components/shadcn/ui/textarea";
import { useForm } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/shadcn/ui/select";

interface Month {
    id: number;
    nama_bulan: string;
}
interface bulancurrent {
    nama_bulan: string;
}
interface Materi {
    id: number;
    KD_bulan: string;
    kode_materi: string;
    judul: string;
    deskripsi: string;
    kode_youtube: string;
    author: string;
    nama_bulan: string;
}

interface Datatype {
    title: string;
    Months: Month[];
    Materi: Materi;
    bulancurrent: bulancurrent;
}
const EditMateri: React.FC<Datatype> = ({
    title,
    Months,
    Materi,
    bulancurrent,
}) => {
    const { data, setData, put, processing, errors } = useForm({
        judul: Materi.judul,
        author: Materi.author,
        kode_youtube: Materi.kode_youtube,
        nama_bulan: bulancurrent.nama_bulan,
        deskripsi: Materi.deskripsi,
        kode_materi: Materi.kode_materi,
    });
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/admin/edit-materi/${Materi.kode_materi}`, {
            onSuccess: () => {
                alert("The material has been updated successfully.");
            },
            onError: () => {
                alert("Failed to update the material. Please try again.");
            },
        });
    };

    return (
        <>
            <Navbar />
            <div className="md:ml-[270px] mb-[100px] ">
                <h1 className="text-3xl my-5 text-center font-bold">
                    Edit materi
                </h1>
                <form
                    className="grid w-full max-w-sm md:max-w-xl mx-auto items-center gap-1.5 space-y-3 px-5 md:px-7"
                    onSubmit={submit}
                >
                    {/* Judul Materi */}
                    <Label className="mb-2" htmlFor="judul">
                        Judul
                    </Label>
                    <Input
                        type="text"
                        id="judul"
                        name="judul"
                        placeholder="Judul Materi ...."
                        className="p-5 bg-slate-200"
                        value={data.judul}
                        onChange={(e) => setData("judul", e.target.value)}
                    />
                    {/* Author */}
                    <Label className="mb-2" htmlFor="author">
                        Author
                    </Label>
                    <Input
                        name="author"
                        type="text"
                        id="author"
                        placeholder="Author ...."
                        className="p-5 bg-slate-200"
                        value={data.author}
                        onChange={(e) => setData("author", e.target.value)}
                    />
                    {/* ID YouTube */}
                    <Label className="mb-2" htmlFor="kode_youtube">
                        ID YouTube
                    </Label>
                    <Input
                        type="text"
                        id="kode_youtube"
                        name="kode_youtube"
                        placeholder="Embed ID YouTube ...."
                        className="p-5 bg-slate-200"
                        value={data.kode_youtube}
                        onChange={(e) =>
                            setData("kode_youtube", e.target.value)
                        }
                    />
                    {/* Bulan */}
                    <Label className="mb-2" htmlFor="bulan">
                        Bulan
                    </Label>
                    <Select
                        name="bulan"
                        value={data.nama_bulan}
                        onValueChange={(value) => setData("nama_bulan", value)}
                    >
                        <SelectTrigger className="w-full bg-slate-200">
                            <SelectValue placeholder="Pilih kategori bulan" />
                        </SelectTrigger>
                        <SelectContent>
                            asasasas
                            <SelectGroup>
                                {Months.map((item) => (
                                    <SelectItem
                                        key={item.id}
                                        value={item.nama_bulan}
                                    >
                                        {item.nama_bulan}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* Deskripsi */}
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="deskripsi">Deskripsi</Label>
                        <Textarea
                            className="bg-slate-200 h-[250px]"
                            placeholder="Type your message here."
                            id="deskripsi"
                            name="deskripsi"
                            value={data.deskripsi}
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                        />
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <Button
                            type="submit"
                            disabled={processing}
                            className="bg-BaseColor"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditMateri;

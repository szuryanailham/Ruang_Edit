import Navbar from "@/Components/Dashboard/Navbar";
import { Button } from "@/Components/shadcn/ui/button";
import { Input } from "@/Components/shadcn/ui/input";
import { Label } from "@/Components/shadcn/ui/label";
import { Textarea } from "@/Components/shadcn/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/shadcn/ui/select";
import React from "react";
import { useForm } from "@inertiajs/react";

interface Month {
    id: number;
    nama_bulan: string;
}

interface Datatype {
    title: string;
    Months: Month[];
}

const AddNewAdmin: React.FC<Datatype> = ({ title, Months }) => {
    const { data, setData, post, processing, errors } = useForm({
        judul: "",
        author: "",
        testimony: "",
        ID_youtube: "",
        bulan: "",
        deskripsi: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/admin/edit-materi", {
            onSuccess: () => {
                console.log("Form submitted successfully");
                // Contoh tambahan: Mengarahkan pengguna setelah berhasil submit
                // Inertia.visit('/admin/some-other-page');
            },
            onError: () => {
                console.log("An error occurred while submitting the form");
            },
        });
    };
    return (
        <>
            <Navbar />
            <div className="md:ml-[250px] mb-10">
                <h1 className="text-2xl font-bold text-center m-5">{title}</h1>
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
                    <Label className="mb-2" htmlFor="ID_youtube">
                        ID YouTube
                    </Label>
                    <Input
                        type="text"
                        id="ID_youtube"
                        name="ID_youtube"
                        placeholder="Embed ID YouTube ...."
                        className="p-5 bg-slate-200"
                        value={data.ID_youtube}
                        onChange={(e) => setData("ID_youtube", e.target.value)}
                    />
                    {/* Bulan */}
                    <Label className="mb-2" htmlFor="bulan">
                        Bulan
                    </Label>
                    <Select
                        name="bulan"
                        value={data.bulan}
                        onValueChange={(value) => setData("bulan", value)}
                    >
                        <SelectTrigger className="w-full bg-slate-200">
                            <SelectValue placeholder="Pilih kategori bulan" />
                        </SelectTrigger>
                        <SelectContent>
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

export default AddNewAdmin;

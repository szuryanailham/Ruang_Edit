import Navbar from "@/Components/Dashboard/Navbar";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/shadcn/ui/table";
import { Checkbox } from "@/Components/shadcn/ui/checkbox";
import { Button } from "@/Components/shadcn/ui/button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useForm } from "@inertiajs/react";
interface Member {
    id: number;
    name: string;
    email: string;
    Bidang: string;
    no_telpon: string;
    alamat: string;
    isAdmin: boolean;
    access: boolean;
}

interface Props {
    member: Member[];
}

const AllMember: React.FC<Props> = ({ member }) => {
    const { delete: destroy } = useForm();
    const handleDeleteMember = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            destroy(route("admin.edit-member.destroy", { edit_member: id }), {
                onSuccess: () => {
                    alert("1");
                },
                onError: () => {
                    alert("materi failed to delete");
                },
            });
        }
    };
    return (
        <>
            <Navbar />
            <div className="md:ml-[270px] mb-[100px] md:m-5">
                <h1 className="text-center text-2xl font-bold my-5">
                    List Member Ruang Edit
                </h1>
                <div className="overflow-x-auto">
                    <Table className="px-10">
                        <TableCaption>A list of Member Ruang edit</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[70px] text-center">
                                    No
                                </TableHead>
                                <TableHead className="w-[200px]">
                                    Nama
                                </TableHead>
                                <TableHead className="w-[200px] text-center">
                                    Gmail
                                </TableHead>
                                <TableHead className="w-[200px] text-center">
                                    Bidang
                                </TableHead>
                                <TableHead className="w-[200px] text-center">
                                    Is Admin
                                </TableHead>
                                <TableHead className="w-[200px] text-center">
                                    Access
                                </TableHead>
                                <TableHead className="w-[200px] text-center">
                                    No Telpon
                                </TableHead>
                                <TableHead className="w-[300px] text-center">
                                    Alamat
                                </TableHead>
                                <TableHead className="w-[300px] text-center">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {member.map((element, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        1
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {element.name}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {element.email}
                                    </TableCell>
                                    <TableCell>{element.Bidang}</TableCell>
                                    <TableCell className="text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {element.no_telpon}
                                    </TableCell>
                                    <TableCell className="text-center w-[200px]">
                                        {element.alamat}
                                    </TableCell>
                                    <TableCell className="text-center w-[200px]">
                                        <Button
                                            onClick={() =>
                                                handleDeleteMember(element.id)
                                            }
                                            className="bg-transparent hover:bg-transparent"
                                        >
                                            <RiDeleteBin5Fill className="text-red-700" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default AllMember;

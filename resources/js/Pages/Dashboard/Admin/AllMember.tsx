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
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/shadcn/ui/pagination";

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

interface PaginationData {
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [url: string | null, label: string, active: boolean];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    current_page: number;
    active: boolean;
    data: Member[];
}

interface Props {
    member: PaginationData;
    paginator: Member[];
}

const AllMember: React.FC<Props> = ({ member, paginator }) => {
    const page = member.links;
    const dataMember = member.data;
    const linksArray = Object.values(paginator[0]);
    console.log(linksArray);
    const activeLink = page.find((link: any) => link.active === true);
    const url = activeLink ? activeLink.url : "";
    const { delete: destroy } = useForm();
    const handleDeleteMember = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            destroy(route("admin.edit-member.destroy", { edit_member: id }), {
                onSuccess: () => {
                    alert("User deleted successfully");
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
                            {member.data.map(
                                (element: Member, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {index + 1}
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
                                                    handleDeleteMember(
                                                        element.id
                                                    )
                                                }
                                                className="bg-transparent hover:bg-transparent"
                                            >
                                                <RiDeleteBin5Fill className="text-red-700" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href={member.prev_page_url || ""}
                            />
                        </PaginationItem>
                        {linksArray.map((item: string, index: number) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={item}
                                    className={`px-3 py-1 hover:bg-black hover:text-white text-white-700 rounded-md ${
                                        item === url
                                            ? "bg-black text-white"
                                            : "bg-transparent"
                                    }`}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext href={member.next_page_url || ""} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </>
    );
};

export default AllMember;

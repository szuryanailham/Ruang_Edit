import Navbar from "@/Components/Dashboard/Navbar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/shadcn/ui/table";
import { Checkbox } from "@/Components/shadcn/ui/checkbox";
import { Button } from "@/Components/shadcn/ui/button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link, useForm } from "@inertiajs/react";
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
    links: { url: string | null; label: string; active: boolean }[];
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
    isAdmin: boolean;
    data: Member[];
}

const AllMember: React.FC<Props> = ({ member }) => {
    console.log(member);
    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        members: member.data.map((m) => ({ id: m.id, isChecked: m.isAdmin })),
    });

    // const handleCheckboxChange = (index: number) => {
    //     const updatedMembers = data.members.map((item, idx) =>
    //         idx === index ? { ...item, isChecked: !item.isChecked } : item
    //     );
    //     setData("members", updatedMembers);

    //     const memberId = member.data[index].id;
    //     const statusChecked = updatedMembers[memberId].isChecked;

    //     put(`/members/${memberId}/update-checkbox`, {
    //         preserveScroll: true,
    //         preserveState: true,
    //         data: { statusChecked },
    //         onSuccess: () => {
    //             console.log("Checkbox updated successfully");
    //         },
    //     });
    // };
    const handleDeleteMember = (id: number) => {
        if (confirm("Are you sure you want to delete this user?")) {
            destroy(route("admin.edit-member.destroy", { edit_member: id }), {
                onSuccess: () => {
                    alert("User deleted successfully");
                },
                onError: () => {
                    alert("Failed to delete user");
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
                                            {element.id}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {element.name}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {element.email}
                                        </TableCell>
                                        <TableCell>{element.Bidang}</TableCell>
                                        <TableCell className="text-center">
                                            <Checkbox disabled />
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Checkbox disabled />
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

                <div className="w-full flex items-center mt-10">
                    <div className="pagination mx-auto">
                        {member.links.map((data, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={data.url || ""}
                                    className={`px-3 py-1 hover:bg-BaseColor text-white-700 rounded-md ${
                                        data.active ? "bg-BaseColor" : ""
                                    }`}
                                >
                                    {data.label === "&laquo; Previous"
                                        ? "«"
                                        : data.label === "Next &raquo;"
                                        ? "»"
                                        : data.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllMember;

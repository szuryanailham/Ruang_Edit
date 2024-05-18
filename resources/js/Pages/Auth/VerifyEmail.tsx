import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Card, CardContent, CardHeader } from "@/Components/shadcn/ui/card";
import NavBox from "@/Components/Home/Nav/NavBox";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <>
            <div className="mt-[10%] p-5 md:p-10">
                <Card className="w-full md:w-[50%] mx-auto">
                    <CardHeader className="flex items-center">
                        {/* LOGO */}
                        <Link
                            href="/"
                            className="flex items-center rtl:space-x-reverse"
                        >
                            <img
                                src="/img/Logo.svg"
                                className="h-20 w-20 md:h-25 md:w-[50px]"
                                alt="Flowbite Logo"
                            />
                        </Link>
                        {/* TITLE */}
                        <h1 className="font-bold md:text-3xl ">Ruang Edit</h1>
                    </CardHeader>
                    <CardContent>
                        {/* TEXT */}
                        <p className="md:w-[80%] md:mx-auto text-center p-3 md:p-2 md:mb-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Suscipit debitis enim commodi reiciendis vel,
                            exercitationem quia quas magnam nulla quod!
                        </p>
                        {status === "verification-link-sent" && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </div>
                        )}
                        {/* BUTTON VERIFICATION */}
                        <form onSubmit={submit}>
                            <div className="mt-4 flex items-center justify-between md:justify-evenly">
                                <PrimaryButton disabled={processing}>
                                    Resend Verification Email
                                </PrimaryButton>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 md: phover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Log Out
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

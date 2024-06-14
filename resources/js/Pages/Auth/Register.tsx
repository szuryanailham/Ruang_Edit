import { useEffect, FormEventHandler } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import NavBox from "@/Components/Home/Nav/NavBox";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
            <section>
                <Head title="Sign up Ruang Edit" />
                <NavBox />
                <div className=" w-full mt-2 h-fit flex flex-col lg:flex-row item-center p-4">
                    {/* SIGN UP IMAGE */}
                    <div
                        style={{
                            backgroundImage: `url('/img/SignUp_image.svg')`,
                        }}
                        className="w-full lg:w-1/2 h-[200px] md:h-[400px] bg-BaseColor rounded-xl bg-cover bg-no-repeat"
                    ></div>
                    {/* END SIGN UP IMAGE  */}

                    {/* TITLE */}
                    <div className="mb-5 w-full lg:w-1/2 lg:px-10">
                        <div className="mb-5 p-2 md:text-center">
                            <h1 className="text-2xl font-bold mb-1 text-center">
                                Sign up
                            </h1>
                            <p className="leading-5 p-2 text-md lg:mx-auto text-wrap w-full text-center">
                                Silakan buat akun Anda untuk melanjutkan
                                perjalanan kreatif Anda bersama Ruang Edit.
                            </p>
                        </div>
                        <form className="space-y-4" onSubmit={submit}>
                            {/* NAME TITLE INPUT  */}
                            <div>
                                <InputLabel htmlFor="name" value="Name" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="your name ....."
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            {/* END NAME INPUT */}

                            {/* EMAIL SIGN INPUT */}
                            <div className="mt-4">
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="your email......"
                                    autoComplete="username"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            {/* END EMAIL SIGN INPUT */}

                            {/*  PASSWORD */}

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            {/* END PASSWORD */}
                            {/* VERIFIKASI PASSWORD */}
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password_confirmation"
                                    value="Confirm Password"
                                />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    autoComplete="new-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />

                            {/* END VERIFIKASI PASSWORD */}
                            <button
                                disabled={processing}
                                type="submit"
                                className="w-full text-white bg-BaseColor focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                sign Up
                            </button>

                            {/*LINE OR */}
                            <div className="flex items-center mt-4">
                                <div className="flex-1 h-0.5 bg-gray-300"></div>
                                <p className="mx-4 text-sm text-gray-500">OR</p>
                                <div className="flex-1 h-0.5 bg-gray-300"></div>
                            </div>
                            {/*LINE OR */}
                            {/* LOGIN WITH FOOGLE */}
                            <button
                                type="submit"
                                className="lg:w-1/2 flex items-center justify-center w-full text-white bg-BaseColor focus:ring-4 mx-auto focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <img
                                    src="/img/Google.svg"
                                    alt="google icon"
                                    className="mr-2"
                                />
                                <span>Login with Google</span>
                            </button>
                            {/* LOGIN WITH GOOGLE */}
                        </form>
                        <div className="w-full flex justify-center">
                            <Link
                                href={route("login")}
                                className=" underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:mt-10"
                            >
                                Already registered?
                            </Link>
                        </div>
                    </div>
                    {/* END TITLE */}
                </div>
            </section>
            {/* <form onSubmit={submit}>
                

                

                

             
            </form> */}
        </>
    );
}

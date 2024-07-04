import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import NavBox from "@/Components/Home/Nav/NavBox";
import Meta from "@/Components/Meta";
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Meta
                title="Login"
                description="Silakan masuk ke Ruang Edit untuk mengakses konten eksklusif. Manfaatkan platform kami untuk belajar editing dengan instruktur profesional."
            />
            <NavBox />
            <section>
                {status && (
                    <div className=" mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <div className="mt-[10%] md:mt-[10%] h-fit flex flex-col lg:flex-row w-full item-center p-5">
                    {/* LOGIN IMAGE */}
                    <div
                        style={{
                            backgroundImage: `url('/img/Login.jpg')`,
                        }}
                        className=" lg:order-2 w-full lg:w-[45%] h-[200px] md:h-[300px] lg:p-0 lg:h-screen bg-BaseColor bg-center rounded-lg bg-cover bg-no-repeat mx-auto p-4"
                    ></div>
                    {/* END LOGIN IMAGE  */}
                    <div>
                        {/* TITLE */}
                        <div className="mb-5 p-2 md:text-center">
                            <h1 className="text-2xl font-bold mb-1 text-center">
                                Welcome Back
                            </h1>
                            <p className="leading-5 p-2 text-mdlg:mx-auto text-wrap w-full">
                                Silakan masuk ke akun Anda untuk melanjutkan
                                perjalanan kreatif Anda bersama Ruang Edit.
                            </p>
                        </div>
                        {/* END TITLE */}

                        <form
                            className="space-y-4 md:space-y-5 md:w-[85%] md:mx-auto"
                            onSubmit={submit}
                        >
                            {/* EMAIL INPUT  */}

                            <div>
                                <InputLabel
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                    htmlFor="email"
                                    value="Email"
                                />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="name@gmail.com"
                                    required
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>
                            {/* END EMAIL INPUT */}

                            {/*  PASSWORD */}
                            <div className="block mb-2 text-sm font-medium text-gray-900">
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
                                    autoComplete="current-password"
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

                            {/* RADIO REMEMBER ME */}
                            <div className="flex justify-between">
                                <div className="flex items-center h-5">
                                    <label className="flex items-center">
                                        <Checkbox
                                            className="w-4 h-4 border border-gray-300 rounded bg-BaseColor focus:ring-3 focus:ring-blue-800"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    "remember",
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ms-2 text-sm font-medium text-gray-900">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-BaseColor font-bold hover:underline "
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            {/* END  RADIO REMEMBER ME */}
                            <button
                                type="submit"
                                className="w-full text-white bg-BaseColor2 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>

                            {/*LINE OR */}
                            <div className="flex items-center mt-4">
                                <div className="flex-1 h-0.5 bg-gray-300"></div>
                                <p className="mx-4 text-sm text-gray-500">OR</p>
                                <div className="flex-1 h-0.5 bg-gray-300"></div>
                            </div>
                            {/*LINE OR */}
                            {/* LOGIN WITH FOOGLE */}

                            {/* LOGIN WITH GOOGLE */}
                            <div className="text-sm font-medium text-gray-500 md:text-xl">
                                Not registered?{" "}
                                <Link
                                    href="/register"
                                    className="text-BaseColor hover:underline"
                                >
                                    Create account
                                </Link>
                            </div>
                        </form>
                        <a href={route("google-auth")}>
                            <button
                                type="button"
                                className=" mt-2 mx-auto md:w-[85%] flex items-center justify-center w-full text-white bg-BaseColor2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <img
                                    src="/img/Google.svg"
                                    alt="google icon"
                                    className="mr-2"
                                />
                                <span>Login with Google</span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

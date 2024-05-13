import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import NavBox from "@/Components/Home/Nav/NavBox";

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
        <section>
            <Head title="Login Ruang Edit" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <NavBox />
            <div className="mt-2 h-fit flex flex-col w-full item-center p-4">
                {/* LOGIN IMAGE */}
                <div
                    style={{ backgroundImage: `url('/img/login_image.svg')` }}
                    className="w-full h-[200px] bg-BaseColor  m rounded-md bg-cover bg-no-repeat"
                ></div>
                {/* END LOGIN IMAGE  */}

                {/* TITLE */}
                <div className="mb-5 p-2">
                    <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
                    <p className="leading-5">
                        Today is a new day. It's your day. You shape it. Sign in
                        to start managing your projects.
                    </p>
                </div>
                {/* END TITLE */}

                <form className="space-y-4" onSubmit={submit}>
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
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    {/* END EMAIL INPUT */}

                    {/*  PASSWORD */}
                    <div className="block mb-2 text-sm font-medium text-gray-900">
                        <InputLabel htmlFor="password" value="Password" />

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
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm font-medium text-gray-900">
                                    Remember me
                                </span>
                            </label>
                        </div>
                        <Link
                            href={route("password.request")}
                            className="text-sm text-BaseColor hover:underline "
                        >
                            Forgot password?
                        </Link>
                    </div>
                    {/* END  RADIO REMEMBER ME */}
                    <button
                        type="submit"
                        className="w-full text-white bg-BaseColor focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full text-white bg-BaseColor focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        <img
                            src="/img/Google.svg"
                            alt="google icon"
                            className="mr-2"
                        />
                        <span>Login with Google</span>
                    </button>

                    {/* LOGIN WITH GOOGLE */}
                    <div className="text-sm font-medium text-gray-500">
                        Not registered?{" "}
                        <Link
                            href="/register"
                            className="text-BaseColor hover:underline"
                        >
                            Create account
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

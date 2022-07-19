import "tailwindcss/tailwind.css";
import Head from "next/head";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="bg-[#A6EEC7] rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          {/* login section */}
          <div className="w-2/5 bg-[#56B280] text-[#76323F] rounded-tl-2xl rounded-bl-2xl py-36 px-12">
            <h2 className="text-2xl font-bold mb-2 text-[#76323F]">
              Dear Guest!
            </h2>
            <p className="mb-10">let's join us</p>
            <a
              href="./login"
              className="border-2 bg-[#76323F] border-[#76323F] text-[#fff] font-semibold rounded-full px-8 py-1"
            >
              LOGIN
            </a>
          </div>

          {/* Section signup */}
          <div className="w-3/5 p-5">
            <div className="flex flex-col items-center bg-[#A6EEC7]">
              <div className="py-5">
                <h2 className="text-3xl font-bold text-[#76323F]">
                  Create Guest Account
                </h2>
              </div>
              <div className="bg-white w-80 p-2 rounded-full shadow-sm flex items-center mb-3">
                <input
                  type="fullname"
                  name="fullname"
                  placeholder="fullname"
                  className="ml-2 outline-none text-sm text [#565656] flex-1"
                />
              </div>
              <div className="bg-white w-80 p-2 rounded-full shadow-sm flex items-center mb-3">
                <input
                  type="username"
                  name="username"
                  placeholder="username"
                  className="ml-2 outline-none text-sm text [#565656] flex-1"
                />
              </div>
              <div className="bg-white w-80 p-2 rounded-full shadow-sm flex items-center mb-3">
                <input
                  type="tel"
                  name="phone"
                  placeholder="phone"
                  className="ml-2 outline-none text-sm text [#565656] flex-1"
                />
              </div>
              <div className="bg-white w-80 p-2 rounded-full shadow-sm flex items-center mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="ml-2 outline-none text-sm text [#565656] flex-1"
                />
              </div>
              <div className="bg-white w-80 p-2 rounded-full shadow-sm flex items-center mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="ml-2 outline-none text-sm text [#565656] flex-1"
                />
              </div>
              <a
                href="#"
                className="border-2 bg-[#F9EAE1] border-[#F9EAE1] font-bold rounded-full w-80  p-2 inline-block"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

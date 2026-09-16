import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showpassword, setshowpassword] = useState(false);
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main className="w-full max-w-[850px]">
        <div className="w-full min-h-[724px] bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg flex">
          {/* Left Side */}
          <div className="relative w-[35%] bg-center bg-no-repeat text-[var(--white)] p-8 flex flex-col justify-between">
            {/* background image */}
            <img
              src="/pink.png"
              alt="Login page Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-4xl font-[var(--weight-700)] mb-3">Anon</h1>

              <p className="text-[length:var(--fs-7)] leading-6">
                Shop Smarter,
                <br />
                Live Better.
              </p>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-[2px] bg-[var(--white)] mb-5"></div>

              <p className="text-sm leading-6">
                Discover amazing products and enjoy a seamless shopping
                experience.
              </p>

              <p className="text-xs mt-20 opacity-90">
                © {new Date().getFullYear()} Anon. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[65%] p-10 flex flex-col justify-center">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-[length:var(--fs-2)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                Welcome Back!
              </h2>

              <p className="mt-2 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
                Enter your details to access your account.
              </p>
            </div>

            {/* ================= FORM ================= */}
            <form className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[length:var(--fs-8)] text-[var(--onyx)] font-[var(--weight-600)]"
                >
                  Email Address
                </label>

                <div className="relative">
                  <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="w-full h-[48px] pl-11 pr-4 border border-[var(--cultured)] rounded-[var(--border-radius-small)] outline-none text-[length:var(--fs-7)] text-[var(--onyx)] focus:border-[var(--primary)] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-[length:var(--fs-8)] text-[var(--onyx)] font-[var(--weight-600)]"
                >
                  Password
                </label>

                <div className="relative">
                  <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

                  <input
                    id="password"
                    type={!showpassword ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full h-[48px] pl-11 pr-11 border border-[var(--cultured)] rounded-[var(--border-radius-small)] outline-none text-[length:var(--fs-7)] text-[var(--onyx)] focus:border-[var(--primary)] transition-all"
                  />

                  <i
                    onClick={() => {
                      setshowpassword(!showpassword);
                    }}
                    className={`${!showpassword ? "bi bi-eye-slash" : "bi bi-eye"} absolute right-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)] cursor-pointer hover:text-[var(--primary)]`}
                  ></i>
                </div>
              </div>
              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[var(--primary)]" />

                  <span className="text-[length:var(--fs-8)] text-[var(--davys-gray)]">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/reset-password"
                  className="text-[length:var(--fs-8)] text-[var(--primary)] font-[var(--weight-600)] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-[48px] rounded-[var(--border-radius-small)] bg-[#FA7178] text-[var(--white)] text-[length:var(--fs-7)] font-[var(--weight-600)] hover:opacity-90 hover:shadow-[0_4px_12px_rgba(255,143,156,0.4)] transition-all cursor-pointer"
              >
                Login
              </button>

              {/* OR */}
              <div className="flex items-center gap-4 my-1">
                <span className="flex-1 h-px bg-[var(--cultured)]"></span>

                <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                  OR
                </span>

                <span className="flex-1 h-px bg-[var(--cultured)]"></span>
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full h-[48px] flex items-center justify-center gap-3 border border-[var(--cultured)] rounded-[var(--border-radius-small)] bg-[var(--white)] text-[length:var(--fs-7)] text-[var(--onyx)] font-[var(--weight-600)] hover:bg-[var(--cultured)] transition-all cursor-pointer"
              >
                <i className="bi bi-google text-[var(--bittersweet)]"></i>
                Continue with Google
              </button>
            </form>
            {/* Register */}
            <p className="text-center mt-7 text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[var(--primary)] font-[var(--weight-600)] hover:underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

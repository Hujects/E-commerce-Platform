import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main className="w-full max-w-[850px]">
        <div className="w-full min-h-[724px] bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg flex">
          {/* Left Side */}
          <div className="relative w-[35%] bg-no-repeat text-[var(--white)] p-8 flex flex-col justify-between">
            {/* Background Image */}
            <img
              src="/yellobg.png"
              alt="Reset password background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top Content */}
            <div className="relative z-10">
              <h1 className="text-4xl font-[var(--weight-700)] mb-3">Anon</h1>

              <p className="text-[length:var(--fs-7)] leading-6">
                Shop Smarter,
                <br />
                Live Better.
              </p>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <div className="w-10 h-[2px] bg-[var(--white)] mb-5"></div>

              <p className="text-sm leading-6">
                Secure your account and get back to enjoying a seamless shopping
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
                Forgot Password?
              </h2>

              <p className="mt-2 text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-6">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>

            {/* Form */}
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
                    required
                    placeholder="example@email.com"
                    className="w-full h-[48px] pl-11 pr-4 border border-[var(--cultured)] rounded-[var(--border-radius-small)] outline-none text-[length:var(--fs-7)] text-[var(--onyx)] focus:border-[var(--yello-bg)] transition-all"
                  />
                </div>
              </div>

              {/* Send Reset Link */}
              <button
                type="submit"
                className="w-full h-[48px] rounded-[var(--border-radius-small)] bg-[#F58C3F] text-[var(--white)] text-[length:var(--fs-7)] font-[var(--weight-600)] hover:opacity-90 hover:shadow-[0_4px_12px_rgba(245,140,63,0.35)] transition-all cursor-pointer"
              >
                Send Reset Link
              </button>

              {/* OR */}
              <div className="flex items-center gap-4 my-1">
                <span className="flex-1 h-px bg-[var(--cultured)]"></span>

                <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
                  OR
                </span>

                <span className="flex-1 h-px bg-[var(--cultured)]"></span>
              </div>

              {/* Back to Login */}
              <Link
                to="/login"
                className="w-full h-[48px] flex items-center justify-center gap-3 border border-[var(--cultured)] rounded-[var(--border-radius-small)] bg-[var(--white)] text-[length:var(--fs-7)] text-[var(--onyx)] font-[var(--weight-600)] hover:bg-[var(--cultured)] transition-all"
              >
                <i className="bi bi-arrow-left"></i>
                Back to Login
              </Link>
            </form>

            {/* Login */}
            <p className="text-center mt-7 text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              Remember your password?{" "}
              <Link
                to="/login"
                className="text-[var(--yello-bg)] font-[var(--weight-600)] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main className="w-full max-w-[850px]">
        <div className="w-full min-h-[724px] bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg flex">
          {/* ================= LEFT SIDE ================= */}
          <div className="relative w-[35%] text-[var(--white)] p-8 flex flex-col justify-between overflow-hidden">
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
                Discover amazing products and enjoy a seamless shopping
                experience.
              </p>

              <p className="text-xs mt-20 opacity-90">
                © {new Date().getFullYear()} Anon. All rights reserved.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-[65%] p-10 flex flex-col justify-center">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-[length:var(--fs-2)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                Reset Password
              </h2>

              <p className="mt-2 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
                Create a new password for your account. Make sure it's strong
                and secure.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5">
              {/* ================= NEW PASSWORD ================= */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-[length:var(--fs-8)] text-[var(--onyx)] font-[var(--weight-600)]"
                >
                  New Password
                </label>

                <div className="relative">
                  {/* Lock Icon */}
                  <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

                  {/* Input */}
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="w-full h-[48px] pl-11 pr-11 border border-[var(--cultured)] rounded-[var(--border-radius-small)] outline-none text-[length:var(--fs-7)] text-[var(--onyx)] focus:border-[var(--primary)] transition-all"
                  />

                  {/* Eye Button */}
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)] cursor-pointer hover:text-[var(--primary)]"
                  >
                    <i
                      className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                    ></i>
                  </button>
                </div>
              </div>

              {/* ================= PASSWORD REQUIREMENTS ================= */}
              <div className="flex flex-col gap-2 -mt-2">
                <p className="text-xs text-[var(--sonic-silver)]">
                  Password must contain:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <span className="flex items-center gap-2 text-xs text-[var(--sonic-silver)]">
                    <i className="bi bi-check-circle"></i>
                    At least 8 characters
                  </span>

                  <span className="flex items-center gap-2 text-xs text-[var(--sonic-silver)]">
                    <i className="bi bi-check-circle"></i>
                    One uppercase letter
                  </span>

                  <span className="flex items-center gap-2 text-xs text-[var(--sonic-silver)]">
                    <i className="bi bi-check-circle"></i>
                    One number
                  </span>

                  <span className="flex items-center gap-2 text-xs text-[var(--sonic-silver)]">
                    <i className="bi bi-check-circle"></i>
                    One special character
                  </span>
                </div>
              </div>

              {/* ================= CONFIRM PASSWORD ================= */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-[length:var(--fs-8)] text-[var(--onyx)] font-[var(--weight-600)]"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  {/* Lock Icon */}
                  <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)]"></i>

                  {/* Input */}
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    className="w-full h-[48px] pl-11 pr-11 border border-[var(--cultured)] rounded-[var(--border-radius-small)] outline-none text-[length:var(--fs-7)] text-[var(--onyx)] focus:border-[var(--primary)] transition-all"
                  />

                  {/* Eye Button */}
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--sonic-silver)] cursor-pointer hover:text-[var(--primary)]"
                  >
                    <i
                      className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                    ></i>
                  </button>
                </div>
              </div>

              {/* ================= RESET BUTTON ================= */}
              <button
                type="submit"
                className="w-full h-[48px] rounded-[var(--border-radius-small)] bg-[#F58C3F] text-[var(--white)] text-[length:var(--fs-7)] font-[var(--weight-600)] hover:opacity-90 hover:shadow-[0_4px_12px_rgba(245,140,63,0.35)] transition-all cursor-pointer"
              >
                Reset Password
              </button>
            </form>

            {/* ================= LOGIN LINK ================= */}
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

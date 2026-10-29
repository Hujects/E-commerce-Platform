import { Link } from "react-router-dom";

export default function ResetSuccess() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main className="w-full max-w-[850px]">
        <div className="w-full min-h-[724px] bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg flex">
          {/* Left Side */}
          <div className="relative w-[35%] text-[var(--white)] p-8 flex flex-col justify-between overflow-hidden">
            {/* Background */}
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
          {/* Right Side */}
          <div className="w-[65%] p-10 flex flex-col justify-center items-center text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-[#E8F8F0] flex items-center justify-center mb-6">
              <i className="bi bi-check-lg text-4xl text-[var(--ocean-green)]"></i>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-[length:var(--fs-2)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                Password Reset Successful!
              </h2>

              <p className="mt-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-6 max-w-[430px]">
                Your password has been successfully reset. You can now login to
                your account using your new password.
              </p>
            </div>

            {/* Success Message */}
            <div className="w-full max-w-[430px] flex items-center gap-3 p-4 rounded-[var(--border-radius-small)] bg-[#F3FBF7] border border-[#D7F2E4] mb-7 text-left">
              <i className="bi bi-shield-check text-[var(--ocean-green)] text-xl"></i>

              <div>
                <p className="text-sm text-[var(--onyx)] font-[var(--weight-600)]">
                  Your account is secure
                </p>

                <p className="text-xs text-[var(--sonic-silver)] mt-1">
                  Your new password is ready to use.
                </p>
              </div>
            </div>
            {/* Login Button */}
            <Link
              to="/login"
              className="w-full max-w-[430px] h-[48px] flex items-center justify-center rounded-[var(--border-radius-small)] bg-[var(--yello-bg)] text-[var(--white)] text-[length:var(--fs-7)] font-[var(--weight-600)] hover:opacity-90 transition-all"
            >
              Continue to Login
            </Link>

            {/* Extra Text */}
            <p className="mt-6 text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              Welcome back to{" "}
              <Link
                to="/"
                className="text-[var(--yello-bg)] font-[var(--weight-600)]"
              >
                Anon
              </Link>
              !
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}

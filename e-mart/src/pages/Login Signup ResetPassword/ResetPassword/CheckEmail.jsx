import { Link } from "react-router-dom";

export default function CheckEmail() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <main className="w-full max-w-[850px]">
        <div className="w-full min-h-[724px] bg-[var(--white)] rounded-2xl overflow-hidden shadow-lg flex">
          {/* Left Side */}
          <div className="relative w-[35%] text-[var(--white)] p-8 flex flex-col justify-between overflow-hidden">
            {/* Background */}
            <img
              src="/yellobg.png"
              alt="Check email background"
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
            {/* Email Icon */}
            <div className="w-20 h-20 rounded-full bg-[#FFF0E7] flex items-center justify-center mb-6">
              <i className="bi bi-envelope text-4xl text-[var(--yello-bg)]"></i>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h2 className="text-[length:var(--fs-2)] text-[var(--eerie-black)] font-[var(--weight-700)]">
                Check Your Email
              </h2>

              <p className="mt-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)] leading-6 max-w-[430px]">
                We've sent a password reset link to your email address. Please
                check your inbox and click the link to continue.
              </p>
            </div>

            {/* Email Box */}
            <div className="w-full max-w-[430px] flex items-center gap-3 p-4 rounded-[var(--border-radius-small)] bg-[#FFF8F3] border border-[#FFE2D0] mb-6">
              <i className="bi bi-envelope text-[var(--yello-bg)] text-xl"></i>

              <div className="text-left">
                <p className="text-xs text-[var(--sonic-silver)]">
                  Reset link sent to
                </p>

                <p className="text-sm text-[var(--onyx)] font-[var(--weight-600)]">
                  example@email.com
                </p>
              </div>
            </div>

            {/* Resend */}
            <p className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              Didn't receive the email?{" "}
              <button
                type="button"
                className="text-[var(--yello-bg)] font-[var(--weight-600)] hover:underline cursor-pointer"
              >
                Resend
              </button>
            </p>

            {/* Back to Login */}
            <Link
              to="/login"
              className="mt-7 text-[length:var(--fs-8)] text-[var(--sonic-silver)] hover:text-[var(--yello-bg)] transition-all"
            >
              <i className="bi bi-arrow-left mr-2"></i>
              Back to Login
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}

import React from "react";

export default function WhatsIncluded() {
  return (
    <div className="w-full">
      <h3 className="text-[length:var(--fs-5)] text-[var(--eerie-black)] font-[var(--weight-600)] mb-5">
        What's Included
      </h3>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <i className="bi bi-box-seam text-[var(--primary)]"></i>
          <span className="text-[length:var(--fs-7)] text-[var(--davys-gray)]">
            1 × Anon Wireless Headphones
          </span>
        </div>

        <div className="flex items-center gap-3">
          <i className="bi bi-lightning-charge text-[var(--primary)]"></i>
          <span className="text-[length:var(--fs-7)] text-[var(--davys-gray)]">
            1 × USB Type-C Charging Cable
          </span>
        </div>

        <div className="flex items-center gap-3">
          <i className="bi bi-book text-[var(--primary)]"></i>
          <span className="text-[length:var(--fs-7)] text-[var(--davys-gray)]">
            1 × User Manual
          </span>
        </div>

        <div className="flex items-center gap-3">
          <i className="bi bi-bag text-[var(--primary)]"></i>
          <span className="text-[length:var(--fs-7)] text-[var(--davys-gray)]">
            1 × Protective Carrying Bag
          </span>
        </div>
      </div>
    </div>
  );
}

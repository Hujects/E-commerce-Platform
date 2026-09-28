export default function ShipingAndReturn() {
  return (
    <div className="w-full border border-[var(--cultured)] rounded-[var(--border-radius-medium)] p-5">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-5">
        <i className="bi bi-truck text-[var(--primary)] text-[length:var(--fs-4)]"></i>

        <h3 className="text-[length:var(--fs-5)] text-[var(--eerie-black)] font-[var(--weight-700)]">
          Shipping Information
        </h3>
      </div>

      {/* Shipping Items */}
      <div className="grid grid-cols-2 gap-5">
        {/* Delivery */}
        <div className="flex items-start gap-3">
          <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#fff0f1]">
            <i className="bi bi-box-seam text-[var(--primary)]"></i>
          </div>

          <div>
            <p className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
              Delivery
            </p>

            <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              3–5 business days
            </span>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-start gap-3">
          <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#f0fff7]">
            <i className="bi bi-truck text-[var(--ocean-green)]"></i>
          </div>

          <div>
            <p className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
              Free Shipping
            </p>

            <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              On orders over $100
            </span>
          </div>
        </div>

        {/* Return */}
        <div className="flex items-start gap-3">
          <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#fff8ef]">
            <i className="bi bi-arrow-repeat text-[var(--sandy-brown)]"></i>
          </div>

          <div>
            <p className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
              Easy Returns
            </p>

            <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              7 days return policy
            </span>
          </div>
        </div>

        {/* Secure */}
        <div className="flex items-start gap-3">
          <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#f0fff7]">
            <i className="bi bi-shield-check text-[var(--ocean-green)]"></i>
          </div>

          <div>
            <p className="text-[length:var(--fs-7)] text-[var(--eerie-black)] font-[var(--weight-600)]">
              Secure Packaging
            </p>

            <span className="text-[length:var(--fs-8)] text-[var(--sonic-silver)]">
              Carefully packed & protected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

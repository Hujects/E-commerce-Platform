

export default function Specifications() {
  return (
    <div className="w-full">
      <h3 className="text-[length:var(--fs-5)] text-[var(--eerie-black)] font-[var(--weight-600)] mb-5">
        Specifications
      </h3>
      <div className="border border-[var(--cultured)] rounded-[var(--border-radius-medium)] overflow-hidden">
        <div className="grid grid-cols-2 border-b border-[var(--cultured)]">
          <span className="px-5 py-3 bg-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--davys-gray)] font-[var(--weight-600)]">
            Brand
          </span>
          <span className="px-5 py-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
            Anon
          </span>
        </div>

        <div className="grid grid-cols-2 border-b border-[var(--cultured)]">
          <span className="px-5 py-3 bg-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--davys-gray)] font-[var(--weight-600)]">
            Connectivity
          </span>
          <span className="px-5 py-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
            Bluetooth 5.3
          </span>
        </div>

        <div className="grid grid-cols-2 border-b border-[var(--cultured)]">
          <span className="px-5 py-3 bg-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--davys-gray)] font-[var(--weight-600)]">
            Battery Life
          </span>
          <span className="px-5 py-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
            Up to 30 Hours
          </span>
        </div>

        <div className="grid grid-cols-2 border-b border-[var(--cultured)]">
          <span className="px-5 py-3 bg-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--davys-gray)] font-[var(--weight-600)]">
            Charging Port
          </span>
          <span className="px-5 py-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
            USB Type-C
          </span>
        </div>

        <div className="grid grid-cols-2">
          <span className="px-5 py-3 bg-[var(--cultured)] text-[length:var(--fs-7)] text-[var(--davys-gray)] font-[var(--weight-600)]">
            Microphone
          </span>
          <span className="px-5 py-3 text-[length:var(--fs-7)] text-[var(--sonic-silver)]">
            Built-in HD Microphone
          </span>
        </div>
      </div>
    </div>
  );
}

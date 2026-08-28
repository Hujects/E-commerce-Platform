export default function TitleCard({ icon, name, count }) {
  return (
    <div className="self-start flex-shrink-0 rounded-[7px] flex items-center gap-[10px] p-[15px] border border-[var(--cultured)] min-w-[250px]">
      <div className="p-[10px] md:p-[20px] xl:p-[10px] bg-[var(--cultured)] rounded-[var(--border-radius-small)] border-[1px] border-[hsl(0, 0%, 80%)]">
        <img className="w-[30px] h-[30px]" src={icon} alt="" />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center gap-[10px]">
          <h3 className="text-[var(--eerie-black)] text-[var(--fs-7)] font-[var(--weight-600)] uppercase">
            {name}
          </h3>
          <p className="text-[var(--sonlic-silver)] text-[var(--fs-11)]">
            ({count})
          </p>
        </div>
        <a
          className="text-[var(--fs-9)] text-[var(--salmon-pink)] font-[var(--weight-500)]"
          href="#"
        >
          Show All
        </a>
      </div>
    </div>
  );
}

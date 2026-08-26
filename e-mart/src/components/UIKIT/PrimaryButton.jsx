/* ================================================
 ================================================
 
button use korar time e porps use korben .
ei ta kora hoi se jeno binno binno text er
jonno ek button use kora jay

 ================================================
 ================================================*/
export default function PrimaryButton({ btnTxt }) {
  return (
    <button className="bg-[var(--salmon-pink)] self-start px-[15px] py-[8px] text-[var(--white)] text-[var(--fs-9)] font-[var(--weight-700)] border border-[var(--salmon-pink)] rounded-[var(--border-radius-medium)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--onyx)] hover:text-[var(--white)] hover:border-[var(--onyx)] hover:cursor-pointer">
      {btnTxt}
    </button>
  );
}

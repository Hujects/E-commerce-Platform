/* ================================================
 ================================================
 
button use korar time e porps use korben .
ei ta kora hoi se jeno binno binno text er
jonno ek button use kora jay

 ================================================
 ================================================*/
export default function PrimaryButton({ BtnTxt }) {
  return (
    <button className="bg-[var(--white)] self-start px-[15px] py-[8px] text-[var(--salmon-pink)] text-[var(--fs-9)] font-[var(--weight-700)] border border-[var(--salmon-pink)] rounded-[var(--border-radius-medium)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--salmon-pink)] hover:text-[var(--white)] hover:cursor-pointer">
      {BtnTxt}
    </button>
  );
}

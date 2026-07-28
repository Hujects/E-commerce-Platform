/* ================================================
 ================================================

button use korar time e porps use korben .
ei ta kora hoi se jeno binno binno text er
jonno ek button use kora jay

jodi emon kno section thake jei khane pasa pasi
 dui ta button use korte hobe like : "add to cart"
and "order now" tahoel ekta primary and ekta
 secondary button use korben
 ================================================
 ================================================*/
export default function SecondaryButton({ BtnTxt}) {
  return (
    <button className="bg-[var(--white)] px-[15px] py-[8px] text-[var(--salmon-pink)] text-[var(--fs-9)] font-[var(--weight-700)] border border-[var(--salmon-pink)] rounded-[var(--border-radius-medium)] transition-all duration-[var(--transition-timing)] ease-in-out hover:bg-[var(--salmon-pink)] hover:text-[var(--white)] hover:cursor-pointer">
      {BtnTxt}
    </button>
  );
}
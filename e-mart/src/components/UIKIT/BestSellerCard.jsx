/* ================================================
 ================================================
 
border-b border-b-[1px] border-b-[var(--cultured)]
ei ta chile border bottom ba diverder hisebe use korte paren

jokhon component ta niye kag korbe tokhon data.js er
"Seller ranking" ta ekbar dekhe asben. tao jodi na bojen
amake boilen. but coponent ta redesign koiren nah.
ar jodi ekanttoe kno update koren oi ta obbosi janaben 
                   Thanks

 ================================================
 ================================================*/
export default function BestSellerCard({SellerName, SellerLogo, SellerRating, SuccessfulSales}) {
  return (
    <div className="flex items-center gap-3.75">
      <img
        className="rounded-[var(--border-radius-small)] h-[75px] w-[75px]"
        src={SellerLogo}
        alt={SellerName}
      />
      <div className="w-[calc(100% - 90px)]">
        <h4 className="font-[var(--weight-400)] text-[var(--onyx)] text-[var(--fs-7)] ">
          {SellerName}
        </h4>
        <div>
          <div className="flex items-center text-[13px] text-[var(--sandy-brown)] py-[4px]">
            {"★".repeat(Math.floor(SellerRating))}
          </div>
          <p className="text-[var(--sonic-silver)] text-[13px]">
            Seccese Full Sells: {SuccessfulSales}
          </p>
        </div>
      </div>
    </div>
  );
}

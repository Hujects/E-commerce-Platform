import  TopHeader  from "./TopHeader";
import  SecondHeader  from "./SecondHeader";

function Header() {
    return (
        
            <div className="w-full flex flex-col justify-center items-center">
                <TopHeader/>
                <SecondHeader/>
            </div>
    )
}

export default Header;

import  TopHeader  from "./TopHeader";
import  SecondHeader  from "./SecondHeader";

function Header() {
    return (
        <div className="flex-col justify-center w-full">
            <div className="w-full flex-col justify-center items-center h-full">
                <TopHeader/>
                <SecondHeader/>
            </div>
        </div>
    )
}

export default Header;

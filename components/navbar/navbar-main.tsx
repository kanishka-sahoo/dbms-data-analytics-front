import ProfileBox from "./profile-box";
import Dropdown from "./dropdown";
import { useState } from "react";

export default function NavbarMain() {
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }

    return (
        <div className="w-full h-16 bg-neutral-500">
            <div className="flex justify-between items-center h-full px-4">
                <div className="flex items-center ml-2">
                    <div className="text-white text-2xl italic font-bold">DataLyte</div>
                </div>
                <ProfileBox name="Testing" icon="https://placecats.com/300/200" isDropdown={dropdown} handleDropdown={handleDropdown}/>
                {dropdown && <Dropdown />}
            </div>
        </div>
    )
}
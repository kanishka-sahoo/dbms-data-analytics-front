export default function Dropdown() {
    return (
        <div className="absolute right-2 w-72 top-16 bg-white border border-gray-300 rounded shadow-md p-2">
            <a href="/u/profile" className="block p-2 hover:bg-gray-100">Profile</a>
            <a href="/logout" className="block p-2 hover:bg-gray-100">Logout</a>
        </div>
    );
}
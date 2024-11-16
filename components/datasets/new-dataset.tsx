export default function NewScript({onsubmit}: {onsubmit: () => void}) {
    return (
      <button
        onClick={onsubmit}
        className="px-4 py-2 text-white bg-blue-500 rounded-md transition-all duration-150 hover:bg-blue-600 hover:scale-[110%]">
        New Dataset
      </button>
    );
}
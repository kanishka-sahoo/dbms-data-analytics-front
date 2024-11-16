import { LucideIcon } from "lucide-react";
export default function SidebarItems({ isOpened, icon: Icon, link, label }: { isOpened: boolean, icon: LucideIcon, label: string, link: string }) {
    return (
        <div className={`flex flex-col flex-1 w-full items-start justify-between rounded-md hover:bg-neutral-600`}>
            <a className="flex flex-row flex-1 p-2" href={link}>
                <Icon size={36} />
                <span className={`ml-2 text-xl my-auto ${isOpened ? 'block' : 'hidden'}`}>{label}</span>
            </a>
        </div>
    );
}
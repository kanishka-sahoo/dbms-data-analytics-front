'use client';
import SidebarMain from "@/components/sidebar/sidebar-main";
import { usePathname } from 'next/navigation';
import NavbarMain from "@/components/navbar/navbar-main";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldShowSidebar = pathname.startsWith('/u/') && pathname !== '/u';
  return (
    <html lang="en">
      <body
        className={`{inter.className}`}
      >
        <div className="max-h-screen flex">
        {shouldShowSidebar && <SidebarMain isOpened={false} />}
          <div className="flex flex-col w-full">
            {shouldShowSidebar && <NavbarMain />}
            <div className="flex flex-col w-full overflow-y-scroll">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

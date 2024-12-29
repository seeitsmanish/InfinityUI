import { AppSidebar } from "../components/AppSidebar";
import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-full w-full flex flex-col">
            <Navbar source="docs" />
            <div className="flex flex-1 overflow-hidden">
                <AppSidebar className="hidden md:block" />
                <div className="flex-1 h-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )

}
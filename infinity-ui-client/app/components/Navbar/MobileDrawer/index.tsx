'use client';
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AppSidebar } from "../../AppSidebar";

const MobileDrawer = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Drawer open={menuOpen} onOpenChange={setMenuOpen}>
            <DrawerTrigger className="flex items-center justify-center p-2">
                {menuOpen ? <X /> : <Menu />}
            </DrawerTrigger>
            <DrawerTitle>
                <div className="hidden">
                    Mobile  Drawer
                </div>
            </DrawerTitle>
            <DrawerContent>
                <AppSidebar onClick={() => setMenuOpen(false)} isMobile={true} className="w-full" />
            </DrawerContent>
        </Drawer>
    )

}
export default MobileDrawer;
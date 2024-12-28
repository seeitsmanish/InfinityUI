import Navbar from "../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-[100dvh] w-full flex flex-col">
            <Navbar source="docs" />
            {children}
        </div>
    )

}
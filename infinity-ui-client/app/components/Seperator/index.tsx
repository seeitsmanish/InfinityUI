import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";

const Seperator = ({ className }: { className?: string; }) => {
    return (
        <div className={cn('w-[95%] mx-auto h-[1px] my-10 bg-slate-200 rounded-lg dark:bg-slate-900', className)}>
        </div>
    )
}

export default Seperator;
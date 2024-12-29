import { cn } from "@/lib/utils";

const Seperator = ({ className }: { className?: string; }) => {
    return (
        <div className={cn('w-full h-[1px] my-5 bg-slate-400 rounded-lg dark:bg-slate-700', className)}>
        </div>
    )
}

export default Seperator;
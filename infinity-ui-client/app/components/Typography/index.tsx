import { cn } from '../../../lib/utils';

export type TypographyPropsType = {
    className?: string,
    children: React.ReactNode | string,
}

export const Heading1 = ({ children, className }: TypographyPropsType) => {
    return <h1 className={cn('scroll-m-20 text-3xl dark:text-slate-300 text-slate-800 font-semibold tracking-tight lg:text-4xl', className)}>
        {children}
    </h1>
}

export const Heading2 = ({ children, className }: TypographyPropsType) => {
    return <h2 className={cn("text-2xl border-slate-400 dark:border-slate-700 dark:text-slate-300 text-slate-800 scroll-m-20 border-b pb-2 font-semibold tracking-tight first:mt-0", className)}>
        {children}
    </h2>
}

export const Heading3 = ({ children, className }: TypographyPropsType) => {
    return <h3 className={cn("scroll-m-20 text-xl font-medium tracking-tight dark:text-slate-300 text-slate-800", className)}>
        {children}
    </h3>
}

export const Heading4 = ({ children, className }: TypographyPropsType) => {
    return <h4 className={cn("scroll-m-20 text-lg font-medium tracking-tight dark:text-slate-300 text-slate-800", className)}>
        {children}
    </h4>
}

export const Paragraph = ({ children, className }: TypographyPropsType) => {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-6 dark:text-slate-300 text-slate-800", className)}>
            {children}
        </p>
    )
}
export const TypographyBlockquote = ({ children, className }: TypographyPropsType) => {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-6 italic dark:text-slate-300 text-slate-800", className)}>
            {children}
        </blockquote>
    )
}
export const List = ({ children, className }: TypographyPropsType) => {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 dark:text-slate-300 text-slate-800", className)}>
            {children}
        </ul>
    )
}


export type TablePropsType = {
    className?: string;
    wrapperClassName?: string,
    children?: React.ReactNode;
}

export const Table = ({ children, wrapperClassName, className }: TablePropsType) => {
    return (
        <div className={cn('my-6 w-full overflow-y-auto', wrapperClassName)}>
            <table className={cn('w-full dark:text-slate-300 text-slate-800', className)}>
                {children}
            </table>
        </div>
    )
}

export type TableRowPropsType = {
    children?: React.ReactNode;
    className?: string;
}

export const TableRow = ({ children, className }: TableRowPropsType) => {
    return (
        <tr className={cn('m-0 border-t p-0 even:bg-muted dark:text-slate-300 text-slate-800', className)}>
            {children}
        </tr>
    );
}


export type TableHeaderPropsType = {
    children?: React.ReactNode;
    className?: string;
}
export const TableHeader = ({ children, className }: TableHeaderPropsType) => {
    return (
        <th className={cn('border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right dark:text-slate-300 text-slate-800', className)}>
            {children}
        </th>
    )
}

export type TableCellPropsType = {
    children?: React.ReactNode;
    className?: string;
}

export const TableCell = ({ children, className }: TableCellPropsType) => {
    return (
        <td className={cn('border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right dark:text-slate-300 text-slate-800', className)}>
            {children}
        </td>
    )
}

export type InlineCodePropsType = {
    children?: React.ReactNode;
    className?: string;
}

export const InlineCode = ({ children, className }: InlineCodePropsType) => {
    return (
        <code className={cn('inline-block bg-slate-100 dark:bg-slate-600 text-slate-800 dark:text-white relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>
            {children}
        </code>
    )
}
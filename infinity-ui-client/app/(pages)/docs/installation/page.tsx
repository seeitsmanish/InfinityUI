'use client';
import Seperator from "@/app/components/Seperator";
import Tabs, { TabItem } from "@/app/components/Tabs";
import { Heading1, Heading2, Paragraph, List, InlineCode } from "@/app/components/Typography";
import { cn } from "@/lib/utils";

const Installation = () => {

    const tabs: TabItem[] = [
        {
            index: 1,
            title: 'npm',
            content: `npm install @seeitsmanish/infinityui`,
            code: 'npm install @seeitsmanish/infinityui',
            className: 'w-full'
        },
        {
            index: 2,
            title: 'yarn',
            content: `yarn add @seeitsmanish/infinityui`,
            code: 'yarn add @seeitsmanish/infinityui',
            className: 'w-full'

        },
        {
            index: 3,
            title: 'pnpm',
            content: `pnpm add @seeitsmanish/infinityui`,
            code: 'pnpm add @seeitsmanish/infinityui',
            className: 'w-full'
        },
        {
            index: 4,
            title: 'Manual',
            content: `Download the latest release from the official GitHub repository: https://github.com/seeitsmanish/infinityui`,
            className: 'w-full'
        }
    ]

    return (
        <div className="w-full p-5">
            <Heading1 className="mb-1">Installation</Heading1>
            <Paragraph>
                To get started with <strong>Infinity UI</strong>, follow these simple installation steps to integrate it into your web application.
            </Paragraph>

            <Seperator />

            <Heading2>Installation Instructions</Heading2>
            <Paragraph>
                Infinity UI can be easily installed via npm or yarn. Choose your preferred package manager and follow the instructions below:
            </Paragraph>

            <Seperator />


            <Tabs
                tabsWrapperClassName="border-b"
                wrapperClassName="dark:bg-zinc-900 bg-zinc-300 rounded-lg px-2"
                tabContentClassName="border-none h-fit py-3 px-4 mt-0 font-normal"
                tabs={tabs}
            />
        </div>
    );
};

export default Installation;

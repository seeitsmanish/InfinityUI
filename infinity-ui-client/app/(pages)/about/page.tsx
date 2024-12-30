import Seperator from "@/app/components/Seperator";
import { Heading1, Heading2, Paragraph, List, InlineCode } from "@/app/components/Typography";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const DeveloperDetails = () => {

    return (
        <div className="w-full p-5">

            <Heading1 className="mb-1">About the Developer</Heading1>
            <Paragraph>
                Infinity UI is developed and maintained by <strong>Manish Sharma</strong>, a passionate full-stack developer with a keen interest in building high-quality, reusable, and framework-agnostic UI components.
            </Paragraph>

            <Seperator />

            <Heading2>Developer Profile</Heading2>
            <List>
                <li><strong>Name:</strong> Manish Sharma</li>
                <li><strong>Role:</strong> Associate Software Developer</li>
                <li><strong>Expertise:</strong> Full-stack development in MERN, web performance optimization, StencilJS</li>
                <li><strong>GitHub:</strong> <Link target="_blank" href="https://github.com/seeitsmanish"><InlineCode>github.com/seeitsmanish</InlineCode></Link></li>
                <li><strong>LinkedIn:</strong> <Link target="_blank" href="https://www.linkedin.com/in/seeitsmanish/"><InlineCode>linkedin.com/in/seeitsmanish</InlineCode></Link> </li>
            </List>

            <Seperator />

            <Heading2>Contact</Heading2>
            <Paragraph>
                If you have any questions, feedback, or collaboration ideas, feel free to reach out:
            </Paragraph>
            <List>
                <li><strong>Email:</strong> <InlineCode>seeitsmanish@gmail.com</InlineCode></li>

            </List>

        </div>
    );
};

export default DeveloperDetails;

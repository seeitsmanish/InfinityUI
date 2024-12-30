import { FC } from 'react';
import CodePreview from '@/app/components/CodePreview';
import Seperator from '@/app/components/Seperator';
import Tabs from '@/app/components/Tabs';
import { Heading1, Heading2, Heading3, InlineCode, MutedParagraph, Table, TableCell, TableHeader, TableRow, Paragraph } from '@/app/components/Typography';

const AvatarDocs: FC = () => {
    // Code variants
    const altCode = `
<i-avatar src="/sample-avatar.jpg" alt="John Doe" />
<i-avatar src="/nonexistent-avatar.jpg" alt="John Doe" />
`;

    const lazyCode = `
<i-avatar src="/sample-avatar.jpg" alt="John Doe" lazy={true} />
<i-avatar src="/sample-avatar.jpg" alt="John Doe" lazy={false} />
`;

    const shapeCode = `
<div class="flex gap-4">
  <i-avatar shape="circular" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar shape="rounded-square" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar shape="square" src="/sample-avatar.jpg" alt="User Avatar" />
</div>`;

    const sizeCode = `
<div class="flex gap-4 items-end">
  <i-avatar size="xs" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar size="sm" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar size="md" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar size="lg" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar size="xl" src="/sample-avatar.jpg" alt="User Avatar" />
</div>`;

    const ringCode = `
<div class="flex gap-4">
  <i-avatar ring src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar 
    ring 
    ring-color="blue" 
    ring-width="4px"
    ring-offset="4px"
    src="/sample-avatar.jpg" 
    alt="User Avatar"
  />
</div>`;

    const colorCode = `
<div class="flex gap-4">
  <i-avatar color="primary" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar color="secondary" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar color="red" src="/sample-avatar.jpg" alt="User Avatar" />
  <i-avatar color="#FF5733" src="/sample-avatar.jpg" alt="User Avatar" />
</div>`;

    const classesCode = `
<div class="flex gap-4">
  <i-avatar classes="custom-class" src="/sample-avatar.jpg" alt="User Avatar" />
</div>`;

    // Tabs for each variant
    const tabs = {
        altExample: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={altCode} language="html" />, code: altCode, className: 'h-full w-full' }
        ],
        lazyExample: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={lazyCode} language="html" />, code: lazyCode, className: 'h-full w-full' }
        ],
        shapes: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={shapeCode} language="html" />, code: shapeCode, className: 'h-full w-full' }
        ],
        sizes: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={sizeCode} language="html" />, code: sizeCode, className: 'h-full w-full' }
        ],
        rings: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={ringCode} language="html" />, code: ringCode, className: 'h-full w-full' }
        ],
        colors: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={colorCode} language="html" />, code: colorCode, className: 'h-full w-full' }
        ],
        classes: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={classesCode} language="html" />, code: classesCode, className: 'h-full w-full' }
        ]
    };

    return (
        <div className='w-full p-5'>

            {/* Heading */}
            <Heading1 className='mb-1'>i-avatar</Heading1>
            <MutedParagraph className='mb-10'>
                The i-avatar component is used to display user avatars.
            </MutedParagraph>

            {/* Overview */}
            <Heading2>Overview</Heading2>
            <Paragraph className='mb-5'>
                The <InlineCode>i-avatar</InlineCode> component displays customizable avatars with options for images, fallback initials, lazy load, a ring, and more. You can adjust its size, shape, and other attributes to fit your design needs
            </Paragraph>

            <Seperator />

            {/* Alt Variant */}
            <Heading3>Alt Prop (Fallback Functionality)</Heading3>
            <Paragraph>
                The <InlineCode>alt</InlineCode> prop provides fallback initials when the avatar image is not available or fails to load. This ensures that the avatar still shows up with a default text representation.
            </Paragraph>
            <Tabs tabs={tabs.altExample} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>alt</TableCell>
                    <TableCell>Fallback initials when the image is not available.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Lazy Loading Varinat */}
            <Heading3>Lazy Loading</Heading3>
            <Paragraph>
                The <InlineCode>lazy</InlineCode> prop controls whether the avatar image should be lazily loaded (i.e., only loaded when it becomes visible in the viewport). This improves the page load performance.
            </Paragraph>
            <Tabs tabs={tabs.lazyExample} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>lazy</TableCell>
                    <TableCell>Lazy load the avatar image. `true` for lazy loading, `false` for immediate loading.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Shape Variant */}
            <Heading3>Shape Variants</Heading3>
            <Paragraph>
                The <InlineCode>shape</InlineCode> prop controls the shape of the avatar. You can set it to <InlineCode>circular</InlineCode> (default),<InlineCode>rounded-square</InlineCode>, or <InlineCode>square</InlineCode>  depending on your design.
            </Paragraph>
            <Tabs tabs={tabs.shapes} />
            <Table>
                <TableRow>
                    <TableHeader>Shape</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>circular</TableCell>
                    <TableCell>Circular shape (default)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>rounded-square</TableCell>
                    <TableCell>Rounded corners square shape</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>square</TableCell>
                    <TableCell>Square shape</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Size Variant */}
            <Heading3>Size Variants</Heading3>
            <Paragraph>
                The <InlineCode>size</InlineCode> prop determines the size of the avatar. The available sizes are <InlineCode>xs</InlineCode>, <InlineCode>sm</InlineCode>, <InlineCode>md</InlineCode>, <InlineCode>lg</InlineCode> and <InlineCode>xl</InlineCode>, which allow you to control the avatar's display size.
            </Paragraph>
            <Tabs tabs={tabs.sizes} />
            <Table>
                <TableRow>
                    <TableHeader>Size</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>xs</TableCell>
                    <TableCell>Extra Small</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>sm</TableCell>
                    <TableCell>Small</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>md</TableCell>
                    <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>lg</TableCell>
                    <TableCell>Large</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>xl</TableCell>
                    <TableCell>Extra Large</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Ring Effects */}
            <Heading3>Ring Effects</Heading3>
            <Paragraph>
                The <InlineCode>ring</InlineCode> prop allows you to add a customizable ring effect around the avatar. You can modify the color, width, and offset of the ring.
            </Paragraph>
            <Tabs tabs={tabs.rings} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>ring</TableCell>
                    <TableCell>Enable ring around the avatar.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>ring-color</TableCell>
                    <TableCell>Customize the color of the ring.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>ring-width</TableCell>
                    <TableCell>Customize the width of the ring.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>ring-offset</TableCell>
                    <TableCell>Adjust the offset of the ring.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Color Variant */}
            <Heading3>Color Variants</Heading3>
            <Paragraph>
                The <InlineCode>color</InlineCode> prop sets the background color of the avatar. You can use predefined colors like `primary`, `secondary`, or custom hex values.
            </Paragraph>
            <Tabs tabs={tabs.colors} />
            <Table>
                <TableRow>
                    <TableHeader>Color</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>default</TableCell>
                    <TableCell>default color background.(default color if not specified)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>primary</TableCell>
                    <TableCell>Primary color background.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>secondary</TableCell>
                    <TableCell>Secondary color background.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>warning</TableCell>
                    <TableCell>Warning color background.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>success</TableCell>
                    <TableCell>Success color background.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>danger</TableCell>
                    <TableCell>Danger color background.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>custom color string</TableCell>
                    <TableCell>Custom color background ('red' | 'yellow')</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Hex Color Code</TableCell>
                    <TableCell>Custom color background (e.g. #348EF7 )</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Custom Classes Variant */}
            <Heading3>Custom Classes</Heading3>
            <Paragraph>
                You can apply custom classes using the <InlineCode>classes</InlineCode> prop to further customize the avatar’s appearance.
            </Paragraph>
            <Tabs tabs={tabs.classes} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>classes</TableCell>
                    <TableCell>Apply custom CSS classes to the avatar.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            {/* Summary */}
            <Heading2>Props Reference</Heading2>
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Possible Values</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>alt</TableCell>
                    <TableCell>Fallback initials for avatar</TableCell>
                    <TableCell>Any text value</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>lazy</TableCell>
                    <TableCell>Enable lazy loading</TableCell>
                    <TableCell>true | false</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>shape</TableCell>
                    <TableCell>Defines the shape of the avatar</TableCell>
                    <TableCell>circular | rounded-square | square</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>size</TableCell>
                    <TableCell>Sets the avatar size</TableCell>
                    <TableCell>xs | sm | md | lg | xl</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>ring</TableCell>
                    <TableCell>Enables ring effect around the avatar</TableCell>
                    <TableCell>true | false</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>color</TableCell>
                    <TableCell>Defines the background color of the avatar</TableCell>
                    <TableCell>default | primary | secondary | warning | success | danger | colorString('red, blue') | Custom hex colors</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>classes</TableCell>
                    <TableCell>Applies custom CSS classes to the avatar</TableCell>
                    <TableCell>Any valid CSS class name</TableCell>
                </TableRow>
            </Table>
        </div >
    );
}

export default AvatarDocs;

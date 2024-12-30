import { FC } from 'react';
import CodePreview from '@/app/components/CodePreview';
import Seperator from '@/app/components/Seperator';
import Tabs from '@/app/components/Tabs';
import { Heading1, Heading2, Heading3, InlineCode, MutedParagraph, Table, TableCell, TableHeader, TableRow, Paragraph } from '@/app/components/Typography';

const InputFieldDocs: FC = () => {
    // Code variants
    const basicCode = `
        <i-input-field placeholder="Enter text" />
        <i-input-field type="email" placeholder="Enter email" />
        <i-input-field type="password" placeholder="Enter password" />
        <i-input-field type="number" placeholder="Enter number" />;
        `;

    const variantCode = `
        <i-input-field variant="flat" placeholder="Flat Variant" />
        <i-input-field variant="outline" placeholder="Outline Variant" />
        `;

    const colorCode = `
        <div class="flex flex-col gap-4">
          <i-input-field color="default" placeholder="Default" />
          <i-input-field color="primary" placeholder="Primary" />
          <i-input-field color="secondary" placeholder="Secondary" />
          <i-input-field color="success" placeholder="Success" />
          <i-input-field color="warning" placeholder="Warning" />
          <i-input-field color="danger" placeholder="Danger" />
        </div>
        `;

    const radiusCode = `
        <div class="flex flex-col gap-4">
          <i-input-field radius="sm" placeholder="Small Radius" />
          <i-input-field radius="md" placeholder="Medium Radius" />
          <i-input-field radius="lg" placeholder="Large Radius" />
        </div>
        `;

    const contentCode = `
        <div class="flex flex-col gap-4">
          <i-input-field start-content="🔍" placeholder="With Start Content" />
          <i-input-field end-content="✔" placeholder="With End Content" />
          <i-input-field start-content="📧" end-content="✔" placeholder="With Both" />
        </div>
        `;

    const customCode = `
        <i-input-field 
          placeholder="Custom Input" 
          outline-color="purple" 
          outline-width="2px"
          place-holder-color="#666"
        />
        `;

    const validationCode = `
        <i-input-field 
          placeholder="Enter name" 
          error-message="Name is required"
          description="Please enter your full name"
          valid={false}
        />
        `;

    // Tabs configuration
    const tabs = {
        basic: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={basicCode} language="html" />, code: basicCode, className: 'h-full w-full' }
        ],
        variants: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={variantCode} language="html" />, code: variantCode, className: 'h-full w-full' }
        ],
        colors: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={colorCode} language="html" />, code: colorCode, className: 'h-full w-full' }
        ],
        radius: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={radiusCode} language="html" />, code: radiusCode, className: 'h-full w-full' }
        ],
        content: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={contentCode} language="html" />, code: contentCode, className: 'h-full w-full' }
        ],
        custom: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={customCode} language="html" />, code: customCode, className: 'h-full w-full' }
        ],
        validation: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={validationCode} language="html" />, code: validationCode, className: 'h-full w-full' }
        ]
    };

    return (
        <div className='w-full p-5'>
            <Heading1 className='mb-1'>I-Input-Field</Heading1>
            <MutedParagraph className='mb-10'>
                The i-input-field component provides a customizable input field with various types, styles, and validation states.
            </MutedParagraph>

            <Heading2>Overview</Heading2>
            <Paragraph className='mb-5'>
                Input fields are essential form elements that support different input types, styling variants, and validation states. They can be customized with different colors, borders, and content additions.
            </Paragraph>

            <Seperator />


            <Heading3>Input Types</Heading3>
            <Paragraph>
                The component supports all HTML input types like <InlineCode>text</InlineCode>, <InlineCode>email</InlineCode>, <InlineCode>password</InlineCode>, and <InlineCode>nunber</InlineCode>. Default to <InlineCode>text</InlineCode>
            </Paragraph>
            <Tabs tabs={tabs.basic} />
            <Table>
                <TableRow>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>text</TableCell>
                    <TableCell>Default text input</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>email</TableCell>
                    <TableCell>Email input with validation</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>password</TableCell>
                    <TableCell>Masked text input</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>number</TableCell>
                    <TableCell>Numeric input with controls</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Variants</Heading3>
            <Paragraph>
                Available style variants for the input field are <InlineCode>flat</InlineCode> and <InlineCode>outline</InlineCode>.
            </Paragraph>
            <Tabs tabs={tabs.variants} />
            <Table>
                <TableRow>
                    <TableHeader>Variant</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Visual Style</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>flat</TableCell>
                    <TableCell>Default variant with minimal styling</TableCell>
                    <TableCell>No border, background color only</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>outline</TableCell>
                    <TableCell>Bordered variant</TableCell>
                    <TableCell>Visible border with transparent background</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Colors</Heading3>
            <Paragraph>
                Customize the color of the input field using predefined variants such as <InlineCode>default</InlineCode>,<InlineCode> primary </InlineCode>, <InlineCode> secondary </InlineCode>, etc.
            </Paragraph>
            <Tabs tabs={tabs.colors} />
            <Table>
                <TableRow>
                    <TableHeader>Color</TableHeader>
                    <TableHeader>Usage</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>default</TableCell>
                    <TableCell>Standard form inputs</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>primary</TableCell>
                    <TableCell>Main call-to-action inputs</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>secondary</TableCell>
                    <TableCell>Alternative style inputs</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>success</TableCell>
                    <TableCell>Valid input states</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>warning</TableCell>
                    <TableCell>Cautionary input states</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>danger</TableCell>
                    <TableCell>Error input states</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Border Radius</Heading3>
            <Paragraph>
                Available border radius options such as <InlineCode>xs</InlineCode>, <InlineCode>sm</InlineCode>, etc. Defaults to <InlineCode>lg</InlineCode>
            </Paragraph>
            <Tabs tabs={tabs.radius} />
            <Table>
                <TableRow>
                    <TableHeader>Size</TableHeader>
                    <TableHeader>Value</TableHeader>
                    <TableHeader>Usage</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>xs</TableCell>
                    <TableCell>2px</TableCell>
                    <TableCell>Minimal rounding</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>sm</TableCell>
                    <TableCell>4px</TableCell>
                    <TableCell>Slight rounding</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>md</TableCell>
                    <TableCell>6px</TableCell>
                    <TableCell>Standard rounding</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>lg</TableCell>
                    <TableCell>8px</TableCell>
                    <TableCell>Large rounding</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>xl</TableCell>
                    <TableCell>12px</TableCell>
                    <TableCell>Maximum rounding</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Content Placement</Heading3>
            <Paragraph>
                Options for adding content before or after the input.
            </Paragraph>
            <Tabs tabs={tabs.content} />
            <Table>
                <TableRow>
                    <TableHeader>Position</TableHeader>
                    <TableHeader>Content Types</TableHeader>
                    <TableHeader>Examples</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>startContent</TableCell>
                    <TableCell>Icons, Text, Elements</TableCell>
                    <TableCell>Search icon, Currency symbol</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>endContent</TableCell>
                    <TableCell>Icons, Text, Elements</TableCell>
                    <TableCell>Validation icon, Unit symbol</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Validation States</Heading3>
            <Paragraph>
                Available validation states and their visual indicators such as <InlineCode>valid</InlineCode>, <InlineCode>description</InlineCode>, etc.
            </Paragraph>
            <Tabs tabs={tabs.validation} />
            <Table>
                <TableRow>
                    <TableHeader>State</TableHeader>
                    <TableHeader>Props</TableHeader>
                    <TableHeader>Visual Indicators</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>Default</TableCell>
                    <TableCell>valid=true</TableCell>
                    <TableCell>Normal input styling</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Invalid</TableCell>
                    <TableCell>valid=false, error-message="..."</TableCell>
                    <TableCell>Red border, Error message below</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>With Description</TableCell>
                    <TableCell>description="..."</TableCell>
                    <TableCell>Helper text below input</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Disabled</TableCell>
                    <TableCell>disabled=true</TableCell>
                    <TableCell>Grayed out, Non-interactive</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading2>Props Reference</Heading2>
            <Table>
                <TableRow>
                    <TableHeader>Prop</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Default</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>type</TableCell>
                    <TableCell>"text" | "email" | "password" | "number"</TableCell>
                    <TableCell>'text'</TableCell>
                    <TableCell>Input field type</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>variant</TableCell>
                    <TableCell>"flat" | "outline"</TableCell>
                    <TableCell>'flat'</TableCell>
                    <TableCell>Visual style variant</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>color</TableCell>
                    <TableCell>"default" | "primary" | "secondary" | "success" | "warning" | "danger"</TableCell>
                    <TableCell>'default'</TableCell>
                    <TableCell>Color theme</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>radius</TableCell>
                    <TableCell>"xs" | "sm" | "md" | "lg" | "xl"</TableCell>
                    <TableCell>'lg'</TableCell>
                    <TableCell>Border radius size</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>disabled</TableCell>
                    <TableCell>boolean</TableCell>
                    <TableCell>false</TableCell>
                    <TableCell>Disabled state</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>startContent</TableCell>
                    <TableCell>Element | string | number</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Content before input</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>endContent</TableCell>
                    <TableCell>Element | string | number</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Content after input</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>errorMessage</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Error message text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>description</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>undefined</TableCell>
                    <TableCell>Helper text</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>valid</TableCell>
                    <TableCell>boolean</TableCell>
                    <TableCell>true</TableCell>
                    <TableCell>Validation state</TableCell>
                </TableRow>
            </Table>
        </div>
    );
}

export default InputFieldDocs;
import { FC } from 'react';
import CodePreview from '@/app/components/CodePreview';
import Seperator from '@/app/components/Seperator';
import Tabs from '@/app/components/Tabs';
import { Heading1, Heading2, Heading3, InlineCode, MutedParagraph, Table, TableCell, TableHeader, TableRow, Paragraph } from '@/app/components/Typography';

const CalendarDocs: FC = () => {
    // Code variants
    const basicCode = `
        <i-calendar></i-calendar>
        <i-calendar id="calendar" selected="2024-11-15" dateSelect="onSelect(event)"></i-calendar>
        <i-calendar selected="2024-12-01" color="primary"></i-calendar>;
        
        <script>
            const calendar = document.getElementById('calendar');
            const onSelect = (event) => {
                calendar.setAttribute('selected', event.detail);
            };
        </script>
        `;

    const variantCode = `
        <i-calendar color="default" selected="2024-11-15"></i-calendar>
        <i-calendar color="primary" selected="2024-11-15"></i-calendar>
        <i-calendar color="secondary" selected="2024-11-15"></i-calendar>
        <i-calendar color="success" selected="2024-11-15"></i-calendar>
        <i-calendar color="warning" selected="2024-11-15"></i-calendar>
        <i-calendar color="danger" selected="2024-11-15"></i-calendar>
        `;

    const minMaxCode = `
        <i-calendar color="primary" min-date="2024-11-12" max-date="2024-11-30" selected="2024-11-15"></i-calendar>
        `;

    const readOnlyCode = `
        <i-calendar read-only selected="2024-03-10"></i-calendar>
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
        minMax: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={minMaxCode} language="html" />, code: minMaxCode, className: 'h-full w-full' }
        ],
        readOnly: [
            { index: 1, title: 'Preview', content: 'Preview', className: '' },
            { index: 2, title: 'Code', content: <CodePreview code={readOnlyCode} language="html" />, code: readOnlyCode, className: 'h-full w-full' }
        ]
    };

    return (
        <div className='w-full p-5'>
            <Heading1 className='mb-1'>I-Calendar</Heading1>
            <MutedParagraph className='mb-10'>
                The i-calendar component provides an interactive calendar that can be customized with different color schemes, selected dates, and more.
            </MutedParagraph>

            <Heading2>Overview</Heading2>
            <Paragraph className='mb-5'>
                Calendars are important UI elements to let users select dates. The <InlineCode>i-calendar</InlineCode> component allows for date selection, customization, and date range restrictions.
            </Paragraph>

            <Seperator />

            <Heading3>Basic Calendar</Heading3>
            <Paragraph>
                By default, the calendar displays the current month and allows you to select dates. You can also set a specific selected date.
            </Paragraph>
            <Tabs tabs={tabs.basic} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Example</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>selected</TableCell>
                    <TableCell>Select a default date</TableCell>
                    <TableCell>selected="2024-11-15"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>dateSelect (onDateSelect)</TableCell>
                    <TableCell>Callback function that is triggered when a date is selected</TableCell>
                    <TableCell><InlineCode>{`onDateSelect="(date) => console.log(date)`}</InlineCode></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>color</TableCell>
                    <TableCell>Change calendar color theme</TableCell>
                    <TableCell>color="primary"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>min-date</TableCell>
                    <TableCell>Sets the minimum selectable date</TableCell>
                    <TableCell>min-date="2024-11-01"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>max-date</TableCell>
                    <TableCell>Sets the maximum selectable date</TableCell>
                    <TableCell>max-date="2024-12-31"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>read-only</TableCell>
                    <TableCell>Disables interaction with the calendar</TableCell>
                    <TableCell>read-only</TableCell>
                </TableRow>
            </Table>


            <Seperator />

            <Heading3>Variants</Heading3>
            <Paragraph>
                You can change the color of the calendar using the <InlineCode>color</InlineCode> prop to apply predefined color themes like <InlineCode>default</InlineCode>, <InlineCode>primary</InlineCode>, etc.
            </Paragraph>
            <Tabs tabs={tabs.variants} />
            <Table>
                <TableRow>
                    <TableHeader>Variant</TableHeader>
                    <TableHeader>Usage</TableHeader>
                    <TableHeader>Visual Style</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>default</TableCell>
                    <TableCell>Standard calendar</TableCell>
                    <TableCell>Default color theme</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>primary</TableCell>
                    <TableCell>Primary color calendar</TableCell>
                    <TableCell>Primary theme color</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>secondary</TableCell>
                    <TableCell>Secondary color calendar</TableCell>
                    <TableCell>Secondary theme color</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>warning</TableCell>
                    <TableCell>Warning color calendar</TableCell>
                    <TableCell>Warning theme color</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>success</TableCell>
                    <TableCell>Success color calendar</TableCell>
                    <TableCell>Success theme color</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>danger</TableCell>
                    <TableCell>Danger color calendar</TableCell>
                    <TableCell>Danger theme color</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Min and Max Dates</Heading3>
            <Paragraph>
                You can restrict the calendar to display only a specific range of dates using the <InlineCode>min-date</InlineCode> and <InlineCode>max-date</InlineCode> props.
            </Paragraph>
            <Tabs tabs={tabs.minMax} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Example</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>min-date</TableCell>
                    <TableCell>Set the minimum selectable date</TableCell>
                    <TableCell>min-date="2024-11-12"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>max-date</TableCell>
                    <TableCell>Set the maximum selectable date</TableCell>
                    <TableCell>max-date="2024-11-30"</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Read-Only Mode</Heading3>
            <Paragraph>
                Set the <InlineCode>read-only</InlineCode> prop to make the calendar non-interactive.
            </Paragraph>
            <Tabs tabs={tabs.readOnly} />
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Example</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>read-only</TableCell>
                    <TableCell>Disables interaction with the calendar</TableCell>
                    <TableCell>read-only</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>Props Reference</Heading3>
            <Table>
                <TableRow>
                    <TableHeader>Property</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Default</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>color</TableCell>
                    <TableCell>"danger" | "default" | "primary" | "secondary" | "success" | "warning"</TableCell>
                    <TableCell>Defines the color of the calendar</TableCell>
                    <TableCell>"default"</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>max-date</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Sets the maximum selectable date</TableCell>
                    <TableCell>undefined</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>min-date</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Sets the minimum selectable date</TableCell>
                    <TableCell>undefined</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>read-only</TableCell>
                    <TableCell>boolean</TableCell>
                    <TableCell>Disables interaction with the calendar</TableCell>
                    <TableCell>false</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>selected</TableCell>
                    <TableCell>string</TableCell>
                    <TableCell>Sets the selected date</TableCell>
                    <TableCell>undefined</TableCell>
                </TableRow>
            </Table>
        </div>
    );
}

export default CalendarDocs;

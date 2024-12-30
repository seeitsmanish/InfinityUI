import CodePreview from "@/app/components/CodePreview";
import Seperator from "@/app/components/Seperator";
import Tabs, { TabItem } from "@/app/components/Tabs";
import { Heading1, Heading2, Heading3, MutedParagraph, Paragraph, Table, TableCell, TableHeader, TableRow, InlineCode } from "@/app/components/Typography";

const page = () => {
  const singleAccordionCode = `
<div class="item">
  <p class="heading">Accordion Type: Single</p>
  <div class="content">
    <i-accordion type="single" style="width: 300px;">
      <i-accordion-item>
        <i-accordion-trigger>Accordion 1</i-accordion-trigger>
        <i-accordion-content>Accordion 1 content</i-accordion-content>
      </i-accordion-item>
      <i-accordion-item>
        <i-accordion-trigger>Accordion 2</i-accordion-trigger>
        <i-accordion-content>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repudiandae cupiditate, ducimus iusto voluptates quas animi ipsa nam dicta iure?</i-accordion-content>
      </i-accordion-item>
      <i-accordion-item>
        <i-accordion-trigger>Accordion 3</i-accordion-trigger>
        <i-accordion-content>Accordion 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, vel?</i-accordion-content>
      </i-accordion-item>
    </i-accordion>
  </div>
</div>
`;

  const multipleAccordionCode = `
<div class="item">
  <p class="heading">Accordion Type: Multiple</p>
  <div class="content">
    <i-accordion type="multiple" style="width: 300px;">
      <i-accordion-item>
        <i-accordion-trigger>Accordion 1</i-accordion-trigger>
        <i-accordion-content>Accordion 1 content</i-accordion-content>
      </i-accordion-item>
      <i-accordion-item>
        <i-accordion-trigger>Accordion 2</i-accordion-trigger>
        <i-accordion-content>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam repudiandae cupiditate, ducimus iusto voluptates quas animi ipsa nam dicta iure?</i-accordion-content>
      </i-accordion-item>
      <i-accordion-item>
        <i-accordion-trigger>Accordion 3</i-accordion-trigger>
        <i-accordion-content>Accordion 3 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, vel?</i-accordion-content>
      </i-accordion-item>
    </i-accordion>
  </div>
</div>
`;

  const tabs: Record<string, TabItem[]> = {
    single: [
      { index: 1, title: "Preview", content: "Preview", className: "" },
      { index: 2, title: "Code", content: <CodePreview code={singleAccordionCode} language="html" />, code: singleAccordionCode, className: "h-full w-full" },
    ],
    multiple: [
      { index: 1, title: "Preview", content: "Preview", className: "" },
      { index: 2, title: "Code", content: <CodePreview code={multipleAccordionCode} language="html" />, code: multipleAccordionCode, className: "h-full w-full" },
    ],
  };

  return (
    <div className="w-full p-5">
      <Heading1 className="mb-1">I-Accordion</Heading1>
      <MutedParagraph className="mb-10">
        Displays an accordion component to toggle the visibility of content panels.
      </MutedParagraph>

      <Heading2>Overview</Heading2>
      <Paragraph className="mb-5">
        The <InlineCode>i-accordion</InlineCode> component supports multiple configurations such as <InlineCode>single</InlineCode> and <InlineCode>multiple</InlineCode> modes, allowing flexible content management.
      </Paragraph>

      <Seperator />

      <Heading3>Accordion Type: Single</Heading3>
      <Paragraph>
        Use the <InlineCode>type="single"</InlineCode> attribute to allow only one panel to remain open at a time.
      </Paragraph>
      <Tabs tabs={tabs.single} />

      <Seperator />

      <Heading3>Accordion Type: Multiple</Heading3>
      <Paragraph>
        Use the <InlineCode>type="multiple"</InlineCode> attribute to allow multiple panels to remain open simultaneously.
      </Paragraph>
      <Tabs tabs={tabs.multiple} />

      <Seperator />

      <Heading3>Properties</Heading3>
      <Table>
        <TableRow>
          <TableHeader>Property</TableHeader>
          <TableHeader>Attribute</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Default</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>type</TableCell>
          <TableCell>type</TableCell>
          <TableCell>Determines the accordion mode.</TableCell>
          <TableCell><InlineCode>"single" | "multiple"</InlineCode></TableCell>
          <TableCell><InlineCode>'single'</InlineCode></TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default page;

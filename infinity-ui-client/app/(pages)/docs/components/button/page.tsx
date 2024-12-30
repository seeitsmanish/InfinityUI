import CodePreview from "@/app/components/CodePreview";
import Seperator from "@/app/components/Seperator";
import Tabs, { TabItem } from "@/app/components/Tabs";
import { Heading1, Heading2, Heading3, MutedParagraph, Paragraph, Table, TableCell, TableHeader, TableRow, InlineCode } from "@/app/components/Typography";

const page = () => {
  const variantCode = `
<div class="item">
  <p class="heading">Variants</p>
  <div class="content">
    <div class="sub-content">
      <i-button variant="default">Default</i-button>
    </div>
    <div class="sub-content">
      <i-button variant="primary">Primary</i-button>
    </div>
    <div class="sub-content">
      <i-button variant="secondary">Secondary</i-button>
    </div>
    <div class="sub-content">
      <i-button variant="success">Success</i-button>
    </div>
    <div class="sub-content">
      <i-button variant="warning">Warning</i-button>
    </div>
    <div class="sub-content">
      <i-button variant="danger">Danger</i-button>
    </div>
  </div>
</div>
`;

  const sizeCode = `
<div class="item">
  <p class="heading">Size Variants</p>
  <div class="content">
    <div class="sub-content">
      <i-button size="xs">Extra Small</i-button>
    </div>
    <div class="sub-content">
      <i-button size="sm">Small</i-button>
    </div>
    <div class="sub-content">
      <i-button size="md">Medium</i-button>
    </div>
    <div class="sub-content">
      <i-button size="lg">Large</i-button>
    </div>
    <div class="sub-content">
      <i-button size="xl">Extra Large</i-button>
    </div>
  </div>
</div>
`;

  const disabledCode = `
<div class="item">
  <p class="heading">Disabled State</p>
  <div class="content">
    <i-button variant="primary" disabled>Disabled</i-button>
  </div>
</div>
`;

  const rippleCode = `
<div class="item">
  <p class="heading">Ripple Effect</p>
  <div class="content">
    <div class="sub-content">
      <i-button ">Ripple On</i-button>
    </div>
    <div class="sub-content">
      <i-button disable-ripple="true">Ripple Off</i-button>
    </div>
  </div>
</div>
`;

  const tabs: Record<string, TabItem[]> = {
    variants: [
      { index: 1, title: 'Preview', content: 'Preview', className: '' },
      { index: 2, title: 'Code', content: <CodePreview code={variantCode} language="html" />, code: variantCode, className: 'h-full w-full' }
    ],
    sizes: [
      { index: 1, title: 'Preview', content: 'Preview', className: '' },
      { index: 2, title: 'Code', content: <CodePreview code={sizeCode} language="html" />, code: sizeCode, className: 'h-full w-full' }
    ],
    disabled: [
      { index: 1, title: 'Preview', content: 'Preview', className: '' },
      { index: 2, title: 'Code', content: <CodePreview code={disabledCode} language="html" />, code: disabledCode, className: 'h-full w-full' }
    ],
    ripple: [
      { index: 1, title: "Preview", content: "Preview", className: "" },
      { index: 2, title: "Code", content: <CodePreview code={rippleCode} language="html" />, code: rippleCode, className: "h-full w-full" },
    ]
  };

  return (
    <div className="w-full p-5">
      <Heading1 className="mb-1">I-Button</Heading1>
      <MutedParagraph className="mb-10">
        Displays a button or a component that looks like a button.
      </MutedParagraph>

      <Heading2>Overview</Heading2>
      <Paragraph className="mb-5">
        The <InlineCode>i-button</InlineCode> component provides multiple variants, sizes, and customization options to fit various use cases in your application.
      </Paragraph>

      <Seperator />

      <Heading3>Variants</Heading3>
      <Paragraph>
        Customize the appearance of the button using predefined variants such as <InlineCode>default</InlineCode>, <InlineCode>primary</InlineCode>, <InlineCode>secondary</InlineCode>, etc.
      </Paragraph>
      <Tabs tabs={tabs.variants} />
      <Table>
        <TableRow>
          <TableHeader>Variant</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>default</TableCell>
          <TableCell>The default button style.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>primary</TableCell>
          <TableCell>Used for primary actions.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>secondary</TableCell>
          <TableCell>Used for secondary actions.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>success</TableCell>
          <TableCell>Indicates success or positive action.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>warning</TableCell>
          <TableCell>Indicates a warning or caution.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>danger</TableCell>
          <TableCell>Indicates a dangerous or destructive action.</TableCell>
        </TableRow>
      </Table>

      <Seperator />

      <Heading3>Sizes</Heading3>
      <Paragraph>
        Adjust the size of the button using predefined sizes such as <InlineCode>xs</InlineCode>, <InlineCode>sm</InlineCode>, <InlineCode>md</InlineCode>, etc.
      </Paragraph>
      <Tabs tabs={tabs.sizes} />
      <Table>
        <TableRow>
          <TableHeader>Size</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>xs</TableCell>
          <TableCell>Extra small size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>sm</TableCell>
          <TableCell>Small size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>md</TableCell>
          <TableCell>Medium size (default).</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>lg</TableCell>
          <TableCell>Large size.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>xl</TableCell>
          <TableCell>Extra large size.</TableCell>
        </TableRow>
      </Table>

      <Seperator />

      <Heading3>Disabled State</Heading3>
      <Paragraph>
        Use the <InlineCode>disabled</InlineCode> attribute to make the button non-interactive.
      </Paragraph>
      <Tabs tabs={tabs.disabled} />

      <Seperator />

      <Heading3>Ripple Effect</Heading3>
      <Paragraph>
        The <InlineCode>disable-ripple</InlineCode> property disabled a ripple animation when the button is clicked. You can enable or disable the ripple effect using boolean values <InlineCode>true</InlineCode> or <InlineCode>false</InlineCode>.
        Defaults to value <InlineCode>true</InlineCode>
      </Paragraph>
      <Tabs tabs={tabs.ripple} />
      <Table>
        <TableRow>
          <TableHeader>Property</TableHeader>
          <TableHeader>Value</TableHeader>
          <TableHeader>Description</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>disable-ripple</TableCell>
          <TableCell>true</TableCell>
          <TableCell>disabled the ripple effect on button click.</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>disable-ripple</TableCell>
          <TableCell>false</TableCell>
          <TableCell>enables the ripple effect.</TableCell>
        </TableRow>
      </Table>
    </div>
  );
};

export default page;

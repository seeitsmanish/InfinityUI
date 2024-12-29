import CodePreview from "@/app/components/CodePreview";
import Seperator from "@/app/components/Seperator";
import Tabs, { TabItem } from "@/app/components/Tabs";
import { Heading1, Heading2, Heading3, MutedParagraph, Paragraph, Table, TableCell, TableHeader, TableRow, TypographyBlockquote, InlineCode } from "@/app/components/Typography";

const page = () => {
    const colorCode = `

<div class="item">
  <p class="heading">Color Variants</p>
  <div class="content">
    <div class="sub-content">
      <i-spinner color="default"></i-spinner>
      <label>Default</label>
    </div>
    <div class="sub-content">
      <i-spinner color="primary"></i-spinner>
      <label>Primary</label>
    </div>
    <div class="sub-content">
      <i-spinner color="secondary"></i-spinner>
      <label>Secondary</label>
    </div>
    <div class="sub-content">
      <i-spinner color="success"></i-spinner>
      <label>Success</label>
    </div>
    <div class="sub-content">
      <i-spinner color="warning"></i-spinner>
      <label>Warning</label>
    </div>
    <div class="sub-content">
      <i-spinner color="danger"></i-spinner>
      <label>Danger</label>
    </div>
    <div class="sub-content">
      <i-spinner color="#FF5733"></i-spinner>
      <label>Custom (#FF5733)</label>
    </div>
  </div>
</div>

`;

    const sizeCode = `

<div class="item">
  <p class="heading">Size Variants</p>
  <div class="content">
    <div class="sub-content">
      <i-spinner color="primary" size="xs"></i-spinner>
      <label>XS</label>
    </div>
    <div class="sub-content">
      <i-spinner color="primary" size="sm"></i-spinner>
      <label>SM</label>
    </div>
    <div class="sub-content">
      <i-spinner color="primary" size="md"></i-spinner>
      <label>MD</label>
    </div>
    <div class="sub-content">
      <i-spinner color="primary" size="lg"></i-spinner>
      <label>LG</label>
    </div>
    <div class="sub-content">
      <i-spinner color="primary" size="xl"></i-spinner>
      <label>XL</label>
    </div>
  </div>
</div>

`;

    const thicknessCode = `

  <div class="item">
  <p class="heading">Custom Thickness</p>
  <div class="content">
    <div class="sub-content">
      <i-spinner color="success" thickness="2px"></i-spinner>
      <label>Thickness 2px</label>
    </div>
    <div class="sub-content">
      <i-spinner color="success" thickness="4px"></i-spinner>
      <label>Thickness 4px</label>
    </div>
    <div class="sub-content">
      <i-spinner color="success" thickness="6px"></i-spinner>
      <label>Thickness 6px</label>
    </div>
  </div>
</div>

`;

    const speedCode = `
  
<div class="item">
  <p class="heading">Custom Speed</p>
  <div class="content">
    <div class="sub-content">
      <i-spinner color="danger" speed="1s"></i-spinner>
      <label>Speed 1s</label>
    </div>
    <div class="sub-content">
      <i-spinner color="danger" speed="0.3s"></i-spinner>
      <label>Speed 0.3s</label>
    </div>
    <div class="sub-content">
      <i-spinner color="danger" speed="2s"></i-spinner>
      <label>Speed 2s</label>
    </div>
  </div>
</div>

`;

    const ColorVariantTabs: TabItem[] = [
        {
            index: 1,
            title: 'Preview',
            content: 'Preview',
            className: ''
        },
        {
            index: 2,
            title: 'Code',
            content: <CodePreview code={colorCode} language="html" />,
            className: 'h-full w-full'
        },
    ];

    const SizeVariantTabs: TabItem[] = [
        {
            index: 1,
            title: 'Preview',
            content: 'Preview',
            className: ''
        },
        {
            index: 2,
            title: 'Code',
            content: <CodePreview code={sizeCode} language="html" />,
            className: 'h-full w-full'
        }
    ];

    const ThicknessVariantTabs: TabItem[] = [
        {
            index: 1,
            title: 'Preview',
            content: 'Preview',
            className: ''
        },
        {
            index: 2,
            title: 'Code',
            content: <CodePreview code={thicknessCode} language="html" />,
            className: 'h-full w-full'
        }
    ];

    const SpeedVariantTabs: TabItem[] = [
        {
            index: 1,
            title: 'Preview',
            content: 'Preview',
            className: ''
        },
        {
            index: 2,
            title: 'Code',
            content: <CodePreview code={speedCode} language="html" />,
            className: 'h-full w-full'
        }
    ];

    return (
        <div className="w-full p-5">
            <Heading1 className="mb-1">
                I-Spinner
            </Heading1>
            <MutedParagraph className="mb-10">
                A customizable and responsive loading indicator component.
            </MutedParagraph>

            <Heading2>
                Overview
            </Heading2>
            <Paragraph className="mb-5">
                The <InlineCode>i-spinner</InlineCode> component is a loading indicator that can be customized in terms of color, size, thickness, and speed. It is useful for signaling ongoing processes in your application and enhancing user experience.
            </Paragraph>

            <Heading3>
                Color Variants
            </Heading3>
            <Paragraph>
                You can customize the spinner's color by using predefined options such as <InlineCode>default</InlineCode>, <InlineCode>primary</InlineCode>, <InlineCode>secondary</InlineCode>, <InlineCode>success</InlineCode>, <InlineCode>warning</InlineCode>, and <InlineCode>danger</InlineCode>. You can also specify a custom color using a hexadecimal value.
            </Paragraph>
            <Tabs tabs={ColorVariantTabs} />
            <Table>
                <TableRow>
                    <TableHeader>Color</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>default</TableCell>
                    <TableCell>The default color of the spinner.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>primary</TableCell>
                    <TableCell>For primary use cases like buttons or active elements.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>secondary</TableCell>
                    <TableCell>Used for secondary actions or inactive elements.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>success</TableCell>
                    <TableCell>Indicates a successful action or process.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>warning</TableCell>
                    <TableCell>Indicates a warning or caution.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>danger</TableCell>
                    <TableCell>Indicates an error or dangerous action.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Custom (#FF5733)</TableCell>
                    <TableCell>A custom color represented by a hexadecimal code.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>
                Size Variants
            </Heading3>
            <Paragraph>
                The spinner can be customized into different sizes, ranging from extra small to extra large. The available size options are <InlineCode>XS</InlineCode>, <InlineCode>SM</InlineCode>, <InlineCode>MD</InlineCode>, <InlineCode>LG</InlineCode>, and <InlineCode>XL</InlineCode>.
            </Paragraph>
            <Tabs tabs={SizeVariantTabs} />
            <Table>
                <TableRow>
                    <TableHeader>Size</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>XS</TableCell>
                    <TableCell>Extra Small spinner.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>SM</TableCell>
                    <TableCell>Small spinner.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>MD</TableCell>
                    <TableCell>Medium spinner (default size).</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>LG</TableCell>
                    <TableCell>Large spinner.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>XL</TableCell>
                    <TableCell>Extra Large spinner.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>
                Custom Thickness
            </Heading3>
            <Paragraph>
                You can customize the thickness of the spinner using values like <InlineCode>2px</InlineCode>, <InlineCode>4px</InlineCode>, or <InlineCode>6px</InlineCode>.
            </Paragraph>
            <Tabs tabs={ThicknessVariantTabs} />
            <Table>
                <TableRow>
                    <TableHeader>Thickness</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>2px</TableCell>
                    <TableCell>Thin spinner thickness.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>4px</TableCell>
                    <TableCell>Standard spinner thickness.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>6px</TableCell>
                    <TableCell>Thicker spinner for more emphasis.</TableCell>
                </TableRow>
            </Table>

            <Seperator />

            <Heading3>
                Custom Speed
            </Heading3>
            <Paragraph>
                The speed of the spinner can be customized using values like <InlineCode>1s</InlineCode>, <InlineCode>0.3s</InlineCode>, or <InlineCode>2s</InlineCode>.
            </Paragraph>
            <Tabs tabs={SpeedVariantTabs} />
            <Table>
                <TableRow>
                    <TableHeader>Speed</TableHeader>
                    <TableHeader>Description</TableHeader>
                </TableRow>
                <TableRow>
                    <TableCell>1s</TableCell>
                    <TableCell>Standard speed for spinner animation.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>0.3s</TableCell>
                    <TableCell>Faster spinner speed.</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2s</TableCell>
                    <TableCell>Slower spinner speed for emphasis.</TableCell>
                </TableRow>
            </Table>

        </div>
    );
};

export default page;

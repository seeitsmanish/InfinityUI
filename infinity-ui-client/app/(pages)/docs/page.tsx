import Seperator from "@/app/components/Seperator";
import { Heading1, Heading2, List, Paragraph } from "@/app/components/Typography";

const page = () => {

  return (
    <div className="w-full p-5">

      <Heading1 className="mb-1">Introduction</Heading1>
      <Paragraph>
        Welcome to <strong>Infinity UI</strong>, a collection of web components built with StencilJS. This library offers a set of lightweight, customizable, and framework-agnostic UI components for modern web applications.
      </Paragraph>

      <Seperator />

      <Heading2>
        What is Infinity UI?
      </Heading2>
      <Paragraph>
        <strong>Infinity UI</strong> provides a range of reusable web components designed for easy integration into any web application.
        These components are built using <strong>StencilJS</strong>, which ensures they work seamlessly across different frameworks like React, Angular, and Vue.
      </Paragraph>

      <Seperator />

      <Heading2>
        Key Features
      </Heading2>
      <List>
        <li><strong>Framework Agnostic:</strong> Use with any JavaScript framework or even with vanilla JavaScript. </li>
        <li><strong>Customizable:</strong> Components are designed to be easily customizable to fit your app's needs. </li>
        <li><strong>Responsive:</strong> All components adapt well to different screen sizes and devices. </li>
        <li><strong>Infinity Stones Color Scheme:</strong> The color scheme of Infinity UI is inspired by the iconic Infinity Stones from Marvel, adding a unique and vibrant touch to your UI. </li>
      </List>

      <Seperator />


      <Heading2>
        Getting Started
      </Heading2>
      <Paragraph>
        To start using Infinity UI, simply follow the installation instructions and explore our components. Each component comes with usage details and examples to help you get started quickly.
      </Paragraph>
    </div>
  )
};

export default page;

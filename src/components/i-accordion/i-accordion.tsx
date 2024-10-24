import { Component, h } from '@stencil/core';

@Component({
  tag: 'i-accordion',
  styleUrl: 'i-accordion.scss',
  shadow: false,
})
export class IAccordion {
  render() {
    return (
      <div class="accordion-root">
        <slot></slot>
      </div>
    );
  }
}

// @Prop() selection: 'single' | 'multiple' = 'single';
// @Prop() defaultExpandedKeys: string[] = [];
// @Prop() disabledKeys: string[] | undefined;
// @Prop() value: Set<string> | undefined;
// @Prop() onChange: (key: string) => void;

// @State() expandedKeys: Set<string> = new Set(this.defaultExpandedKeys);

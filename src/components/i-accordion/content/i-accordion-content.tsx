import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'i-accordion-content',
  styleUrl: 'i-accordion-content.scss',
  shadow: false,
})
export class IAccordionContent {
  render() {
    return (
      <Host class="accordion-content-root">
        <div class="accordion-content-inner">
          <div class="accordion-content-padded">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}

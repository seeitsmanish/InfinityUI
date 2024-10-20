import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'i-accordion-trigger',
  styleUrl: 'i-accordion-trigger.scss',
  shadow: false,
})
export class IAccordionTrigger {
  @Prop({ mutable: true }) isActive: boolean;

  render() {
    console.log(this.isActive);
    return (
      <Host
        class="accordion-trigger-root"
        onClick={() => {
          this.isActive = !this.isActive;
        }}
      >
        <slot></slot>
        <span>v</span>
      </Host>
    );
  }
}

import { Component, Element, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'i-accordion-trigger',
  styleUrl: 'i-accordion-trigger.scss',
  shadow: false,
})
export class IAccordionTrigger {
  @Element() el: HTMLElement;
  @Event() accordionTriggerClicked: EventEmitter<{ key: string }>;
  render() {
    return (
      <Host
        class="accordion-trigger-root"
        onClick={() => {
          if (this.el.classList.contains('accordion-trigger-root-disabled')) return;
          this.accordionTriggerClicked.emit({
            key: this.el.dataset.key,
          });
        }}
      >
        <slot></slot>
        <span class="accordion-trigger-chevron">
          <i-chevron direction='down' />
        </span>
      </Host>
    );
  }
}

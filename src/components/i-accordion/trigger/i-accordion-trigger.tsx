import { Component, Element, Event, EventEmitter, getAssetPath, h, Host } from '@stencil/core';

@Component({
  tag: 'i-accordion-trigger',
  styleUrl: 'i-accordion-trigger.scss',
  assetsDirs: ['assets'],
  shadow: false,
})
export class IAccordionTrigger {
  @Element() el: HTMLElement;
  @Event() accordionTriggerClicked: EventEmitter<{ key: string }>;
  render() {
    const chevronIconPath = getAssetPath('./assets/chevron.svg');

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
          <img src={chevronIconPath} alt="chevron" />
        </span>
      </Host>
    );
  }
}

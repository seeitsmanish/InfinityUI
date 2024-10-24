import { Component, Event, EventEmitter, getAssetPath, h, Host } from '@stencil/core';

@Component({
  tag: 'i-accordion-trigger',
  styleUrl: 'i-accordion-trigger.scss',
  assetsDirs: ['assets'],
  shadow: false,
})
export class IAccordionTrigger {
  @Event() clicked: EventEmitter;
  render() {
    const chevronIconPath = getAssetPath('./assets/chevron.svg');

    return (
      <Host
        class="accordion-trigger-root"
        onClick={() => {
          this.clicked.emit();
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

import { Component, Element, h, Host, Listen, Prop, State, } from '@stencil/core';

@Component({
  tag: 'i-accordion',
  styleUrl: 'i-accordion.scss',
  shadow: false,
})
export class IAccordion {
  @Prop() type: 'single' | 'multiple' = 'single';
  @State() curentActiveItem?: string = undefined;
  @Element() el: HTMLElement;

  toggleClassByKey(key: string, className: string, el?: HTMLElement) {
    let element = el ? this.el.querySelector(`#${key}`) : this.el.querySelector(`#${key}`);
    element?.classList.toggle(className);
  }

  toggleAccordionItemByKey(key: string) {
    this.toggleClassByKey(`accordion-trigger-${key}`, 'accordion-trigger-root-expanded');
    this.toggleClassByKey(`accordion-content-${key}`, 'accordion-content-root-expanded');
  }

  @Listen('accordionTriggerClicked')
  handleAccordionTriggerClicked(event: CustomEvent<{ key: string }>) {
    const key = event.detail.key.split('-')[2];
    if (this.type === 'multiple') {
      this.toggleAccordionItemByKey(key);
    }
    else {
      if (this.curentActiveItem) {
        if (this.curentActiveItem === key) {
          this.toggleAccordionItemByKey(this.curentActiveItem);
          this.curentActiveItem = undefined;
          return;
        }
        this.toggleAccordionItemByKey(this.curentActiveItem);
        this.toggleAccordionItemByKey(key);
        this.curentActiveItem = key;
      }
      else {
        this.toggleAccordionItemByKey(key);
        this.curentActiveItem = key;
      }
    }
  }

  render() {
    return (
      <Host class="accordion-root">
        <slot></slot>
      </Host>
    );
  }
}
import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
    tag: 'i-accordion-item',
    styleUrl: 'i-accordion-item.scss',
    shadow: false,
})
export class IAccordionItem {
    @Prop() key: string = Math.random().toString(36).substring(2, 9);
    @Prop() disabled: boolean = false;
    @State() isExpanded: boolean = false;

    @Element() el: HTMLElement;

    render() {
        const children = Array.from(this.el.children) as HTMLElement[];

        // Adding unique IDs to the trigger and content elements
        const contentElement = children.find(child => child.tagName.toLowerCase() === 'i-accordion-content');
        if (contentElement) {
            contentElement.dataset.key = `accordion-content-${this.key}`;
            contentElement.id = `accordion-content-${this.key}`;
        }
        const triggerElement = children.find(child => child.tagName.toLowerCase() === 'i-accordion-trigger');
        if (triggerElement) {
            triggerElement.id = `accordion-trigger-${this.key}`;
            triggerElement.dataset.key = `accordion-trigger-${this.key}`;
            if (this.disabled) triggerElement.classList.add('accordion-trigger-root-disabled');
        }

        return (
            <Host class="accordion-item-root" data-key={`accordion-${this.key}`}>
                <slot></slot>
            </Host>
        );
    }
}
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IAccordion {
    }
    interface IAccordionContent {
    }
    interface IAccordionItem {
        "key": string;
    }
    interface IAccordionTrigger {
    }
    interface IButton {
        "classes": string;
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "disableRipple": boolean;
        "disabled": boolean;
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "variant": 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow';
    }
    interface ISpinner {
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | string;
        "emptyColor": string;
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "speed": string;
        "thickness": string;
    }
}
export interface IAccordionTriggerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIAccordionTriggerElement;
}
declare global {
    interface HTMLIAccordionElement extends Components.IAccordion, HTMLStencilElement {
    }
    var HTMLIAccordionElement: {
        prototype: HTMLIAccordionElement;
        new (): HTMLIAccordionElement;
    };
    interface HTMLIAccordionContentElement extends Components.IAccordionContent, HTMLStencilElement {
    }
    var HTMLIAccordionContentElement: {
        prototype: HTMLIAccordionContentElement;
        new (): HTMLIAccordionContentElement;
    };
    interface HTMLIAccordionItemElement extends Components.IAccordionItem, HTMLStencilElement {
    }
    var HTMLIAccordionItemElement: {
        prototype: HTMLIAccordionItemElement;
        new (): HTMLIAccordionItemElement;
    };
    interface HTMLIAccordionTriggerElementEventMap {
        "clicked": any;
    }
    interface HTMLIAccordionTriggerElement extends Components.IAccordionTrigger, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIAccordionTriggerElementEventMap>(type: K, listener: (this: HTMLIAccordionTriggerElement, ev: IAccordionTriggerCustomEvent<HTMLIAccordionTriggerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIAccordionTriggerElementEventMap>(type: K, listener: (this: HTMLIAccordionTriggerElement, ev: IAccordionTriggerCustomEvent<HTMLIAccordionTriggerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIAccordionTriggerElement: {
        prototype: HTMLIAccordionTriggerElement;
        new (): HTMLIAccordionTriggerElement;
    };
    interface HTMLIButtonElement extends Components.IButton, HTMLStencilElement {
    }
    var HTMLIButtonElement: {
        prototype: HTMLIButtonElement;
        new (): HTMLIButtonElement;
    };
    interface HTMLISpinnerElement extends Components.ISpinner, HTMLStencilElement {
    }
    var HTMLISpinnerElement: {
        prototype: HTMLISpinnerElement;
        new (): HTMLISpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "i-accordion": HTMLIAccordionElement;
        "i-accordion-content": HTMLIAccordionContentElement;
        "i-accordion-item": HTMLIAccordionItemElement;
        "i-accordion-trigger": HTMLIAccordionTriggerElement;
        "i-button": HTMLIButtonElement;
        "i-spinner": HTMLISpinnerElement;
    }
}
declare namespace LocalJSX {
    interface IAccordion {
    }
    interface IAccordionContent {
    }
    interface IAccordionItem {
        "key"?: string;
    }
    interface IAccordionTrigger {
        "onClicked"?: (event: IAccordionTriggerCustomEvent<any>) => void;
    }
    interface IButton {
        "classes"?: string;
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "disableRipple"?: boolean;
        "disabled"?: boolean;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "variant"?: 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow';
    }
    interface ISpinner {
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | string;
        "emptyColor"?: string;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "speed"?: string;
        "thickness"?: string;
    }
    interface IntrinsicElements {
        "i-accordion": IAccordion;
        "i-accordion-content": IAccordionContent;
        "i-accordion-item": IAccordionItem;
        "i-accordion-trigger": IAccordionTrigger;
        "i-button": IButton;
        "i-spinner": ISpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "i-accordion": LocalJSX.IAccordion & JSXBase.HTMLAttributes<HTMLIAccordionElement>;
            "i-accordion-content": LocalJSX.IAccordionContent & JSXBase.HTMLAttributes<HTMLIAccordionContentElement>;
            "i-accordion-item": LocalJSX.IAccordionItem & JSXBase.HTMLAttributes<HTMLIAccordionItemElement>;
            "i-accordion-trigger": LocalJSX.IAccordionTrigger & JSXBase.HTMLAttributes<HTMLIAccordionTriggerElement>;
            "i-button": LocalJSX.IButton & JSXBase.HTMLAttributes<HTMLIButtonElement>;
            "i-spinner": LocalJSX.ISpinner & JSXBase.HTMLAttributes<HTMLISpinnerElement>;
        }
    }
}

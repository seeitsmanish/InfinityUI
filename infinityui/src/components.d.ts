/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColorType, sizeType } from "./models";
import { DateTypeComponents } from "./components/i-calendar/models";
import { Event } from "@stencil/core";
export { ColorType, sizeType } from "./models";
export { DateTypeComponents } from "./components/i-calendar/models";
export { Event } from "@stencil/core";
export namespace Components {
    interface IAccordion {
        "type": 'single' | 'multiple';
    }
    interface IAccordionContent {
    }
    interface IAccordionItem {
        "disabled": boolean;
        "itemId": string;
    }
    interface IAccordionTrigger {
    }
    interface IAvatar {
        "alt": string;
        "classes": string;
        "color"?: ColorType | string;
        "lazy"?: boolean;
        "ring"?: boolean;
        "ringColor"?: string;
        "ringOffset"?: string;
        "ringWidth"?: string;
        "shape": 'circular' | 'square' | 'rounded-square';
        "size": sizeType;
        "src": string;
    }
    interface IButton {
        "classes": string;
        "color": ColorType;
        "disableRipple": boolean;
        "disabled": boolean;
        "size": sizeType;
        "variant": 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow';
    }
    interface ICalendar {
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "maxDate"?: string;
        "minDate"?: string;
        "readOnly": boolean;
        "selected"?: string;
    }
    interface ICalendarHeader {
        "calendarHeading"?: Element | string;
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleNext"?: () => void;
        "handlePrev"?: () => void;
        "readOnly": boolean;
        "toggleCurrentView": () => void;
    }
    interface ICalendarMonthView {
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleDateSelection"?: (date: string) => void;
        "maxDate"?: string;
        "minDate"?: string;
        "monthInView": number;
        "readOnly": boolean;
        "selected"?: string;
        "yearInView": number;
    }
    interface ICalendarYearView {
        "color": 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleYearSelection": (year: number) => void;
        "readOnly": boolean;
        "selectedDateComponents": DateTypeComponents;
        "yearInView": number;
        "yearNavigationRangeValue": number;
    }
    interface IChevron {
        "direction": 'up' | 'down' | 'left' | 'right';
    }
    interface IInputField {
        "color": ColorType;
        "description"?: string;
        "disabled": boolean;
        "endContent"?: string | number | Element;
        "errorMessage"?: string;
        "outlineColor"?: string;
        "outlineWidth"?: string;
        "placeHolderColor"?: string;
        "placeholder": string;
        "radius": sizeType;
        "startContent"?: string | number | Element;
        "theme"?: Record<string, string>;
        "type": 'text' | 'number' | 'email' | 'password' | 'number';
        "valid"?: boolean;
        "value": string;
        "variant": 'flat' | 'outline';
    }
    interface ISpinner {
        "color": ColorType | string;
        "emptyColor": string;
        "size": sizeType;
        "speed": string;
        "thickness": string;
    }
}
export interface IAccordionTriggerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIAccordionTriggerElement;
}
export interface ICalendarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLICalendarElement;
}
export interface IInputFieldCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIInputFieldElement;
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
        "accordionTriggerClicked": { key: string };
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
    interface HTMLIAvatarElement extends Components.IAvatar, HTMLStencilElement {
    }
    var HTMLIAvatarElement: {
        prototype: HTMLIAvatarElement;
        new (): HTMLIAvatarElement;
    };
    interface HTMLIButtonElement extends Components.IButton, HTMLStencilElement {
    }
    var HTMLIButtonElement: {
        prototype: HTMLIButtonElement;
        new (): HTMLIButtonElement;
    };
    interface HTMLICalendarElementEventMap {
        "dateSelect": string;
    }
    interface HTMLICalendarElement extends Components.ICalendar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLICalendarElementEventMap>(type: K, listener: (this: HTMLICalendarElement, ev: ICalendarCustomEvent<HTMLICalendarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLICalendarElementEventMap>(type: K, listener: (this: HTMLICalendarElement, ev: ICalendarCustomEvent<HTMLICalendarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLICalendarElement: {
        prototype: HTMLICalendarElement;
        new (): HTMLICalendarElement;
    };
    interface HTMLICalendarHeaderElement extends Components.ICalendarHeader, HTMLStencilElement {
    }
    var HTMLICalendarHeaderElement: {
        prototype: HTMLICalendarHeaderElement;
        new (): HTMLICalendarHeaderElement;
    };
    interface HTMLICalendarMonthViewElement extends Components.ICalendarMonthView, HTMLStencilElement {
    }
    var HTMLICalendarMonthViewElement: {
        prototype: HTMLICalendarMonthViewElement;
        new (): HTMLICalendarMonthViewElement;
    };
    interface HTMLICalendarYearViewElement extends Components.ICalendarYearView, HTMLStencilElement {
    }
    var HTMLICalendarYearViewElement: {
        prototype: HTMLICalendarYearViewElement;
        new (): HTMLICalendarYearViewElement;
    };
    interface HTMLIChevronElement extends Components.IChevron, HTMLStencilElement {
    }
    var HTMLIChevronElement: {
        prototype: HTMLIChevronElement;
        new (): HTMLIChevronElement;
    };
    interface HTMLIInputFieldElementEventMap {
        "valueChange": Event;
    }
    interface HTMLIInputFieldElement extends Components.IInputField, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIInputFieldElementEventMap>(type: K, listener: (this: HTMLIInputFieldElement, ev: IInputFieldCustomEvent<HTMLIInputFieldElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIInputFieldElementEventMap>(type: K, listener: (this: HTMLIInputFieldElement, ev: IInputFieldCustomEvent<HTMLIInputFieldElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIInputFieldElement: {
        prototype: HTMLIInputFieldElement;
        new (): HTMLIInputFieldElement;
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
        "i-avatar": HTMLIAvatarElement;
        "i-button": HTMLIButtonElement;
        "i-calendar": HTMLICalendarElement;
        "i-calendar-header": HTMLICalendarHeaderElement;
        "i-calendar-month-view": HTMLICalendarMonthViewElement;
        "i-calendar-year-view": HTMLICalendarYearViewElement;
        "i-chevron": HTMLIChevronElement;
        "i-input-field": HTMLIInputFieldElement;
        "i-spinner": HTMLISpinnerElement;
    }
}
declare namespace LocalJSX {
    interface IAccordion {
        "type"?: 'single' | 'multiple';
    }
    interface IAccordionContent {
    }
    interface IAccordionItem {
        "disabled"?: boolean;
        "itemId"?: string;
    }
    interface IAccordionTrigger {
        "onAccordionTriggerClicked"?: (event: IAccordionTriggerCustomEvent<{ key: string }>) => void;
    }
    interface IAvatar {
        "alt"?: string;
        "classes"?: string;
        "color"?: ColorType | string;
        "lazy"?: boolean;
        "ring"?: boolean;
        "ringColor"?: string;
        "ringOffset"?: string;
        "ringWidth"?: string;
        "shape"?: 'circular' | 'square' | 'rounded-square';
        "size"?: sizeType;
        "src"?: string;
    }
    interface IButton {
        "classes"?: string;
        "color"?: ColorType;
        "disableRipple"?: boolean;
        "disabled"?: boolean;
        "size"?: sizeType;
        "variant"?: 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow';
    }
    interface ICalendar {
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "maxDate"?: string;
        "minDate"?: string;
        /**
          * handles the calendar date selection
         */
        "onDateSelect"?: (event: ICalendarCustomEvent<string>) => void;
        "readOnly"?: boolean;
        "selected"?: string;
    }
    interface ICalendarHeader {
        "calendarHeading"?: Element | string;
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleNext"?: () => void;
        "handlePrev"?: () => void;
        "readOnly"?: boolean;
        "toggleCurrentView"?: () => void;
    }
    interface ICalendarMonthView {
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleDateSelection"?: (date: string) => void;
        "maxDate"?: string;
        "minDate"?: string;
        "monthInView"?: number;
        "readOnly"?: boolean;
        "selected"?: string;
        "yearInView"?: number;
    }
    interface ICalendarYearView {
        "color"?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
        "handleYearSelection"?: (year: number) => void;
        "readOnly"?: boolean;
        "selectedDateComponents"?: DateTypeComponents;
        "yearInView"?: number;
        "yearNavigationRangeValue"?: number;
    }
    interface IChevron {
        "direction"?: 'up' | 'down' | 'left' | 'right';
    }
    interface IInputField {
        "color"?: ColorType;
        "description"?: string;
        "disabled"?: boolean;
        "endContent"?: string | number | Element;
        "errorMessage"?: string;
        "onValueChange"?: (event: IInputFieldCustomEvent<Event>) => void;
        "outlineColor"?: string;
        "outlineWidth"?: string;
        "placeHolderColor"?: string;
        "placeholder"?: string;
        "radius"?: sizeType;
        "startContent"?: string | number | Element;
        "theme"?: Record<string, string>;
        "type"?: 'text' | 'number' | 'email' | 'password' | 'number';
        "valid"?: boolean;
        "value"?: string;
        "variant"?: 'flat' | 'outline';
    }
    interface ISpinner {
        "color"?: ColorType | string;
        "emptyColor"?: string;
        "size"?: sizeType;
        "speed"?: string;
        "thickness"?: string;
    }
    interface IntrinsicElements {
        "i-accordion": IAccordion;
        "i-accordion-content": IAccordionContent;
        "i-accordion-item": IAccordionItem;
        "i-accordion-trigger": IAccordionTrigger;
        "i-avatar": IAvatar;
        "i-button": IButton;
        "i-calendar": ICalendar;
        "i-calendar-header": ICalendarHeader;
        "i-calendar-month-view": ICalendarMonthView;
        "i-calendar-year-view": ICalendarYearView;
        "i-chevron": IChevron;
        "i-input-field": IInputField;
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
            "i-avatar": LocalJSX.IAvatar & JSXBase.HTMLAttributes<HTMLIAvatarElement>;
            "i-button": LocalJSX.IButton & JSXBase.HTMLAttributes<HTMLIButtonElement>;
            "i-calendar": LocalJSX.ICalendar & JSXBase.HTMLAttributes<HTMLICalendarElement>;
            "i-calendar-header": LocalJSX.ICalendarHeader & JSXBase.HTMLAttributes<HTMLICalendarHeaderElement>;
            "i-calendar-month-view": LocalJSX.ICalendarMonthView & JSXBase.HTMLAttributes<HTMLICalendarMonthViewElement>;
            "i-calendar-year-view": LocalJSX.ICalendarYearView & JSXBase.HTMLAttributes<HTMLICalendarYearViewElement>;
            "i-chevron": LocalJSX.IChevron & JSXBase.HTMLAttributes<HTMLIChevronElement>;
            "i-input-field": LocalJSX.IInputField & JSXBase.HTMLAttributes<HTMLIInputFieldElement>;
            "i-spinner": LocalJSX.ISpinner & JSXBase.HTMLAttributes<HTMLISpinnerElement>;
        }
    }
}
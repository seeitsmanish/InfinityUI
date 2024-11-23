import { Component, Element, Event, EventEmitter, h, Prop, State, } from '@stencil/core';
import { ColorType, sizeType } from "../../models";

@Component({
    tag: 'i-input-field',
    styleUrl: 'i-input-field.scss',
    shadow: false,
})
export class IInputField {

    @Prop() value: string = '';
    @Event() valueChange: EventEmitter<string | number>;
    @Prop() type: 'text' | 'number' | 'email' | 'password' = 'text';
    @Prop() placeholder: string = '';
    @Prop() placeHolderColor?: string;
    @Prop() disabled: boolean = false;
    @Prop() outlineColor?: string;
    @Prop() outlineWidth?: string;
    @Prop() valid?: boolean = true;
    @Prop() errorMessage?: string;
    @Prop() description?: string;
    @Prop() color: ColorType = 'default';
    @Prop() variant: 'flat' | 'outline' | 'underline' | 'light' = 'flat';
    @Prop() radius: sizeType = 'lg';
    @Prop() startContent?: string | number | JSX.Element | HTMLElement;
    @Prop() endContent?: string | number | JSX.Element | HTMLElement;
    @Prop() theme?: Record<string, string>;

    @Element() el: HTMLElement;
    private inputRef: HTMLInputElement;
    @State() isFocussed: boolean = false;

    handleValueChange = (e: any) => {
        this.valueChange.emit(e.target.value);
    }

    injectThemeClasses = (classes: Record<string, string[]>): Record<string, string[]> => {
        const objectWithThemeClasses = {
            ...classes
        };
        Object.keys(classes).forEach(key => {
            if (this.theme?.[key]) {
                objectWithThemeClasses[key] = [...objectWithThemeClasses[key], this.theme[key]];
            }
        })
        return objectWithThemeClasses;
    }

    constructInputClasses = () => {
        const baseClasses = {
            'i-input-field-root': [
                'i-input-field-root',
                `i-input-field-root--${this.color}`,
                `i-input-field-root-radius--${this.radius}`,
                this.isFocussed && 'i-input-field-root-focussed'
            ],
            'i-input-field-start-content': [
                'i-input-field-start-content',
                `i-input-field-start-content--${this.color}`
            ],
            'i-input-field-end-content': [
                'i-input-field-end-content',
                `i-input-field-start-content--${this.color}`
            ],
            'i-input-field-input': ['i-input-field-input'],
        };

        const classesWithTheme = this.injectThemeClasses(baseClasses);

        const finalClasses: Record<string, string> = {};
        Object.keys(classesWithTheme).forEach((key) => {
            finalClasses[key] = classesWithTheme[key].join(' ');
        });

        return finalClasses;
    }

    render() {
        const classes = this.constructInputClasses();


        return (
            <div
                tabindex="0"
                class={classes['i-input-field-root']}
                onFocus={() => {
                    this.isFocussed = true;
                    this.inputRef.focus();
                }}
                onBlur={() => {
                    this.isFocussed = false;
                    this.inputRef.blur();
                }}
            >
                {
                    this.startContent && (
                        <div class={classes['i-input-field-start-content']}>
                            {this.startContent}
                            <slot name="start-content" />
                        </div>
                    )
                }
                <input
                    ref={(el) => this.inputRef = el as HTMLInputElement}
                    class={classes['i-input-field-input']}
                    placeholder={this.placeholder}
                />
                {
                    this.endContent && (
                        <div class={classes['i-input-field-end-content']}>
                            {this.endContent}
                            <slot name="end-content" />
                        </div>
                    )
                }
            </div>
        )
    }

}
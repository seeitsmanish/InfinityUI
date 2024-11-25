import { Component, Event, EventEmitter, Fragment, h, Prop, State, } from '@stencil/core';
import { ColorType, sizeType } from "../../models";

@Component({
    tag: 'i-input-field',
    styleUrl: 'i-input-field.scss',
    shadow: false,
})
export class IInputField {

    @Prop() value: string = '';
    @Event() valueChange: EventEmitter<Event>;
    @Prop() type: 'text' | 'number' | 'email' | 'password' | 'number' = 'text';
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

    @State() isFocussed: boolean = false;

    handleValueChange = (e: Event) => {
        this.valueChange.emit(e);
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
            'i-input-field-label': ['i-input-field-label'],
            'i-input-field-error-message': ['i-input-field-error-message']
        };

        // if focussed, add focus class
        if (this.isFocussed) {
            baseClasses['i-input-field-root'] = [...baseClasses['i-input-field-root'], 'i-input-field-root--focussed']
        }

        // if disabled
        if (this.disabled) {
            baseClasses['i-input-field-root'] = [...baseClasses['i-input-field-root'], `i-input-field-root--${this.color}--disabled`]
            baseClasses['i-input-field-input'] = [...baseClasses['i-input-field-input'], 'i-input-field-input--disabled']
        }

        if (!this.valid) {
            baseClasses['i-input-field-root'] = [...baseClasses['i-input-field-root'], 'i-input-field-root--invalid'];
        }


        const classesWithTheme = this.injectThemeClasses(baseClasses);

        const finalClasses: Record<string, string> = {};
        Object.keys(classesWithTheme).forEach((key) => {
            finalClasses[key] = classesWithTheme[key].join(' ');
        });

        return finalClasses;
    }

    render() {
        const classes = this.constructInputClasses();
        const styles = {

            ...(this.outlineColor && { outlineColor: this.outlineColor }),
            ...(this.outlineWidth && { outlineWidth: this.outlineWidth })
        }
        return (
            <Fragment>

                <div
                    class={classes['i-input-field-root']}
                    style={styles}
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
                        type={this.type}
                        disabled={this.disabled}
                        onFocus={() => this.isFocussed = true}
                        onBlur={() => this.isFocussed = false}
                        class={classes['i-input-field-input']}
                        placeholder={this.placeholder}
                        onChange={(e) => {
                            if (this.disabled) return;
                            this.handleValueChange(e);
                        }}
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
                {
                    (!this.valid && this.errorMessage) && (<span class={classes['i-input-field-error-message']} >
                        {this.errorMessage}
                    </span>)
                }
            </Fragment>
        )
    }

}
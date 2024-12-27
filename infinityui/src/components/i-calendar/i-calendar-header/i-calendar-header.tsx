import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'i-calendar-header',
    styleUrl: 'i-calendar-header.scss',
    shadow: false,
})

export class ICalendarHeader {

    @Prop() calendarHeading?: Element | string;
    @Prop() handlePrev?: () => void;
    @Prop() handleNext?: () => void;
    @Prop() readOnly: boolean;
    @Prop() toggleCurrentView: () => void;
    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';


    render() {
        return (
            <div class='calendar-header'>
                <i-button disableRipple classes='calendar-header-nav-button calendar-button-variant' onClick={() => {
                    if (this.readOnly) return;
                    this.handlePrev?.();
                }}>
                    <i-chevron direction="left"></i-chevron>
                </i-button>
                <i-button
                    classes='calendar-header-info calendar-button-variant'
                    onClick={() => {
                        if (this.readOnly) return;
                        this.toggleCurrentView();
                    }}
                    variant="light"
                    color={this.color}
                >
                    {this.calendarHeading}
                </i-button>
                <i-button disableRipple classes='calendar-header-nav-button' onClick={() => {
                    if (this.readOnly) return;
                    this.handleNext?.();
                }}>
                    <i-chevron direction="right"></i-chevron>
                </i-button>
            </div>
        )
    }
}
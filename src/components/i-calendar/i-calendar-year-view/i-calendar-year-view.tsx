import { Component, h, Prop } from '@stencil/core';
import { getYearRange } from '../utils';
import { DateTypeComponents } from '../models';

@Component({
    tag: 'i-calendar-year-view',
    styleUrl: 'i-calendar-year-view.scss',
    shadow: false,
})
export class ICalendarYearView {

    @Prop() yearInView: number;
    @Prop() handleYearSelection: (year: number) => void;
    @Prop() readOnly: boolean;
    @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
    @Prop() selectedDateComponents: DateTypeComponents;
    @Prop() yearNavigationRangeValue: number;


    getButtonClassNames = (year: number): string => {
        const classes = ['year-button', 'calendar-button-variant'];
        if (this.yearInView === year) {
            classes.push('selected-button');
        }
        return classes.join(' ');
    }

    render() {
        const yearRange = getYearRange(this.yearNavigationRangeValue);
        return (
            <div class='year-body'>
                {yearRange.map((year) => {
                    return (
                        <i-button
                            classes={this.getButtonClassNames(year)}
                            color={this.color}
                            variant='light'
                            onClick={() => {
                                if (this.readOnly) return;
                                this.handleYearSelection(year);
                            }}
                        >
                            {year}
                        </i-button>
                    )
                })}
            </div>
        )
    }

}
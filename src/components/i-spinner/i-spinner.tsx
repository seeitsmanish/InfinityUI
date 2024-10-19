import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'i-spinner',
  styleUrl: 'i-spinner.scss',
  shadow: true,
})
export class ISpinner {
  @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | string = 'default';
  @Prop() thickness: string = '3px';
  @Prop() emptyColor: string = 'transparent';
  @Prop() speed: string = '0.6s';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';

  render() {
    return (
      <svg class={`spinner-svg ${this.size}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Empty stroke circle */}
        <circle cx="32" cy="32" r="26" stroke={this.emptyColor} stroke-width={this.thickness} />
        {/* Filled stroke circle */}
        <circle
          class={`circle-spinner ${this.color}`}
          cx="32"
          cy="32"
          r="26"
          stroke={this.color}
          stroke-width={this.thickness}
          style={{
            animation: `spin ${this.speed} linear infinite`,
          }}
        />
      </svg>
    );
  }
}

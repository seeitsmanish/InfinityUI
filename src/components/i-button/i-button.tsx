import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'i-button',
  styleUrl: 'i-button.scss',
  shadow: false,
})
export class IButton {
  @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
  @Prop() variant: 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow' = 'solid';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop() disabled: boolean = false;
  @Prop() disableRipple: boolean = false;
  @Prop() classes: string = '';

  createRipples = (e: MouseEvent) => {
    if (this.disableRipple) return;
    const btn = e.currentTarget as HTMLElement;
    const { pageX, pageY } = e;
    const { offsetTop, offsetLeft, clientWidth, clientHeight } = btn;
    const btnTextColor = window.getComputedStyle(btn).color;
    const diameter = Math.max(clientWidth, clientHeight);
    const circle = document.createElement('span');

    Object.assign(circle.style, {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${pageX - offsetLeft - diameter / 2}px`,
      top: `${pageY - offsetTop - diameter / 2}px`,
      transform: 'scale(0)',
      backgroundColor: btnTextColor,
      opacity: '0.5',
      position: 'absolute',
      borderRadius: '50%',
    });

    circle.className = 'absolute  ripple';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 700);
  };

  render() {
    const buttonClass = `btn ${this.color} ${this.variant} ${this.size} ${this.classes}`;

    return (
      <button class={buttonClass} onClick={e => this.createRipples(e)} disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}

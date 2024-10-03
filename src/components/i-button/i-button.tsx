import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'i-button',
  styleUrl: 'i-button.scss',
  shadow: true,
})
export class IButton {
  @Prop() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
  @Prop() variant: 'solid' | 'outline' | 'light' | 'flat' | 'ghost' | 'shadow' = 'solid';

  createRipples = (e: MouseEvent) => {
    const btn = e.currentTarget as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const btnTextColor = window.getComputedStyle(btn).color;

    // Calculate click position relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const circle = document.createElement('span');

    Object.assign(circle.style, {
      width: `${diameter}px`,
      height: `${diameter}px`,
      left: `${x - radius}px`,
      top: `${y - radius}px`,
      transform: 'scale(0)',
      backgroundColor: btnTextColor,
      opacity: '0.5',
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      transition: 'transform 0.5s, opacity 0.5s',
    });

    circle.className = 'ripple';
    btn.appendChild(circle);

    // Trigger ripple animation
    requestAnimationFrame(() => {
      circle.style.transform = 'scale(2)';
      circle.style.opacity = '0';
    });

    setTimeout(() => circle.remove(), 500);
  };

  render() {
    const buttonClass = `btn ${this.color} ${this.variant}`;

    return (
      <button onClick={this.createRipples} class={buttonClass}>
        <slot></slot>
      </button>
    );
  }
}

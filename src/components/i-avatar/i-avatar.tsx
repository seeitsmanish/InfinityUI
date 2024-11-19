import { Component, Element, h, Prop, State } from "@stencil/core";
import { ColorType, sizeType } from "../../models";

@Component({
    tag: 'i-avatar',
    styleUrl: 'i-avatar.scss',
    shadow: false,
})

export class IAvatar {

    @Prop() src: string = ''; // Image source
    @Prop() alt: string = 'avatar image'; // Alt text for the image
    @Prop() lazy?: boolean = true; // Lazy loading for the image

    @Prop() color?: ColorType | string = 'default';
    @Prop() size: sizeType = 'sm'; // Size of the avatar
    @Prop() shape: 'circular' | 'square' | 'rounded-square' = 'circular'; // Shape of the avatar

    @Prop() ring?: boolean = false; // Whether the avatar has a ring
    @Prop() ringColor?: string; // Color of the ring
    @Prop() ringWidth?: string = "2px"; // Width of the ring
    @Prop() ringOffset?: string = "2px"; // offset of the ring

    @Prop() classes: string = ''; // Custom classes for styling

    @Element() el: HTMLElement;
    @State() isAvatarVisible: boolean = false;
    componentDidLoad() {
        const observer = new IntersectionObserver((entries) => {
            const avatarElement = entries[0];
            if (avatarElement.isIntersecting) {
                this.isAvatarVisible = true;
                observer.disconnect();
            }
        })
        observer.observe(this.el);
    }

    getInitials(str: string): string {
        const words = str.trim().split(' ');
        return words.map(word => word[0]).join('').toUpperCase();
    }

    render() {
        console.log(this.isAvatarVisible);
        const initials = this.getInitials(this.alt);
        const avatarClassName = `i-avatar-root ${this.size} ${this.shape} ${this.color} ${this.classes}`
        const ringStyles = this.ring ? { outlineColor: this.ringColor, outlineWidth: this.ringWidth, outlineStyle: "solid", outlineOffset: this.ringOffset } : {};
        const customColorStyles = { backgroundColor: this.color };
        return (
            <div tabindex='0' class={avatarClassName}
                style={{ ...customColorStyles, ...ringStyles }}
                data-color={this.color}
            >
                {
                    this.isAvatarVisible ?
                        <img class='i-avatar-image' loading='lazy' src={this.src} alt={this.alt} onError={() => this.isAvatarVisible = false} />
                        :
                        <span class='i-avatar-initials'>{initials}</span>
                }
            </div>
        )
    }
}
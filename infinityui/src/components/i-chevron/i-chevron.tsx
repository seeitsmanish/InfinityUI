import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'i-chevron',
    styleUrl: 'i-chevron.scss',
    shadow: false,
})
export class IChevron {

    // By default, chevron points down, following anti-clockwise direction
    @Prop() direction: 'up' | 'down' | 'left' | 'right' = 'up';

    render() {
        return (
            <div class={`chevron-root ${this.direction}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                </svg>
            </div>
        );
    }
}

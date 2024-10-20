import { Component, h, Host, Prop, State } from '@stencil/core';

export interface AccordionState {
  isActive: boolean;
  toggleAccordion: () => void;
}

@Component({
  tag: 'i-accordion-item',
  styleUrl: 'i-accordion-item.scss',
  shadow: false,
})
export class IAccordionItem {
  @State() isActive: boolean = false;
  render() {
    return (
      <Host
        onClick={() => {
          this.isActive = !this.isActive;
        }}
        class={`accordion-item-root ${this.isActive ? 'active-accordion-item' : ''}`}
      >
        <slot></slot>
      </Host>
    );
  }
}

// simplest implementation:-
{
  /* <i-accordion>
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    

</i-accordion> */
}

// implementation with selection:-

{
  /* <i-accordion
    selection='single'
>

    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>

</i-accordion>  */
}

// implementation with default open:-

{
  /* <i-accordion
    default-keys={['1', '2','3']}
>
    <i-accordion-item
        item-key='1'
    >
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item
        item-key='2'
    >
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item
        item-key='3'
    >
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>

</i-accordion>  */
}

// similarly controlled with selection:-
{
  /* <i-accordion
    value={['1', '2','3']}
    onChange={(newValue) => console.log(newValue)}
>
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
    
    <i-accordion-item>
        <i-accordion-trigger>
            <i-button>How to use infinityui?</i-button>
        </i-accordion-trigger>
        <i-i-accordion-content>
            <p>Click on the button and you are good to go.</p>
        </i-i-accordion-content>
    </i-accordion-item>
</i-accordion> */
}

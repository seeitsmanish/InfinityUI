import { Component, Element, h, Listen, Prop } from '@stencil/core';

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
  @Prop() key: string;

  @Element() el: HTMLElement;

  @Listen('clicked')
  handleClicked() {
    const accordioncontent = this.el.querySelector('i-accordion-content');
    if (accordioncontent) {
      accordioncontent.classList.toggle('i-accordion-content-root-active');
    }
    const accordiontriggerChevron = this.el.querySelector('.accordion-trigger-chevron');
    if (accordiontriggerChevron) {
      accordiontriggerChevron.classList.toggle('accordion-trigger-chevron-rotated');
    }
  }

  render() {
    return (
      <div class={'accordion-item-root'} id={this.key} data-key={this.key}>
        <slot></slot>
      </div>
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

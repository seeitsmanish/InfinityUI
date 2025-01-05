import { IAccordion, IAccordionContent, IAccordionItem, IAccordionTrigger, IButton, ICalendar, IChevron, IInputField, ISpinner } from 'infinityui-react'

function App() {

  return (
    <div
      style={{
        width: '100vw',
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >

      <IButton color='primary'>
        Manish Sharma
      </IButton>


      <IButton color='secondary'>
        Manish Sharma
      </IButton>


      <IButton color='success'>
        Manish Sharma
      </IButton>



      <IButton color='warning'>
        Manish Sharma
      </IButton>


      <IButton color='danger'>
        Manish Sharma
      </IButton>


      <ISpinner color='primary' />


      <IAccordion type='multiple'>
        <IAccordionItem>
          <IAccordionTrigger>Accordion 1</IAccordionTrigger>
          <IAccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ullam.</IAccordionContent>
        </IAccordionItem>
        <IAccordionItem>
          <IAccordionTrigger>Accordion 1</IAccordionTrigger>
          <IAccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ullam.</IAccordionContent>
        </IAccordionItem>
        <IAccordionItem>
          <IAccordionTrigger>Accordion 1</IAccordionTrigger>
          <IAccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ullam.</IAccordionContent>
        </IAccordionItem>
        <IAccordionItem>
          <IAccordionTrigger>Accordion 1</IAccordionTrigger>
          <IAccordionContent>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, ullam.</IAccordionContent>
        </IAccordionItem>
      </IAccordion>


      <IChevron />

      <IInputField color='default' valid={false} errorMessage={"Please enter something"} />


    </div>
  )
}

export default App

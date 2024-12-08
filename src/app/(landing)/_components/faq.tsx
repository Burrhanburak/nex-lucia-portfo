import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqPage() {
  return (
    <div className="page_sectionContainer__78UYS">
      <div className="page_sectionTitle__1jZEM">
        <div className="SectionTitle_container__qvIRZ SectionTitle_center__tGgzU">
          <h3>FAQs</h3>
          <p>You’ve got questions. We’ve got answers</p>
        </div>
      </div>
      <div className="page_faqWrapper__HA_Po">
        <div className="styles_wrapper__G6caj">
          <div className="styles_accordion__n2DiM">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components&apos;
                  aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

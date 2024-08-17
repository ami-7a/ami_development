export default class Accordion {
  constructor() {
    this.init();
  }

  public init = () => {
    document.querySelectorAll(".js-accordionTrigger").forEach((accordionTrigger) => {
      accordionTrigger.addEventListener("click", this.toggleAccordion);
    });
  };

  private toggleAccordion = (event: Event) => {
    const accordionTrigger = event.currentTarget as HTMLElement;
    const accordionContents = accordionTrigger.nextElementSibling as HTMLElement;

    accordionTrigger.classList.toggle("is-active");
    accordionContents.classList.toggle("is-show");
  };
}

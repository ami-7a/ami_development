import anime from "animejs";
import EventName from "@//conf/eventName";
import Accordion from "@//module/accordion";
import Carousel from "@//module/carousel";
import ImgAnimation from "@//module/imgAnimation";
import Menu from "@//module/menu";
import Modal from "@//module/modal";
import Top from "@//pages/top";
import Base from "@//utils/Base";
import { AddClass, RemoveClass } from "@//utils/class";
import { SmoothScroll } from "@//utils/scroll";

class AppClass {
  private _top: HTMLElement | null;
  private _a: HTMLCollectionOf;
  private _header: HTMLElement | null;
  constructor() {
    // class変数
    this._top = Base._d.getElementById("data-top");
    this._a = Base._d.getElementsByTagName("a");
    this._header = Base._d.getElementById("data-header");
    this.init();
  }
  public init = () => {
    // 以下共通で追加するEVENT
    if (this._top) {
      new Top();
    }
    new ImgAnimation();
    new Menu();
    new Modal();
    new Accordion();
    new Carousel();

    this.addEvent();
  };
  private addEvent = () => {
    // 以下共通で追加するEVENT
    Array.prototype.forEach.call(this._a, (el: HTMLAnchorElement) => {
      const target = el.getAttribute("href");
      if (target?.match(/^#/)) {
        el.addEventListener(EventName.CLICK, SmoothScroll);
      }
    });
  };

  private removeEvent = () => {
    // 以下共通で削除するEVENT
    Array.prototype.forEach.call(this._a, (el: HTMLAnchorElement) => {
      const target = el.getAttribute("href");
      if (target?.match(/^#/)) {
        el.removeEventListener(EventName.CLICK, SmoothScroll);
      }
    });
  };

  public showModal = () => {
    const modal: HTMLElement = Base._d.getElementById("js-modal") as HTMLElement;
    AddClass(modal, "is-open");
    anime({
      targets: modal,
      opacity: 1,
      duration: 500,
      easing: "easeOutQuad",
      complete: () => {
        AddClass(modal, "is-anim");
        modal.addEventListener(EventName.CLICK, this.hideModal);
        const modalClose: HTMLElement = Base._d.getElementById("js-modal-close") as HTMLElement;
        modalClose.addEventListener(EventName.CLICK, this.hideModal);
      },
    });
  };
  public hideModal = (e: Event) => {
    const $target: HTMLElement = e.target as HTMLElement;
    if ($target.id.toLowerCase() !== "js-modal" && $target.id.toLowerCase() !== "js-modalclose") {
      // 処理
      return;
    }

    const modal: HTMLElement = Base._d.getElementById("js-modal") as HTMLElement;
    anime({
      targets: modal,
      opacity: 0,
      duration: 200,
      easing: "easeInQuad",
      complete: () => {
        RemoveClass(modal, "is-anim");
        RemoveClass(modal, "is-open");
        modal.removeEventListener(EventName.CLICK, this.hideModal);
        const modalClose: HTMLElement = Base._d.getElementById("js-modal-close") as HTMLElement;
        modalClose.removeEventListener(EventName.CLICK, this.hideModal);
      },
    });
  };
}
window.onload = () => {
  new AppClass();
};

import Base from "@//utils/base";

export default class Modal {
  public _modal: HTMLElement | null;
  private _modalBtn: NodeListOf<HTMLButtonElement> | null;
  private _modalBg: HTMLElement | null;
  constructor() {
    // class変数
    this._modal = Base._d.getElementById("modal");
    this._modalBtn = Base._d.querySelectorAll(".button");
    this._modalBg = Base._d.querySelector(".modal_bg");
    this.init();
  }

  public init = () => {
    // console.log(this._modal);

    // ボタンがクリックされた時
    this._modalBtn?.forEach((element) => {
      // const test : string = string(element.className);
      element.addEventListener("click", this.modalOpen);
    });
    // 背景がクリックされた時
    this._modalBg?.addEventListener("click", this.modalClose);
  };

  public modalOpen = (event: Event) => {
    const modalId: string | null | undefined = (event.target as HTMLElement).getAttribute("data-id");

    if (!(modalId === undefined || modalId === null)) {
      switch (modalId) {
        case "1":
          this._modal?.classList.add("-error");
          this._modal?.classList.add("is-show");
          break;

        case "2":
          this._modal?.classList.add("-check");
          this._modal?.classList.add("is-show");
          break;
        default:
          console.log("モーダルがありません");
          break;
      }
    }
  };

  public modalClose = () => {
    this._modal?.classList.remove("is-show");
    this._modal?.removeAttribute("class");
    this._modal?.classList.add("modal");
  };
}

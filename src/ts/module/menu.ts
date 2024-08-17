import ClassName from "@//conf/className";
import EventName from "@//conf/eventName";
import Base from "@//utils/base";

export default class Menu {
  private _header: HTMLElement;
  private _menuBtn: HTMLElement;
  private _bodyEle: HTMLElement;
  private _scrollThreshold: number;
  private _isSpDevice: boolean;

  constructor() {
    this._header = Base._d.getElementById("js-header") as HTMLElement;
    this._menuBtn = Base._d.getElementById("js-menu") as HTMLElement;
    this._bodyEle = document.body;
    this._isSpDevice = window.innerWidth <= 800;
    this._scrollThreshold = this._isSpDevice ? 300 : 120;

    this.init();
  }

  public init = () => {
    // メニューボタンのクリックイベントを追加
    if (this._menuBtn) {
      this._menuBtn.addEventListener(EventName.CLICK, this.toggleMenu);
    }

    // スクロール時のヘッダーの背景色設定を監視
    Base._w.addEventListener("scroll", this.changeHeaderBackground);
    this.changeHeaderBackground();
  };

  private toggleMenu = () => {
    // メニューのトグル処理
    if (this._header) {
      this._header.classList.toggle(ClassName.OPEN);
      this._bodyEle.style.overflow = this._header.classList.contains(ClassName.OPEN) ? "hidden" : "scroll";
    }
  };

  private changeHeaderBackground = () => {
    // スクロール位置に応じてヘッダーの透過設定を更新
    const scrollY: number = window.scrollY || window.pageYOffset;
    if (this._header) {
      this._header.classList.toggle("is-scrolled", scrollY >= this._scrollThreshold);
    }
  };
}

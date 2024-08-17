import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";
import Swiper from "swiper";
import EventName from "@//conf/EventName";
import Base from "@//utils/base";
import { AddClass, RemoveClass } from "@//utils/class";

export default class Top {
  private _a: HTMLCollectionOf<HTMLAnchorElement>;
  private _top: HTMLElement;
  private _slider: HTMLElement;
  private _swiper: Swiper;
  private _map: HTMLElement;
  constructor() {
    // class変数
    this._a = Base._d.getElementsByTagName("a");
    this._top = Base._d.getElementById("data-top") as HTMLElement;
    this._slider = Base._d.getElementById("data-slider") as HTMLElement;
    this._map = Base._d.getElementById("data-map") as HTMLElement;

    this.init();
  }
  public init = () => {
    // 以下共通で追加するEVENT
    this._swiper = new Swiper(this._slider as HTMLElement, {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      autoplay: 8000,
      speed: 800,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });
    Base._w.addEventListener(EventName.RESIZE, this.checkRatio);
    this.checkRatio();
    this.initMap();
  };
  public initMap = () => {
    const options: LoaderOptions = {
      apiKey: "AIzaSyCR7AqDICRDHottldSGX-4_QIVMZqbuSV0&sensor=false",
      version: "weekly",
    };
    const loader = new Loader(options);
    loader
      .load()
      .then(() => {
        const mapOptions = {
          center: {
            lat: 35.878272,
            lng: 138.297147,
          },
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true,
          zoomControl: true,
        };
        const gmap = new google.maps.Map(this._map as HTMLElement, mapOptions);

        const myLatLng = new google.maps.LatLng(35.887452, 138.282106);
        new google.maps.Marker({
          position: myLatLng,
          map: gmap,
        });
      })
      .catch(() => {
        // do something
      });
  };
  public checkRatio = () => {
    const ww: number = Base._w.innerWidth;
    const wh: number = Base._w.innerHeight;
    const image: HTMLElement | null = this._slider ? this._slider.querySelector(".swiper-slide img") : null;
    const iw: number = image ? image.clientWidth : 0;
    const ih: number = image ? image.clientHeight : 0;
    if (ww / wh > iw / ih) {
      AddClass(this._top, "is-beside");
      RemoveClass(this._top, "is-vertical");
    } else {
      RemoveClass(this._top, "is-beside");
      AddClass(this._top, "is-vertical");
    }
  };
}

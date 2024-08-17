import { AddClass } from "@//utils/class";
import { Serialize } from "@//utils/string";

type Callback = (status: string, res?: object) => void;
export default class Base {
  public static speed = 500;
  public static _w: Window = window;
  public static _d: HTMLDocument = document;
  public static _b: HTMLBodyElement = document.getElementsByTagName("body")[0];
  public static rclass: RegExp = /[\t\r\n\f]/g;
  public static ua: string = navigator.userAgent.toLowerCase();
  public static checkIOS: number = 9;
  public static checkANDROID: number = 5;
  public static checkMS: number = 11;

  public static callApi(method: string, url: string, data, callback: Callback): void {
    const req = new XMLHttpRequest();
    req.open(method, url, true);
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        if (req.response) {
          const jsonObj = req.response;
          callback("success", jsonObj);
        } else {
          callback("error");
        }
      }
    };
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    req.responseType = "json";
    req.send(Serialize(data));
  }

  // public static sampleEvent(): void {
  //   const sampleCallback = (status: string, res) => {
  //     alert(res.status);
  //   };
  //   this.callApi("GET", "url", null, sampleCallback);
  // }

  public static verCheck(): void {
    // iOSのバージョン判断
    function ios_ver() {
      if (Base.ua.indexOf("iphone") > 0) {
        Base.ua.match(/iphone os (\w+) {1,3}/g);
        const ver: string[] = RegExp.$1.split(/_/);
        ver.splice(1, 0, ".");
        ver.push("0");
        return parseFloat(ver.join(""));
      }
    }
    // Androidのバージョン判断
    function and_ver() {
      if (Base.ua.indexOf("android") > 0) {
        return parseFloat(Base.ua.slice(Base.ua.indexOf("android") + 8));
      }
    }
    if (Number(ios_ver()) < this.checkIOS || Number(and_ver()) < this.checkANDROID) {
      // $('.old_browser').show();
    }

    function is_ms() {
      // IEの判定
      const isIE = Base.ua.indexOf("msie") >= 0 || Base.ua.indexOf("trident") >= 0;
      // IEのバージョンを取得
      if (isIE) {
        // 正規表現によりUA文字列を配列に分割
        const arr = /(msie|rv:?)\s?([\d.]+)/.exec(Base.ua);
        return arr ? arr[2] : "";
      } else {
        if (Base.ua.indexOf("edge") !== -1) {
          /* Edge. */
          Base.ua.match(/edge\/([0-9.]+)/g);
          const ver = RegExp.$1.split(/\//);
          // return 'edge';

          return parseFloat(ver.join(""));
        } else {
          return false;
        }
      }
    }
    if (is_ms()) {
      console.log("MS");
      AddClass(this._b, "is-ms");
    }
    is_ms();
    if (is_ms() < this.checkMS) {
      // return is_ms();
    }
  }
}

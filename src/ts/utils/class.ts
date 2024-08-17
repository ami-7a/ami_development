import Base from "@//utils/base";

/**
 *  クラス名追加
 *  @param tgt HTMLElement
 *  @param name クラス名
 */
export const AddClass = (tgt: HTMLElement, name: string) => {
  if (!tgt) {
    return false;
  }
  const src = " " + tgt.className.replace(Base.rclass, " ") + " ";
  if (src.indexOf(" " + name + " ") >= 0) {
    return false;
  }
  tgt.className += " " + name;

  return true;
};

/**
 *  クラス名削除
 *  @param tgt HTMLElement
 *  @param name クラス名
 */
export const RemoveClass = (tgt: HTMLElement, name: string) => {
  if (!tgt) {
    return false;
  }
  const src = " " + tgt.className.replace(Base.rclass, " ") + " ";
  const dst = src.replace(" " + name + " ", " ");
  tgt.className = dst.replace(/^\s+/, "").replace(/\s+$/, "");
  return src !== dst;
};

/**
 *  クラス名有無チェック
 *  @param tgt HTMLElement
 *  @param name クラス名
 */
export const HasClass = (tgt: HTMLElement, name: string) => {
  if (!tgt) {
    return false;
  }
  const className = " " + name + " ";
  if ((" " + tgt.className + " ").replace(Base.rclass, " ").indexOf(className) >= 0) {
    return true;
  }
  return false;
};

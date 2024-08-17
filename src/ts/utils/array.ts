/**
 *  index番号取得
 *  @param el HTMLElement
 *  @param elms NodeListOf<HTMLElement>
 */
export const Index = (el: HTMLElement, elms: NodeListOf<HTMLElement>) => {
  if (!el || !elms) {
    return 0;
  }
  let num;
  for (let i = 0; i < elms.length; i++) {
    if (el === elms[i]) {
      num = i;
      break;
    }
  }
  return num;
};

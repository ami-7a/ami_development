/**
 *  index番号取得
 *  @param rgb string[]
 */
export const Rgb2hex = (rgb: string[]) => {
  return (
    "#" +
    rgb
      .map((value: string) => {
        return "0" + Number(value).toString(16).slice(-2);
      })
      .join("")
  );
};

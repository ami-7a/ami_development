import Base from "@//utils/base";

/**
 *  htmlエスケープ
 *  @param str string
 */
export const EscapeHTML = (str: string) => {
  let result = "";
  result = str.replace("&", "&amp;");
  result = str.replace("'", "&#x27;");
  result = str.replace("`", "&#x60;");
  result = str.replace('"', "&quot;");
  result = str.replace("<", "&lt;");
  result = str.replace(">", "&gt;");
  result = str.replace(/\n/, "<br>");

  return result;
};

/**
 *  serialize
 *  @param data object
 */
export const Serialize = (data: object) => {
  let key: string;
  let value: string;
  let type: string;
  let i: number;
  let max: number;
  const encode = window.encodeURIComponent;
  let query: string = "?";

  for (key of Object.keys(data)) {
    value = data[key];
    type = typeof value === "object" && value instanceof Array ? "array" : typeof value;
    switch (type) {
      case "undefined":
        // キーのみ
        query += key;
        break;
      case "array":
        // 配列
        for (i = 0, max = value.length; i < max; i++) {
          query += key + "[]";
          query += "=";
          query += encode(value[i]);
          query += "&";
        }
        query = query.substr(0, query.length - 1);
        break;
      case "object":
        // ハッシュ
        for (i of Object.keys(value)) {
          query += key + "[" + i + "]";
          query += "=";
          query += encode(value[i]);
          query += "&";
        }
        query = query.substr(0, query.length - 1);
        break;
      default:
        query += key;
        query += "=";
        query += encode(value);
        break;
    }
    query += "&";
  }
  query = query.substr(0, query.length - 1);
  return query;
};

/**
 *  クエリ文字列を変換
 */
export const GetUrlVars = () => {
  const vars: object = {};
  const url = Base._w.location.search;
  // ?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
  const hash: string[] = url.slice(1).split("&");
  const max: number = hash.length;
  for (let i = 0; i < max; i++) {
    const array: string[] = hash[i].split("="); // keyと値に分割。
    // vars.push(array[0]);    // 末尾にクエリ文字列のkeyを挿入。
    if (array[0] !== "") {
      vars[array[0]] = array[1]; // keyに、値を代入。
    }
  }
  return vars;
};

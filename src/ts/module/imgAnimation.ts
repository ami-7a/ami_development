// ImgAnimation.ts
// 画像が画面内に入ったときに画像表示のアニメーションを発火させる

export default class ImgAnimation {
  constructor() {
    this.observeImages();
  }

  private observeImages = () => {
    const images = document.querySelectorAll(".c-image__wrap");

    if ("IntersectionObserver" in window) {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // 要素の10％がビューポート内に入ったときにコールバックを実行
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 要素が画面内に入ったとき
            entry.target.classList.add("is-image-view");
            observer.unobserve(entry.target); // 一度クラスを追加したら監視を解除
          }
        });
      }, observerOptions);

      images.forEach((image) => {
        observer.observe(image);
      });
    } else {
      // Intersection Observer APIがサポートされていない場合のフォールバック処理
      images.forEach((image) => {
        image.classList.add("is-image-view"); // サポートされていない場合、クラスを即時追加
      });
    }
  };
}

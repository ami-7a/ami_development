import Base from "@//utils/base";

/**
 *  スムーススクロール
 *  @param e Event
 */
export const SmoothScroll = (e: Event) => {
  const target: HTMLElement = e.target as HTMLElement;
  const href: string = target.getAttribute("href") as string;
  ScrollWindow(href, { duration: Base.speed * 2 });
  e.preventDefault();
};

/**
 *  windowスクロール
 *  @param target string
 *  @param options Option
 */

interface Option {
  duration?: number;
  offset?: number;
  callback?: number;
  easing?: number;
}
export const ScrollWindow = (target: string, options: Option) => {
  const start = Base._w.pageYOffset;
  const opt = {
    duration: options.duration || 500,
    offset: options.offset || 0,
    callback: options.callback,
    easing: options.easing || easeInOutQuad,
  };
  const distance =
    typeof target === "string"
      ? target === "#"
        ? start * -1
        : opt.offset + Number(Base._d.querySelector(target)?.getBoundingClientRect().top)
      : target;
  const duration = typeof opt.duration === "function" ? opt.duration(distance) : opt.duration;
  let timeStart: number;
  let timeElapsed: number;

  requestAnimationFrame((time) => {
    timeStart = time;
    loop(time);
  });
  function loop(time: number) {
    timeElapsed = time - timeStart;
    Base._w.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));
    if (timeElapsed < duration) {
      requestAnimationFrame(loop);
    } else {
      end();
    }
  }

  function end() {
    Base._w.scrollTo(0, start + distance);
    if (typeof opt.callback === "function") {
      opt.callback();
    }
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
};

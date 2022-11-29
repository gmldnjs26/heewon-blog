const IODefaultOptions = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: '-50% 0px -50% 0px', // ビューポートの中心を判定基準にする
  threshold: 0, // 閾値は0
};

type DoWhenIntersectFunction = (entries: IntersectionObserverEntry[]) => void;

export const useIntersectionObserver = (options = IODefaultOptions) => {
  // スクロールするとtargetsの中にある要素がviewport内に交差している際のイベントを調整
  let observer: IntersectionObserver;

  const addIntersectHandler = (
    targets: Element[] | NodeList,
    doWhenIntersect: DoWhenIntersectFunction,
  ) => {
    observer = new IntersectionObserver(doWhenIntersect, options);
    targets.forEach((el) => {
      observer.observe(el);
    });
  };

  const removeIntersectHandler = () => {
    observer.disconnect();
  };

  return {
    addIntersectHandler,
    removeIntersectHandler,
  };
};

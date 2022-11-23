export const useScroll = () => {
  const smoothScroll = (target: string, fromTargetDistance = 0) => {
    // Formがレンダリングされてからスクロるする。
    setTimeout(() => {
      // Safari、IEの場合はscrollBehaviorが存在しない
      const smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
      const to = (document.querySelector(target) as HTMLElement).offsetTop + fromTargetDistance;
      let i = window.scrollY;
      // eslint-disable-next-line
      if (i != to) {
        if (!smoothScrollFeature) {
          const int = setInterval(function () {
            if (to > i) {
              if (i > to - 20) {
                i += 1;
              } else if (i > to - 40) {
                i += 3;
              } else if (i > to - 80) {
                i += 8;
              } else if (i > to - 160) {
                i += 18;
              } else if (i > to - 200) {
                i += 24;
              } else if (i > to - 300) {
                i += 40;
              } else {
                i += 60;
              }
              window.scroll(0, i);
              if (i > to) {
                clearInterval(int);
              }
            } else {
              if (i < to + 20) {
                i -= 1;
              } else if (i < to + 40) {
                i -= 3;
              } else if (i < to + 80) {
                i -= 8;
              } else if (i < to + 160) {
                i -= 18;
              } else if (i < to + 200) {
                i -= 24;
              } else if (i < to + 300) {
                i -= 40;
              } else {
                i -= 60;
              }
              window.scroll(window.scrollY, i);
              if (i < to) {
                clearInterval(int);
              }
            }
          }, 15);
        } else {
          window.scroll({
            top: to,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    });
  };

  return {
    smoothScroll,
  };
};

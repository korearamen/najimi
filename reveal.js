/* 멘야 나지미 — 스크롤하면 섹션이 아래에서 스르륵 올라오는 효과
   index.html / menu.html / gallery.html / subscribe.html 이 함께 씁니다.
   등장 순서를 매길 묶음에는 HTML에서 class="stagger"를 달아둡니다. */
(function () {
  var doc = document;
  var root = doc.documentElement;

  // JS가 살아 있을 때만 숨김 상태를 켠다. (JS를 못 쓰면 내용이 그냥 다 보인다)
  root.classList.add('js');

  function start() {
    var sections = [].slice.call(doc.querySelectorAll('main section'));


    var reduce = window.matchMedia &&
                 window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 관찰 기능이 없거나 움직임을 줄이는 설정이면 전부 바로 보여준다
    if (reduce || !('IntersectionObserver' in window)) {
      sections.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);   // 한 번 올라온 섹션은 다시 숨기지 않는다
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    sections.forEach(function (el) { io.observe(el); });

    // 새로고침 때 이미 화면에 걸쳐 있는 섹션은 기다리지 않고 바로 보여준다
    requestAnimationFrame(function () {
      sections.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    });
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();

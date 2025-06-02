// 검색창에서 돋보기만 눌러도 창이 늘어나도록 지정
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // html의 속성 지정(attribute)
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur = focus가 해제 됐을때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // html의 속성 지정(attribute)
  searchInputEl.setAttribute('placeholder', '');
});

// 배지 스크롤하면 사라지게
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// _.throttle(함수, 시간)s
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기 (to-top)
    gsap.to(toTopEl, .2, {
    x: 0
  });
  } else {
    // 배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
  });
  // 버튼 숨기기 (to-top)
  gsap.to(toTopEl, .2, {
    x: 100 
  });
  }
}, 300));
//_.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// visual 순차적으로 보이게하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *.7,  //0.7, 1.4, 2.1, 2.7 뒤 동작
    opacity: 1
  });
});


// 공지사항 버티컬 슬라이드
// new - 자바스크립트 생성자 (자바스크립트 클래스)

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

//공지사항 가로 슬라이드 스와이퍼
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' - 기본값
  slidesPerView: 3, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데에 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000 //0.5초
  // }
  

  // 페이지 선택하는 동그라미 만들기
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //previous - 이전의
    nextEl: '.promotion .swiper-next'  // next - 다음의
  }
});

//다중요소 가로 슬라이드 스와이퍼
new Swiper('.awards .swiper-container',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

//토글 열림 닫힘
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // ! 뒤쪽 값이 지속적으로 반대로 되도록 하는 것
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


// 둥둥 떠다니는 애니메이션
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //무한 반복
    yoyo: true,  //뒤로 또 재생
    ease: "power1.inOut", //gsap ease 들어가서 복사
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// SCROLL ANIMATION
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});


//올해 몇년도인지 자동으로 보여주는 js
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //2021 , 2022, 2023 ```
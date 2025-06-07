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


//올해 몇년도인지 자동으로 보여주는 js
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //2021 , 2022, 2023 ```
const chairBtn = document.querySelector('section.our_product ul li.chair-btn');
const allBtn = document.querySelector('section.our_product ul li.all-btn');
const tableBtn = document.querySelector('section.our_product ul li.table-btn');
const bedBtn = document.querySelector('section.our_product ul li.bed-btn');
const decorBtn = document.querySelector('section.our_product ul li.decor-btn');
const productsWrapper = document.querySelector('section.our_product .products_wrapper');
const screenW = window.outerWidth;

if(screenW >= 1280){
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
  });
}else if(screen >= 1024 ){
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 15,
  });
}else if(screenW >= 768){
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
  });
}else if(screenW <= 768){
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 15,
  });
}



allBtn.addEventListener('click',()=>{
    productsWrapper.innerHTML = `
    <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500 ">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
          <div class="item relative h-96 w-full bg-slate-200 overflow-hidden">
            <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
            <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
          </div>
  
    `
})

chairBtn.addEventListener('click',()=>{
  productsWrapper.innerHTML = `
  <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500 ">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-100 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>

  `
})

tableBtn.addEventListener('click',()=>{
  productsWrapper.innerHTML = `
  <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500 ">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-300 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>

  `
})

bedBtn.addEventListener('click',()=>{
  productsWrapper.innerHTML = `
  <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500 ">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-400 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>

  `
})

decorBtn.addEventListener('click',()=>{
  productsWrapper.innerHTML = `
  <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500 ">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700 ">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>
        <div class="item relative h-96 w-full bg-slate-500 overflow-hidden">
          <img src="../src/images/floor_lamp.png" alt="" class="w-full h-full object-cover transition-all duration-500">
          <button class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 transition-all duration-500 text-sm py-2 px-3 border border-solid border-slate-700">view product</button>
        </div>

  `
})
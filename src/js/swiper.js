'use strict'

import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const useSwiper=()=>{
    const swiper = new Swiper(".swiper", {
        modules: [Pagination],
        spaceBetween: 16,

        pagination:{
            el: '.swiper-pagination',
            type: 'bullets',
            // bulletClass:'swiper-pagination-bullet',
            // bulletActiveClass:'swiper-pagination-bullet-active',
            clickable:true,
        },

        slidesPerView: 'auto',          //сколько слайдов в контейнере
        loop: true,                     //зацикленность слайдов

        mousewheel: true,
        keyboard: true,

        breakpoints:{
            768:{
                enabled: false,
                spaceBetween: 0,
            },
        },
    });
}

// import Swiper from 'swiper';
// import {Pagination} from "swiper/modules";
// import 'swiper/css';
// import "swiper/css/pagination";
//
// export const useSwiper=()=>{
//
//     const swiper=new Swiper(".swiper",{
//         modules: [Pagination],
//         wrapperClass: 'swiper-wrapper',
//         slideClass: 'swiper-slide',
//         spaceBetween: 16,
//
//         pagination:{                    //нумерация страниц
//             el: '.swiper-pagination',
//
//             type: 'bullets',
//             bulletClass:'swiper-pagination-bullet',
//             bulletActiveClass:'swiper-pagination-bullet-active',
//
//             clickable:true,
//         },
//
//         slidesPerView: 'auto',          //сколько слайдов в контейнере
//         loop: true,                     //зацикленность слайдов
//
//         mousewheel: true,
//         keyboard: true,
//
//         breakpoints:{
//             768:{
//                 enabled: false,
//                 spaceBetween: 0,
//             },
//         },
//     });
// }


//
// const blockWrapper=document.querySelector('.blockWrapper')
// const openBtn=document.querySelector('.viewer__openBtn')
//
// openBtn.addEventListener('click',()=>{
//     console.log(blockWrapper.classList.contains('blockWrapper--isOpen'))
//     if (blockWrapper.classList.contains('blockWrapper--isOpen')){
//         blockWrapper.classList.remove('blockWrapper--isOpen')
//         openBtn.textContent='Показать все'
//     }else {
//         blockWrapper.classList.add('blockWrapper--isOpen')
//         openBtn.textContent='Скрыть'
//     }
// })


'use strict'

export const useSidebarsOpening=()=>{
    const sidebarBurger=document.querySelector('.sidebarBurger')
    const sidebarCall=document.querySelector('.sidebarCall')
    const sidebarChat=document.querySelector('.sidebarChat')
    const overlay=document.querySelector('.overlay')

    const openBurger=document.querySelector('.openBurger')
    const openCall=document.querySelector('.openCall')
    const openChat=document.querySelector('.openChat')

    // const testBtnBurger=document.querySelector('.testBtnBurger')
    // const testBtnCall=document.querySelector('.testBtnCall')
    // const testBtnChat=document.querySelector('.testBtnChat')
    const closeSidebars=document.querySelectorAll('.closeSidebars')

    openBurger.addEventListener('click',()=>{
        sidebarBurger.classList.add('sidebar--isOpen')
        overlay.classList.add('overlay--isOpen--forLeftSidebar')
    })
    openCall.addEventListener('click',()=>{
        sidebarCall.classList.add('sidebar--isOpen')
        overlay.classList.add('overlay--isOpen--forRightSidebar')
    })
    openChat.addEventListener('click',()=>{
        sidebarChat.classList.add('sidebar--isOpen')
        overlay.classList.add('overlay--isOpen--forRightSidebar')
    })


    // const closeSidebars=[testBtnBurger,testBtnCall,testBtnChat,overlay]
    closeSidebars.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarBurger.classList.remove('sidebar--isOpen')
            sidebarCall.classList.remove('sidebar--isOpen')
            sidebarChat.classList.remove('sidebar--isOpen')
            overlay.classList.remove('overlay--isOpen--forLeftSidebar', 'overlay--isOpen--forRightSidebar')
        })
    })
}
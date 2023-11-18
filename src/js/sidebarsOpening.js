'use strict'

export const useSidebarsOpening=()=>{

    const sidebarBurger=document.querySelector('.sidebarBurger')
    const sidebarCall=document.querySelector('.sidebarCall')
    const sidebarChat=document.querySelector('.sidebarChat')

    const openBurger=document.querySelectorAll('.openBurger')
    const openCall=document.querySelectorAll('.openCall')
    const openChat=document.querySelectorAll('.openChat')

    const closeLeftSidebar=document.querySelectorAll('.closeLeftSidebar')
    const closeRightSidebar=document.querySelectorAll('.closeRightSidebar')
    const overlay=document.querySelector('.overlay')

    //open
    openBurger.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarBurger.classList.add('sidebar--isOpen')
            overlay.classList.add('overlay--isOpen--forLeftSidebar')
        })
    })
    openCall.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarCall.classList.add('sidebar--isOpen')
            overlay.classList.add('overlay--isOpen--forRightSidebar')
        })
    })
    openChat.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarChat.classList.add('sidebar--isOpen')
            overlay.classList.add('overlay--isOpen--forRightSidebar')
        })
    })

    // close
    closeLeftSidebar.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarBurger.classList.remove('sidebar--isOpen')
            overlay.classList.remove('overlay--isOpen--forLeftSidebar')
        })
    })
    closeRightSidebar.forEach((el,num)=>{
        el.addEventListener('click',()=>{
            sidebarCall.classList.remove('sidebar--isOpen')
            sidebarChat.classList.remove('sidebar--isOpen')
            overlay.classList.remove('overlay--isOpen--forRightSidebar')
        })
    })
    overlay.addEventListener('click',()=>{
        sidebarCall.classList.remove('sidebar--isOpen')
        sidebarChat.classList.remove('sidebar--isOpen')
        overlay.classList.remove('overlay--isOpen--forRightSidebar')
        if (window.innerWidth<1200){
            sidebarBurger.classList.remove('sidebar--isOpen')
            overlay.classList.remove('overlay--isOpen--forLeftSidebar')
        }
    })
}
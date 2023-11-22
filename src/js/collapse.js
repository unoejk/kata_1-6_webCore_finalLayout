'use strict'

export const useCollapse=()=>{
    const mainManifesto=document.querySelector('.mainManifesto')
    const repairBrandBlock=document.querySelector('.repairBrandBlock')
    const repairTechBlock=document.querySelector('.repairTechBlock')

    const openMainManifesto=document.querySelector('.openMainManifesto')
    const openRepairBrandBlock=document.querySelector('.openRepairBrandBlock')
    const openRepairTechBlock=document.querySelector('.openRepairTechBlock')

    openMainManifesto.addEventListener('click',()=>{
        if (mainManifesto.classList.contains('collapsingBlock--isOpen')){
            mainManifesto.classList.remove('collapsingBlock--isOpen')
            openMainManifesto.textContent='Читать далее'
        }else {
            mainManifesto.classList.add('collapsingBlock--isOpen')
            openMainManifesto.textContent='Свернуть'
        }
    })
    openRepairBrandBlock.addEventListener('click',()=>{
        if (repairBrandBlock.classList.contains('collapsingBlock--isOpen')){
            repairBrandBlock.classList.remove('collapsingBlock--isOpen')
            openRepairBrandBlock.textContent='Показать все'
        }else {
            repairBrandBlock.classList.add('collapsingBlock--isOpen')
            openRepairBrandBlock.textContent='Свернуть'
        }
    })
    openRepairTechBlock.addEventListener('click',()=>{
        if (repairTechBlock.classList.contains('collapsingBlock--isOpen')){
            repairTechBlock.classList.remove('collapsingBlock--isOpen')
            openRepairTechBlock.textContent='Показать все'
        }else {
            repairTechBlock.classList.add('collapsingBlock--isOpen')
            openRepairTechBlock.textContent='Свернуть'
        }
    })
}

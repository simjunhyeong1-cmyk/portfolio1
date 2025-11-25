const toggleBtn=document.querySelector('.menu')
const navBox=document.querySelector('.sub')
const navClose=document.querySelector('.sub .close')

toggleBtn.addEventListener('click',()=>{
    navBox.style.display='block';
})
navClose.addEventListener('click',()=>{
    navBox.style.display='none';
})


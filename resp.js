burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')

burger.addEventListener('click',()=>{//It's used to add  an eventlistener which will just open the class navbar on clicking at 
    //burger shaped icon which will be visible only in mobile view cuz v-class-resp and h-nav-resp classes are available at mobile view only.
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
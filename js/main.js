let menuIcon = document.querySelector('.fa-bars');
let menu = document.querySelector('header nav');
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let countFirst = document.querySelector('.count-first');
let staistic_counte = document.querySelector('.statistics');
let staistic_counters = document.querySelectorAll('.stis');
let prodSec = document.querySelector('.product');
let main_img = document.querySelector('.colors .main-pic img');
let other_imgs = document.querySelectorAll('.colors .others .content img');
let left_side = document.querySelector('.Testimonials .sides i:nth-child(1)');
let right_side = document.querySelector('.Testimonials .sides i:nth-child(2)');
let articales = document.querySelectorAll('.Testimonials .container .box');
let footer_img = document.querySelector('footer .container img');
let loading_section = document.querySelector(".loading");

// menu icon click
menuIcon.onclick = _=>{
    menuIcon.classList.toggle('fa-xmark');
    menu.classList.toggle('active');
}

window.onunload = _=>{
    loading_section.classList.remove('d-none');
}
// inc-dec icons
let con = 1;
inc.onclick= _=>{
    if(con==3){
        con=0;
    }
    countFirst.textContent=`${++con}`;
}
dec.onclick= _=>{
    if(con==1){
        con=4;
    }
    countFirst.textContent=`${--con}`;
}

//automatic increasing statistical counts

    



// scroll actions

window.onscroll = _=>{
    console.log(scrollY);
    if(scrollY>=987){
     document.querySelector('.product .container .content .img img').style = "animation:moveFromRight 5s;display:flex;";
    }
    if(scrollY>=1650){
     document.querySelector('.efficency .container img').style = "animation:show 5s";
    }
    if(scrollY>=2500){
     document.querySelector('.Accessories .container .content .imgs img:nth-child(1)').style = "animation:show2 5s"
     document.querySelector('.Accessories .container .content .imgs img:nth-child(2)').style = "animation:show3 5s"
    }
    if(scrollY>=2900){
     document.querySelector('.shoping .container img:nth-child(1)').style = "animation:opacityShow 5s"
     document.querySelector('.shoping .container img:nth-child(2)').style = "animation:opacityShow 5s"
    }
    if(scrollY>=3100){
     document.querySelectorAll('.box-img').style = "animation:opacityShow 5s";
    }
    if(scrollY>=10082){
        footer_img.style="animation:moveFromRight 5s;display:flex;";
    }

}


// images changing
for (const iterator of other_imgs) {
    iterator.addEventListener("click",_=>{
        main_img.setAttribute("src",iterator.src);
        main_img.style.width="300px"
        main_img.style.hight="300px"

    })
}

// right sides
// for (let i = 0 ; i<articales.length ; i++) {
//     articales[i].style.transform="scale(1)";
// right_side.onclick = _=>{
// articales[i].style.transform="scale(1.2)";
// }
// }

let numth = 0;
right_side.onclick= _=>{
    clearScale();
    if(numth>2){
        numth=0;
    }
    articales[numth++].style.transform="scale(1.2)";
}
let numth2 = 2;
left_side.onclick= _=>{
    clearScale();
    if(numth2<0){
        numth2=2;
    }
    articales[numth2--].style.transform="scale(1.2)";
}


// clear scale 
function clearScale(){
    for (const iterator of articales) {
        iterator.style.transform="scale(1)";   
    }
}
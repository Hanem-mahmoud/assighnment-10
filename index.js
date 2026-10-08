/*======================dark&light========================*/

var lightMode = document.querySelector('#theme-toggle-button');
var html = document.documentElement;
lightMode.addEventListener('click',function(e){
/* document.documentElement.classList.toggle('dark'); */

if(html.classList.contains('dark')){
  html.classList.remove('dark');
  localStorage.setItem('lightDark' , 'light')
}else{
  html.classList.add('dark')
   localStorage.setItem('lightDark' , 'dark')
}


})

var savHtml = localStorage.getItem('lightDark');

if(savHtml === 'dark'){
  html.classList.add('dark');
}else if (savHtml === 'light') {
   html.classList.remove('dark');
}


/*======================settings-toggle==========================*/

var buttonStting = document.querySelector('#settings-toggle');
var contentSetting = document.querySelector('#settings-sidebar');
var closeSetting = document.querySelector('#close-settings');


buttonStting.addEventListener('click',function(e){
   e.stopPropagation() 
  this.style.cssText = 'right:20rem'
  contentSetting.classList.remove('translate-x-full');

})

closeSetting.addEventListener('click',function(){
  contentSetting.classList.add('translate-x-full');
  buttonStting.style.cssText = 'right:0rem'
  
})

document.addEventListener('click',function(e){
  if(! contentSetting.classList.contains('translate-x-full') && !contentSetting.contains(e.target)){
contentSetting.classList.add('translate-x-full');
  buttonStting.style.cssText = 'right:0rem';
  }
})



  var allCard = document.querySelectorAll('.font-option');
var iconAll = document.querySelectorAll('.icon')

  for(var i=0; i<allCard.length; i++){

      allCard[i].addEventListener('click',function(){
        var index = Array.from(allCard).indexOf(this)
for(var i=0; i<allCard.length; i++){
  allCard[i].classList.add('border-slate-200','dark:border-slate-700');
  allCard[i].classList.remove('activ','border-primary','bg-slate-50','dark:bg-slate-800');

 
   
}
   
var font = this.getAttribute('data-font');
localStorage.setItem('fontFamily',font)
document.body.classList.remove('font-tajawal','font-alexandria','font-cairo')

if(font == 'alexandria'){
  document.body.classList.add('font-alexandria')

}else if(font == 'tajawal'){
   document.body.classList.add('font-tajawal')
  
}else if(font == 'cairo'){
   document.body.classList.add('font-cairo')
  
}


  
   this.classList.remove('border-slate-200','dark:border-slate-700');
   this.classList.add('activ','border-primary','bg-slate-50','dark:bg-slate-800');
    
for(var j=0; j<iconAll.length; j++){
   iconAll[j].style.setProperty('opacity','0');
}

iconAll[index].style.setProperty('opacity','1');

});
  }

  
fontFamily = localStorage.getItem('fontFamily');


for(i = 0; i<allCard.length; i++){
  if(fontFamily == 'alexandria'){
  document.body.classList.add('font-alexandria')
  
}else if(fontFamily == 'tajawal'){
   document.body.classList.add('font-tajawal')
  
}else if(fontFamily == 'cairo'){
   document.body.classList.add('font-cairo')
  
}
}


  




/*===================tabs======================*/



 var navTab = document.querySelectorAll('.nav-links a');



for(var m =0; m<navTab.length; m++){
   

  navTab[m].addEventListener('click', function(e){
       for(var s=0; s<navTab.length; s++){
    navTab[s].classList.remove('active')
  }

    e.target.classList.add('active')

  
  })
 

}




var tabs = document.querySelectorAll('.portfolio-filter');

var content = document.querySelectorAll('#portfolio-grid .portfolio-item ');

for(var i = 0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(){
   var  selectTab = this.innerHTML;
   
   for(var j=0; j<tabs.length; j++){
    tabs[j].classList.remove('bg-linear-to');
    tabs[j].classList.remove('hover-bg')
   }

  this.classList.add('bg-linear-to');
  this.classList.add('hover-bg')

    if(selectTab == 'مواقع الويب'){
        selectTab = 'web';
    

    }else if(selectTab == 'التطبيقات'){
        selectTab = "app";

    }else if(selectTab == 'التصميم'){
        selectTab = "design";

    }else if(selectTab == 'التجارة الإلكتروني'){
        selectTab = "ecommerce";

    }
    
   for(var l = 0 ; l<content.length; l++){
        
     if(selectTab == 'الكل'){
      content[l].style.display = "block";

    }else if(content[l].getAttribute('data-category') == selectTab){
      content[l].style.display = "block";

    }else {
      content[l].style.display = "none";
    }
   }
   } )
}






/*====================carousel-indicator========================*/


var carousel = document.querySelectorAll('.carousel-indicator');
var cards = document.querySelector('#testimonials-carousel');


for(var i=0; i<carousel.length; i++){
  carousel[i].addEventListener('click',function(e){

    for(var j=0 ; j<carousel.length; j++){
      carousel[j].classList.remove('active');
     
    }
   e.target.classList.add('active');
  var index = e.target.getAttribute('data-index')
  var m = index * 50;
   cards.style.cssText ="transform :translateX(" + m + "%);"

  })
  }




/*==========================الثيم========================*/

var themColor = document.querySelector('#theme-colors-grid');

themColor.innerHTML=`
   <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246));border-radius: 50%;" data-color='1'>
               </button>

                <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22));border-radius: 50%;" data-color='2'>
               </button>

                 <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(16, 185, 129), rgb(5, 150, 105));border-radius: 50%;" data-color='3'>
               </button>

                  <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(59, 130, 246), rgb(6, 182, 212));border-radius:50%;" data-color='4'>
               </button>

                <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(239, 68, 68), rgb(244, 63, 94));border-radius: 50%;" data-color='5'>
               </button>

                <button class="color-button hover:scale-110 hover:border-primary border-2 dark:border-slate-700 cursor-pointer border-slate-200" style="width: 30px;height: 30px ;background: linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12));border-radius: 50%;" data-color="6">
               </button>
`

var allButton = document.querySelectorAll('.color-button');

for(var b=0; b<allButton.length; b++){
  allButton[b].addEventListener('click',function(){
    for(var b=0; b<allButton.length; b++){
      allButton[b].classList.remove('ring-2','ring-primary','ring-offset-2','ring-offset-white','dark:ring-offset-slate-900');
    }
this.classList.add('ring-2','ring-primary','ring-offset-2','ring-offset-white','dark:ring-offset-slate-900');

var colorButton = this.getAttribute('data-color');

localStorage.setItem('colorButton',colorButton);

if(colorButton =='1'){
document.documentElement.style.setProperty('--color-primary',' #6366f1');
document.documentElement.style.setProperty('--color-secondary','#8b5cf6')
document.documentElement.style.setProperty('--color-accent', '#a855f7')
}else if(colorButton==='2'){
   document.documentElement.style.setProperty('--color-primary',' #ec4899');
document.documentElement.style.setProperty('--color-secondary','#f97316')
document.documentElement.style.setProperty('--color-accent', '#fb923c')
}else if(colorButton ==='3'){
   document.documentElement.style.setProperty('--color-primary',' #10b981');
document.documentElement.style.setProperty('--color-secondary','#059669')
document.documentElement.style.setProperty('--color-accent', '#34d399')
}else if(colorButton ==='4'){
   document.documentElement.style.setProperty('--color-primary',' #3b82f6');
document.documentElement.style.setProperty('--color-secondary','#06b6d4')
document.documentElement.style.setProperty('--color-accent', '#22d3ee')
}else if(colorButton ==='5'){
   document.documentElement.style.setProperty('--color-primary',' #ef4444');
document.documentElement.style.setProperty('--color-secondary','#f43f5e')
document.documentElement.style.setProperty('--color-accent', '#fb7185')
}else if(colorButton ==='6'){
   document.documentElement.style.setProperty('--color-primary',' #f59e0b');
document.documentElement.style.setProperty('--color-secondary','#ea580c')
document.documentElement.style.setProperty('--color-accent', '#fbbf24')
}

  })
}

/* var savColorButton = localStorage.getItem('colorButton');

for(var j=0; j<allButton.length; j++){
  if(allButton[j].getAttribute('data-color') === savColorButton){
    allButton[j].click();
  }
} */
var saveColor = localStorage.getItem('colorButton');

for(var j = 0; j<allButton.length; j++){
  if(allButton[j].getAttribute('data-color') === saveColor){
    allButton[j].click();
  }
}



var scroll = document.querySelector('#scroll-to-top');
window.addEventListener('scroll',function(){
 if(window.scrollY>250){
  scroll.classList.remove('invisible');
 }else{
   scroll.classList.add('invisible');
 }


})

scroll.addEventListener('click',function(){
  window.scrollTo({top:0, behavior:'smooth' });
});





var reset = document.querySelector('#reset-settings');

reset.addEventListener('click',function(){
  document.documentElement.style.setProperty('--color-primary',' #6366f1');
document.documentElement.style.setProperty('--color-secondary','#8b5cf6');
document.documentElement.style.setProperty('--color-accent', '#a855f7');
  for(var b=0; b<allButton.length; b++){
      allButton[b].classList.remove('ring-2','ring-primary','ring-offset-2','ring-offset-white','dark:ring-offset-slate-900');
    }

      contentSetting.classList.add('translate-x-full');
  buttonStting.style.cssText = 'right:0rem';

  for(var i=0; i<allCard.length; i++){
  allCard[i].classList.add('border-slate-200','dark:border-slate-700');
  allCard[i].classList.remove('activ','border-primary','bg-slate-50','dark:bg-slate-800');

 
   
}

for(var j=0; j<iconAll.length; j++){
   iconAll[j].style.setProperty('opacity','0');
}
document.body.classList.remove('font-tajwal','font-alexandria','font-cairo')

 localStorage.removeItem('lightDark');
localStorage.removeItem('fontFamily');
localStorage.removeItem('colorButton'); 
})


var linksNav = document.querySelector('.nav-links')
var iconNav = document.querySelector('.icon-nav');
iconNav.addEventListener('click',function(){
linksNav.classList.toggle('open')

})
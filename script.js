 var nav = document.querySelector('#header nav')
 var toggle = document.querySelectorAll('nav .toggle')

 for(var element of toggle) {
     element.addEventListener('click', function(){
         nav.classList.toggle('show')
     })
 }
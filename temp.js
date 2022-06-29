
 

const number = document.querySelectorAll('.numb')
//    console.log(number)
   const speed = 100;
   number.forEach(element => {
    incNumber(element)
   });
    function incNumber(elem){
        let text =+ elem.innerText
        const value =+ elem.getAttribute('data-target')
        // console.log(value)
        const inc = value/speed
        if(text<value){
            elem.innerText=inc+text;
            setTimeout(() => {
                incNumber(elem)
            }, 20);
        }
    }
    
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

      $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
    });
    

    function thehello(){

        var elem = document.getElementsByClassName("images");
        for(var i =0 ;i<=elem.length;i++)
        {
            elem[i].style.transform = 'scale(1)';
            elem[i].style.opacity = '100%';
        }
    }
  
 

    function hello(h) {


        
        var elem = document.getElementsByClassName("images");
     
        if(h==1) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==0) {
                    elem[0].style.transform = 'scale(1.4)';
          
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }

        if(h==2) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==1) {
                    elem[1].style.transform = 'scale(1.4)';
          
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==3) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==2) {
                    elem[2].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==4) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==3) {
                    elem[3].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==5) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==4) {
                    elem[4].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==6) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==5) {
                    elem[5].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==7) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==6) {
                    elem[6].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==8) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==7) {
                    elem[7].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==9) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==8) {
                    elem[8].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }
        if(h==10) {
     
            for(var i =0 ; i<=elem.length ; i++)
            {
                if(i==9) {
                    elem[9].style.transform = 'scale(1.4)';
                    // console.log('nothing')
                }
                else{
                    elem[i].style.transform = 'scale(0.7)';
                    elem[i].style.opacity = '20%';
                }
            }
        }

    
       
    }


    var btn = document.getElementsByClassName('btn');
    var slide = document.getElementById('slide');

    // slide-col

    btn[0].onclick = function() {
        slide.style.transform = 'translatex(0px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active');
        }
        this.classList.add('active');
    }


    btn[1].onclick = function() {
        slide.style.transform = 'translatex(-800px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
    }

    btn[2].onclick = function() {
        slide.style.transform = 'translatex(-1600px)'; 
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active')
    }

    btn[3].onclick = function() {
        slide.style.transform = 'translatex(-2400px)';
        for(i=0;i<4;i++){
            btn[i].classList.remove('active')
        }
        this.classList.add('active');
    }

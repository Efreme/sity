const buttons = document.querySelectorAll('.button');
const reset = document.getElementById('reset');
const delet = document.getElementById('del');
const ravno = document.getElementById('=')
const persent = document.getElementById('^');
const kvadr = document.getElementById('X2');
const raq = document.getElementById('raq');
const ln = document.getElementById('ln');
const jerkoff = document.getElementById('1/x');
const pi = document.getElementById('pi');
const hidden_button = document.querySelector('.hidden_button');
const hidden_body = document.querySelector('.hidden');
const bodyCal = document.querySelector('.body_cal');




let input = document.querySelector('.display');

document.addEventListener("keydown" , function(event){
    console.log(`Нажата клавиша ${event.code} и ${event.key }`);
});


    document.addEventListener("keydown", function (event) {
    if (event.key == '1' || event.key =='2'|| event.key =='3'|| event.key =='4'|| event.key =='5'|| event.key =='6'|| event.key =='7'|| event.key =='8'|| event.key =='9'|| event.key =='0'|| event.key =='-'|| event.key =='+'|| event.key =='*'|| event.key =='/'|| event.key =='=' || event.key =='Digit1'|| event.key =='Digit2'|| event.key =='Digit3'|| event.key =='Digit4'|| event.key =='Digit5'|| event.key =='Digit6'|| event.key =='Digit7'|| event.key =='Digit8'|| event.key =='Digit9'|| event.key =='Digit0'||  event.key =='ShiftLeft')
    
    {   input.value = input.value + event.key ;     }
});  
 
function vvod(){   
   
 
    

for (let i=0; i <buttons.length; i++){ 
    
    let button = buttons[i];
    button.addEventListener('click', function(e){ 
    input.value = input.value +  button.id;   
    console.log(input.value.length);
        
    if( input.value.length > 19){
        console.log('ljp');
        input.value = input.value.substring(0, input.value.length-1);
    }});
}  

}



function remove(){
    reset.addEventListener('click', function(){
     input.value = ""; 
   }) 
}


function del(){
    
    document.addEventListener("keydown", function(){
    if (event.code == 'Backspace') 
    {
        input.value = input.value.substring(0, input.value.length-1);
        
    }
    })
    
    delet.addEventListener('click', function(){
    input.value = input.value.substring(0, input.value.length-1);
    })
}

function rav(){
    
     document.addEventListener("keydown", function(){
    if (event.code == 'Enter') 
    {
        
    //        input.value = eval(input.value);
        input.value = Math.round(eval(input.value) * 100 +Number.EPSILON )/100;
    }
    })
    
    ravno.addEventListener('click',function(){
         
    if(input.value.length>2){
        
//        input.value = eval(input.value);  
        input.value = Math.round(eval(input.value) * 100 +Number.EPSILON )/100;
        
    }
        
        
         
        
   }); 
    
    
   
    
}

function kvadrat(){
        
        kvadr.addEventListener('click',function(){
            console.log('lox');
           input.value = (Math.round(eval(input.value) * 100 +Number.EPSILON )/100) * (Math.round(eval(input.value) * 100 +Number.EPSILON )/100);
            
    });
}

function raque(){
    
    raq.addEventListener('click', function(){
        
        input.value = Math.sqrt(Math.round(eval(input.value) * 100 +Number.EPSILON )/100);
        
    });
}


function hidden(){
    
    hidden_button.addEventListener('click', function(){
        
        bodyCal.classList.toggle('active');
        hidden_body.classList.toggle('active');
        
    });
}


function lnln(){
    ln.addEventListener('click', function(){
        
        
        input.value = Math.log10(Math.round(eval(input.value) * 100 +Number.EPSILON )/100);
        
        
    });
}


function jerk0ff(){
      jerkoff.addEventListener('click', function(){
        
        
        input.value = 1/(Math.round(eval(input.value) * 100 +Number.EPSILON )/100);
        
        
    });
        
}

function Pi(){
      pi.addEventListener('click', function(){
        
           
            input.value = (Math.round(eval(input.value+Math.PI) * 100 +Number.EPSILON )/100);
        
    });
        
}

function triple(){
        
        persent.addEventListener('click',function(){
           
           input.value = (Math.round(eval(input.value) * 100 +Number.EPSILON )/100) * (Math.round(eval(input.value) * 100 +Number.EPSILON )/100) * (Math.round(eval(input.value) * 100 +Number.EPSILON )/100);
            
    });
}


triple();
Pi();
jerk0ff();
lnln();
hidden();
raque();
kvadrat();
del();
remove();
rav();
vvod();


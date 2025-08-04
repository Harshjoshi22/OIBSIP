let string="";

const buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',function(e){
        let arr=['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','(',')']
        for (let i = 0; i < arr.length; i++) {
           if(e.target.innerText == arr[i]){
              string += e.target.innerText;
     document.querySelector('#input').value = string;
     break;
            }
             
            if (e.target.innerText == 'Ans') {
                string=eval(string);
                  document.querySelector('#input').value = string;
break;
            } 
            if(e.target.innerText == 'Del'){
                string=string.slice(0,string.length-1)
               document.querySelector('#input').value = string;
              
               break; 
            }
            if(e.target.innerText == 'Clear'){
                string="";
                 document.querySelector('#input').value = string;
            }
           
        }
      
    })

})
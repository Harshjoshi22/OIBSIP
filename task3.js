 document.querySelector('.form').addEventListener('submit',function(e){
    e.preventDefault();
    const title=document.querySelector('#title').value 
    const text=document.querySelector('#area').value
    
     let div=document.createElement('div');
     div.className="todo";
     div.innerHTML=`<div class="new new1">${title}</div>
        <div class="new new2">${text}</div>
        <div><button class="dlt">X</button></div>`
        document.body.querySelector('.over').appendChild(div);
     document.querySelector('#title').value="";
     document.querySelector('#area').value="";
 })
 
document.querySelector('.notice').addEventListener('click', function(e) {
    if (e.target.classList.contains('dlt')) {
        e.target.closest('.todo').remove();
    }
});


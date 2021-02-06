function add(){
    var ul=document.querySelector('.ulist');
    var name1=document.getElementById('name');
    var li=document.createElement('li')
    // var edit =document.createElement('button');
    // edit.innerText="Edit"
    var remove = document.createElement('button')
    // remove.innerHTML="Remove"
    remove.innerHTML='<i class="fa fa-trash-o" aria-hidden="true"></i>'
    var text=document.createTextNode(name1.value);
    li.appendChild(text);
    li.appendChild(remove);
    // li.appendChild(edit);
    // edit.addEventListener('click',editName)
    remove.addEventListener('click',removeName)
    ul.append(li);
    name1.value=''
}
function removeName(e){
    // var li=document.querySelector('li')
    // var ul=li.parentNode;
    // ul.removeChild(li)
    e.currentTarget.parentElement.remove();
}

let addtodo= document.querySelector('#add_btn')
let modal = document.querySelector('.modal')
let bastan = document.querySelector('.close-modal')
let aadkardan =document.querySelector('#todo_submit')
let input = document.querySelector('#todo_input')
let valuee
let nostatuse = document.querySelector('#no_status')
let divv
addtodo.addEventListener('click', function(){
    modal.className= 'modal active'
    input.focus()

})
bastan.addEventListener('click', bastanfu)
function bastanfu(){
    modal.className=' modal'
}
aadkardan.addEventListener('click', addelement)
function addelement(){
    valuee=input.value
    input.value=''
    let divjadid = document.createElement('div')
    divjadid.className='todo'
    divjadid.draggable='true'
    divjadid.innerHTML= valuee +'<span class="close">&times;</span>'
    if (valuee){
        nostatuse.append(divjadid)
        divjadid.addEventListener('dragstart', function(e){
            divv=divjadid
        })
    }
    let spaann= document.querySelectorAll('.close')
    spaann.forEach(function(a){
        a.addEventListener('click', function(){
            a.parentElement.remove()
        })
    })
    bastanfu()
}
input.addEventListener('keydown', function(e){
        if (e.code=='Enter'){
        addelement()
    }
})
function dragoverr(event){
    event.preventDefault()
}
function drop(event){
    event.target.append(divv)
}


const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
console.log(buttons)
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      console.log(e)
      console.log(e.target)
      if(e.target.id==='grey'){
        body.style.background=e.target.id
      }
      if(e.target.id==='blue'){
        body.style.background=e.target.id
      }
      if(e.target.id==='white'){
        body.style.background=e.target.id
      }
      if(e.target.id==='yellow'){
        body.style.background=e.target.id
      }
    })
})
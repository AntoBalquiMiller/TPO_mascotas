const nombre= document.getElementById("name")
 
const apellido=document.getElementById("apellido")

const mail=document.getElementById("mail")

const perrito=document.getElementById("perrito")

const formulario=document.getElementById("form")

const parrafo=document.getElementById("warnings")

formulario.addEventListener("submit",e=>{

  e.preventDefault()
  let entrar = false
  let warnings=""
  parrafo.innerHTML=""
  if(nombre.value.length < 4) {warnings += "El nombre es muy corto.<br>"
  entrar= true}

  if(entrar){parrafo.innerHTML=warnings}
  else{parrafo.innerHTML="Enviado"}

})



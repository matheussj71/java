const titulo = document.querySelector('h1');
typerWriter(titulo);
typerWriter(document.querySelector('p'));

function typerWriter(elemento) {
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML ='';
   textoArray.forEach((letra, i) => {
   	setTimeout(() => elemento.innerHTML += letra, 75 * i);
   });
}
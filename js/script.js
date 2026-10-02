const data = new Date().toLocaleDateString("pt-BR");
const [dia,mes,ano] = data.split("/");

const dFooter = document.querySelector(".data");

dFooter.innerHTML = mes + "/" + ano + ": " ;

   imgCarrocel = document.querySelector("#carrossel");
   imgCarrocel1 = document.querySelector("#carrossel1");
   imgCarrocel2 = document.querySelector("#carrossel2");
   imgCarrocel3 = document.querySelector("#carrossel3");

if(imgCarrocel &&
    imgCarrocel1 &&
    imgCarrocel2 &&
    imgCarrocel3
) {

setInterval(() => {
  
    if (imgCarrocel.style.display === "block") {
        imgCarrocel.style.display = "none";
        imgCarrocel1.style.display = "block";
        imgCarrocel2.style.display = "none";
        imgCarrocel3.style.display = "none";
  
    } else if (imgCarrocel1.style.display === "block") {
        imgCarrocel1.style.display = "none";
        imgCarrocel2.style.display = "block";
        imgCarrocel.style.display = "none";
        imgCarrocel3.style.display = "none";

    } else if(imgCarrocel2.style.display === "block") {
        imgCarrocel1.style.display = "none";
        imgCarrocel3.style.display = "block";
        imgCarrocel.style.display = "none";
        imgCarrocel2.style.display = "none";
    
    } else {
        imgCarrocel2.style.display = "none";
        imgCarrocel.style.display = "block";
        imgCarrocel1.style.display = "none";
        imgCarrocel3.style.display = "none";
    }

  }, 6000);
}

/* voltar ao topo */
const b = document.querySelector("#voltar_topo");
if(b) {
window.addEventListener("scroll" , () => {
 if(window.scrollY > 200) {
    b.classList.add("mostrar");
 }else {
    b.classList.remove("mostrar");
 }
});
}
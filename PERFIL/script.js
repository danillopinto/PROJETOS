const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})


function vermais() {
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var read_buton2 = document.getElementById("read_buton2");
    var aside = document.querySelector("aside")
    var footer = document.querySelector("footer")


    if (pontos.style.display == "none") { 
        pontos.style.display="inline";
        maisTexto.style.display="none";
        read_buton2.innerHTML="Ver mais";
        aside.style.height="100%"
        footer.style.height="50px"

    }else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        read_buton2.innerHTML="Ver menos";
        aside.style.height="100%"
        footer.style.height="50px"
    }
}

window.sr = ScrollReveal({reset: true});

sr.reveal('h1', {
    rotate: {x:0, y:50, z:0},
    duration: 2000
});

sr.reveal('#divp1', {
    rotate: {x:0, y:50, z:0},
    duration: 2000
});

sr.reveal('#divp2', {
    rotate: {x:0, y:50, z:0},
    duration: 2000
});

sr.reveal('#divA', {
    rotate: {x:0, y:50, z:0},
    duration: 2000
});

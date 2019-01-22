const cardProjetos  = document.querySelector(".projetos--card");
const cardProjetosInfos  = document.querySelector(".projetos--card__infos");


cardProjetos.addEventListener("mouseover", function() {
    cardProjetosInfos.style.display = "flex";
    console.log("Ok");
});

cardProjetos.addEventListener("mouseout", function() {
    cardProjetosInfos.style.display = "none";
    console.log("Ok");
});
const botaoLore = document.querySelector(".botao-lore"); 
const modal = document.querySelector(".modal");
const video = document.getElementById("video");

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoLore.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "https://www.youtube.com/embed/4eNjKhwXIWg");
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
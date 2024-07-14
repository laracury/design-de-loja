var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true, //quando chegar no final volta ao início

    navigation:{ //atribiuição das classes next e prev
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination", 
    }, 
    keyboard: true, // ativa as teclas do teclado
});
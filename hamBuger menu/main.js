const hamburgerMenuContainerTag = document.querySelector(
    ".hamburgerMenuContainer"
);
const overlayMenuTag = document.querySelector(".overlayMenu");
const hamBurgerLine1Tag = document.querySelector(".line1");
const hamBurgerLine2Tag = document.querySelector(".line2");
const hamBurgerLine3Tag = document.querySelector(".line3");
const liTag = document.getElementsByTagName("li");

hamburgerMenuContainerTag.addEventListener("click", () => {
    if (hamburgerMenuContainerTag.classList.contains("isOpened")){
        hamBurgerLine2Tag.classList.remove("hideLine2");
        hamBurgerLine1Tag.classList.remove("rotatePlus45Deg");
        hamBurgerLine3Tag.classList.remove("rotateMinus45Deg");
        overlayMenuTag.classList.remove("showOverlayMenu");
        hamburgerMenuContainerTag.classList.remove("isOpened");
        for(let i = 0; i < liTag.length; i++){
            liTag[i].classList.remove("moveLiTagUp")
        }
    }else{
        overlayMenuTag.classList.add("showOverlayMenu");
        hamBurgerLine2Tag.classList.add("hideLine2");
        hamBurgerLine1Tag.classList.add("rotatePlus45Deg");
        hamBurgerLine3Tag.classList.add("rotateMinus45Deg");
        hamburgerMenuContainerTag.classList.add("isOpened");
        for(let i = 0; i < liTag.length; i++){
            liTag[i].classList.add("moveLiTagUp")
        }
    }
});
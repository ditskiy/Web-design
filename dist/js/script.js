"use strict";

window.addEventListener("DOMContentLoaded", () => {



    const icons = document.querySelectorAll(".other__item"),
        other = document.querySelectorAll(".other__block"),
        iconsParent = document.querySelector(".other__items"),
        sss = document.querySelectorAll(".icons");

    function hideOther() {
        other.forEach(item => {
            item.style.display = "none";
        });
    }

    function showOther(i = 5) {
        other[i].style.display = "block";
        icons[i].style.cssText = "z-index: 10";
    }

    hideOther();
    showOther();
    console.log(iconsParent);

    iconsParent.addEventListener("click", (event) => {
        const target = event.target;
        console.log(target);
        console.log(sss[1]);


        if (target) {
            sss.forEach((item, i) => {
                if (target === item) {
                    hideOther();
                    showOther(i);
                }
            });
        }
    });


});



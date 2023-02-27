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

    function closeStyle() {
        icons.forEach(item => {
            item.style.removeProperty("z-index");
        });
    }

    function showOther(i = 5) {
        other[i].style.display = "block";
        icons[i].style.cssText = "z-index: 10";
    }

    hideOther();
    showOther();
   

    iconsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target) {
            sss.forEach((item, i) => {
                if (target === item) {
                    closeStyle()
                    hideOther();
                    showOther(i);
                }
            });
        }
    });


});



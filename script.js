document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const image = document.querySelector('.fade-in-image');
        image.classList.add('visible');
    }, 1000); // 1000 milliseconds = 1 second
});

document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById("main-heading");
    setTimeout(function() {
        heading.classList.add("visible");
    }, 1000); // Delay of 1 second before the animation starts
});

// document.addEventListener("DOMContentLoaded", function () {
//     const galleryItems = document.querySelectorAll(".gallery-item");
//     const lightbox = document.getElementById("lightbox");
//     const lightboxImg = document.getElementById("lightbox-img");
//     const caption = document.getElementById("caption");
//     const close = document.querySelector(".close");

//     galleryItems.forEach(item => {
//         item.addEventListener("click", function () {
//             lightbox.style.display = "block";
//             lightboxImg.src = this.src;
//             caption.innerHTML = this.alt;
//         });
//     });

//     close.addEventListener("click", function () {
//         lightbox.style.display = "none";
//     });

//     lightbox.addEventListener("click", function (e) {
//         if (e.target !== lightboxImg) {
//             lightbox.style.display = "none";
//         }
//     });
// });

AOS.init();

document.getElementById("show-more").addEventListener("click", function() {
    var hiddenBrands = document.querySelectorAll(".brand-item.hidden");
    hiddenBrands.forEach(function(brand) {
        brand.classList.remove("hidden");
    });
    this.style.display = "none"; // Hide the "Show More" button after clicking
});

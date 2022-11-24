function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".project-preview img");


    previews.forEach(preview => {
        preview.addEventListener("click", function () {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src=bigSrc;
            previews.forEach(preview => preview.classList.remove("project-active"));
            previews.classList.add("project-active");
        });
    });

}

imageGallery();
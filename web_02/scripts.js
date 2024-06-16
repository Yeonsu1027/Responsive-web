document.addEventListener("DOMContentLoaded", ()=>{
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];
    
    const imgBoxes = document.querySelectorAll(".img_box2");
    imgBoxes.forEach(imgBox => {
        imgBox.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.querySelector("img").src;
            captionText.innerHTML = this.querySelector("img").alt;
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
});

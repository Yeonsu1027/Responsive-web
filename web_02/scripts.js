document.addEventListener("DOMContentLoaded", ()=>{

    

    // 사진 자세히보기
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

    // 메뉴 클릭 유지용
    const menuItems = document.querySelectorAll(".menu li");
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            // 모든 li에서 click 클래스 제거
            menuItems.forEach(li => li.classList.remove('click'));
            // 현재 클릭한 li에 click 클래스 추가
            this.classList.add('click');
        });
    });

    
    
});

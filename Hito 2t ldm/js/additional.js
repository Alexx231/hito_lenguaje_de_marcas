function toggleAdditionalContent() {
    const additionalContent = document.getElementsByClassName("additional-content");
    for (let i = 0; i < additionalContent.length; i++) {
        additionalContent[i].style.display = "block";
    }
}
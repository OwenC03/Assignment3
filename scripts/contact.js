// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var submit_button = document.getElementById("submit-button");
var page = document.getElementById("contact-page")
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
function submit_page() {
    var newMessage = document.createElement("p");
    newMessage.textContent = "Thank you for your message!"
    newMessage.style.fontSize = "24px"

    while(page.firstChild) {
        page.removeChild(page.firstChild);
    }
    page.appendChild(newMessage);
}
submit_button.addEventListener("click", submit_page)
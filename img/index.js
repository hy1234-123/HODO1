// script.js
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!re.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    } else {
        openModal();
    }
}

function openModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.getElementById("modalButton").onclick = function() {
    document.getElementById("subscribeForm").submit();
    closeModal();
};


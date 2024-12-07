function homefunc() {
    window.location.href="home.html";
}

function aboutmefunc() {
    window.location.href="aboutme.html";
}

function portfoliofunc() {
    window.location.href="portfolio.html";
}

function contactfunc() {
    window.location.href="contact.html";
}

function port1func() {
    window.location.href="port1.html";
}

function port2func() {
    window.location.href="port2.html";
}

function port3func() {
    window.location.href="port3.html";
}

function port4func() {
    window.location.href="port4.html";
}

function port5func() {
    window.location.href="port5.html";
}

function port6func() {
    window.location.href="port6.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.buttons button');
    
    const currentPage = window.location.href;
    buttons.forEach(button => {
        const buttonPage = button.className.toLowerCase() + '.html'; 
        if (currentPage.includes(buttonPage)) {
            button.classList.add('active'); 
        } else {
            button.classList.remove('active'); 
        }
    });
});

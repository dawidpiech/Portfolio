let hamburger = document.querySelector(".hamburger"),
    menu_fields = document.querySelectorAll(".menu-form-field input"),
    mail_area = document.querySelectorAll(".menu-form-field textarea"),
    black_area = document.querySelector(".menu-back"),
    bars = document.querySelectorAll(".bar"),
    arrow_left = document.querySelector(".arrow-left"),
    arrow_right = document.querySelector(".arrow-right"),
    carousel = 0,
    send_menu = document.querySelector(".menu-form .send"),
    send_contact = document.querySelector(".section-form .send"),
    preloader = document.querySelector(".preloader"),
    img = document.querySelectorAll("img")

document.addEventListener("DOMContentLoaded", () => {


    //hamburger
    hamburger.addEventListener("click", () => {
        document.querySelector("header").classList.toggle("open")
    })

    //label animation
    menu_fields.forEach(a => {
        a.addEventListener("focusin", () => {
            a.parentElement.classList.add("focus")
        })
    })

    mail_area.forEach(a => {
        a.addEventListener("focusin", () => {
            a.parentElement.classList.add("focus-area")
        })
    })

    menu_fields.forEach(a => {
        a.addEventListener("focusout", () => {
            if (a.value === "")
                a.parentElement.classList.remove("focus")
        })
    })


    //label form animation
    mail_area.forEach(a => {
        a.addEventListener("focusout", () => {
            if (a.value === "")
                a.parentElement.classList.remove("focus-area")
        })
    })


    //close menu
    black_area.addEventListener("click", () => {
        document.querySelector("header").classList.remove("open")
    })

    for (let i = 0; i < bars.length; i++) {
        bars[i].addEventListener("click", changeActiveBar)
    }

    //Projects carousel
    if (arrow_left != null & arrow_right != null)
        (function () {
            arrow_left.addEventListener("click", () => {
                loop(false)
            })
            arrow_right.addEventListener("click", () => {
                loop(true)
            })
        })()


    //Contact form on Contact page
    if (send_contact != null)
        (function () {
            send_contact.addEventListener("click", function () {
                let contact_form = [
                    document.querySelector(".section-form input[name='name']"),
                    document.querySelector(".section-form input[name='company_name']"),
                    document.querySelector(".section-form input[name='e-mail']"),
                    document.querySelector(".section-form input[name='telephone']"),
                    document.querySelector(".section-form textarea[name='message']")
                ]
                sendMessage(...contact_form, send_contact)
            })
        })()

    //Contact form in menu
    if (send_menu != null)
        (function () {
            send_menu.addEventListener("click", function () {
                let menu_form = [
                    document.querySelector(".menu-form input[name='name']"),
                    document.querySelector(".menu-form input[name='company_name']"),
                    document.querySelector(".menu-form input[name='e-mail']"),
                    document.querySelector(".menu-form input[name='telephone']"),
                    document.querySelector(".menu-form textarea[name='message']")
                ]

                sendMessage(...menu_form, send_menu)
            })
        }())

    setTimeout(() => {
        checkImagesLoaded(img, preloader)
    }, 500);


    window.addEventListener("scroll", () => {
        if (document.querySelector(".section-header") != null)
            paralax()
    })

    AOS.init()
})
function changeActiveBar() {
    let a = this.dataset.bar,
        bar_desc = document.querySelectorAll(".bar-description"),
        bar_active = document.querySelector(".bar-descriptions .active")

    bar_active.classList.remove("active")
    bar_desc[a - 1].classList.add("active")
}

function loop(a) {

    let slides = document.querySelectorAll(".project"),
        slider = document.querySelector(".projects-container"),
        projects_container = document.querySelector(".projects")

    if (a) {
        carousel -= projects_container.clientWidth / slides.length
        arrow_left.style.visibility = "visible"
        if (Math.abs(carousel) + slider.clientWidth > projects_container.clientWidth) {
            carousel = 0;
            arrow_left.style.visibility = "hidden"
        }
        projects_container.style.transform = `translateX(${carousel}px)`
    }
    else {
        carousel += projects_container.clientWidth / slides.length
        projects_container.style.transform = `translateX(${carousel}px)`
        if (carousel <= 0)
            arrow_left.style.visibility = "hidden"
    }
}

function initMap() {
    let styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    )

    let map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 50.081596725673236, lng: 19.949696344901934 },
        zoom: 15,
        disableDefaultUI: true
    }),

        marker = new google.maps.Marker({
            position: { lat: 50.081596725673236, lng: 19.949696344901934 },
            map: map,
            animation: google.maps.Animation.DROP,
            icon: {
                url: "../assets/img/marker.png",
                scaledSize: new google.maps.Size(60, 72)
            }
        })

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}

function validate(name, mail, message) {
    let controll = true
    if (name.value === "") {
        name.parentElement.style.borderColor = "#F00"
        controll = false
    }
    else {
        name.parentElement.style.removeProperty("border-color")
    }


    if (validateMail(mail)) {
        mail.parentElement.style.borderColor = "#F00"
        controll = false
    }
    else {
        mail.parentElement.style.removeProperty("border-color")
    }
    if (message.value === "") {
        message.parentElement.style.borderColor = "#F00"
        controll = false
    }
    else {
        message.parentElement.style.removeProperty("border-color")
    }

    return controll
}

function validateMail(a) {
    let controll = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(a.value)) ? false : true
    return controll
}

function sendMessage(name, firm, mail, phone, message) {
    if (validate(name, mail, message)) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "dawid.piech243@gmail.com",
            Password: "0a835045-5d7a-418a-8739-11018b7cfee1",
            To: 'dawid@piech.it',
            From: "portfolio@piech.it",
            Subject: `Name: ${name.value}, Firm: ${firm.value}`,
            Body: `Mail: ${mail.value},
            Phone: ${phone.value},

            Message: ${message.value}
            `,
        }).then(
            message => console.log(message)
        )


        name.parentElement.style.removeProperty("border-color")
        mail.parentElement.style.removeProperty("border-color")
        message.parentElement.style.removeProperty("border-color")

        name.value = ""
        firm.value = ""
        mail.value = ""
        phone.value = ""
        message.value = ""
    }
}

function checkImagesLoaded(imagesArray, preloaderHandle) {
    let loaded = imagesArray.length

    for (let i = 0; i < imagesArray.length; i++) {
        if (imagesArray[i].complete) {
            loaded--
        }
        else {
            imagesArray[i].addEventListener("load", () => {
                loaded--
                if (loaded === 0) {
                    allImagesLoaded(preloaderHandle)
                }
            })
        }
    }

    if (loaded === 0) {
        allImagesLoaded(preloaderHandle)
    }
}

function allImagesLoaded(preloader) {
    document.querySelector("body").classList.remove("load")
    preloader.classList.add("isLoaded")
}

function paralax() {
        document.querySelector(".section-header").style.backgroundPositionY = window.pageYOffset / 4 + "px"
}
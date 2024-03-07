const navbarTogglebtn = document.querySelector(".navbar-toggle-btn")
const navbarnav = document.querySelector(".navbar-nav")
const container = document.querySelector(".container")

const navbarTogglrFunc = function(){
    navbarTogglebtn.classList.toggle("active");
    navbarnav.classList.toggle("active");
}

navbarTogglebtn.addEventListener("click", navbarTogglrFunc)

//-----------------------------------------------------





//------------------------------------------------------
let scrollContainer = document.querySelector(".first")
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")
let move_left = document.querySelector(".container .move-left")
let move_right  = document.querySelector(".container .move-right")


scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = "auto"
})

let move_rightLeft = 0
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 330;
    if (move_rightLeft === 0){
        move_right.style.backgroundColor = "var(--move-left)"
        move_left.style.backgroundColor = "var(--move-right)"
    }
    else{
        move_left.style.backgroundColor = "var(--move-right)"
        move_right.style.backgroundColor = "var(--move-left)"
    }
    move_rightLeft=1
})

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 330;
    if (move_rightLeft === 1){
        move_left.style.backgroundColor = "var(--move-left)"
        move_right.style.backgroundColor = "var(--move-right)"
    }
    else{
        move_right.style.backgroundColor = "var(--move-right)"
        move_left.style.backgroundColor = "#var(--move-left)"
    }
    move_rightLeft=0
})

//---------------------------------------------------------------

const API_KEY = "c2d1496cac67403f8ac25605423ae8d1";
const url = "https://newsapi.org/v2/everything?q=";

//------------------------------------------------------------------
const card = document.querySelectorAll(".article-card")
// let a = 1
card.forEach((card)=>{
    // card.setAttribute("id", `card${a}`)
    // a += 1
    card.addEventListener("mouseover", ()=>{
        card.classList.add("movement")
    })

    card.addEventListener("mouseleave", ()=>{
        card.classList.remove("movement")
    })
    
})

//-------------------------------------------------------------------
// const coinsText = document.querySelectorAll(".wrapper .first h4")
// const coins = document.querySelectorAll(".wrapper .first img")
// const coinsFull = document.querySelectorAll(".wrapper .first span")

// coins.forEach((coin)=>{
//     coin.addEventListener("mouseover", (evt)=>{
//         coin.siblings.style.display = "block"
//     })
// })






//--------------------------------------------------------
// side bar
const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    searchBtn = document.querySelector(".search-box"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    bell = document.querySelector(".sidebar .nav-link.bell a")
    bell1 = document.querySelector(".sidebar .nav-link.bell a i")
    analytics = document.querySelector(".sidebar .menu-bar .analytics")
    analytics1 = document.querySelector(".sidebar .analytics1")

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close")
        if (sidebar.classList.contains("close")){
            // container.style.width = "cal(100% - 63px)"
            container.style.left = "50px"
        }else{
            container.style.left = "100px"
        }
    })

    modeSwitch.addEventListener("click", ()=>{
        body.classList.toggle("dark")

        if (body.classList.contains("dark")){
            modeText.innerHTML = "Light mode"
        }
        else{
            modeText.innerHTML = "Dark mode"
        }
    })



    bell.addEventListener("mousemove", ()=>{
        bell1.classList.add("bell1")
    })
    bell.addEventListener("mouseleave", ()=>{
        bell1.classList.remove("bell1")
    })


    

//------------------------------------------------
var tl = gsap.timeline()

tl.from(".start", {
    opacity:0,
    duration:3,
    delay:1
})

tl.to(".start span", {
    delay:0.5,
    scale : 1,
    duration:1,
    // x:35,
} )

tl.to(".start", {
    display:"none"
})

tl.to(".loading", {
    display:'block',
    rotate : 360,
    repeat : 1,
    duration:3,
    
})

tl.to(".loading", {
    display:"none"
})


tl.to(".container, .sidebar", {
    display:"block"
})



tl.from(".img-1, .h5", {
    y:-30,
    duration:0.5,
    
})



tl.from(".navbar-nav li a", {
    y:-40,
    duration:0.3,
    stagger : 0.3
})


tl.to(".wrapper .home-title" ,{
    opacity:1,
    duration:0.5,
})

tl.from(".wrapper .first img", {
    opacity:0,
    duration:1.5,
    rotateY:360
})

tl.from(".wrapper .first h4", {
    opacity : 0,
    duration : 0.2,
    stagger : 0.3
})

tl.from("#backBtn, #nextBtn", {
    opacity:0,
    duration:0.5
})

tl.from(".wrapper .home-text" ,{
    y:-50,
    duration:0.5,
    opacity:0
})

// gsap.to(".service-card .card-icon-one", {
//     scale : 1.1,
//     duration:0.3,
//     yoyo : true,
//     repeat : -1
// })



// tl.to(".service .section-tittle",{
//     scale:1.1,
//     duration:0.5,
//     color:"orange",
//     scrollTrigger:{
//         trigger :".service .section-tittle",
//         scroller:"body",
//         markers : true,
//         start:"top 50%",
//         // end : "top 30%",
//         scrub:2
        
//     }
// })

//-----------------------------------------------------------------------------------------------------------------------------
// const all = document.querySelectorAll(".container a")
// all.forEach((a)=>{
//     a.addEventListener("click", (e)=>{
//         console.log(a);
//         if (e.target.innerText != "Register" & analytics.classList.contains("analytics"))
//             alert("temporary blocked");
//         else if ((e.target.innerText === "Register")) {
//             window.open("http://192.168.126.174:5500/CSS/registration/registration.html")
//         }
//     })
// })
//----------------------------------------------------------------------------------------------------------------------------------

const sidebarA = document.querySelectorAll(".sidebar .menu-bar a")
// const lightColor = document.querySelector("body .sidebar .menu-bar a")
// const darkColor = document.querySelector("body.dark .sidebar .menu-bar a")

sidebarA.forEach((a)=>{
    a.addEventListener("click", function(e){
        a.classList.toggle("active-color")
        console.log(a.childNodes);
    })
})





analytics.addEventListener("click", ()=>{
    analytics1.classList.toggle("pi-chart")
    if (analytics1.classList.contains("pi-chart")){
        let pi = document.querySelector(".sidebar .pi-chart")
        container.style.display = "none" 
        sidebar.style.borderRight = "0.5px solid #37383F"
        analytics1.style.display = "block"
        setTimeout(()=>{
            analytics1.style.transform = "rotate(360deg) "
        })
    }else {
        container.style.display = "block";
        sidebar.style.borderRight = "none"
        analytics1.style.display = "none"
    }
})

//---------------------------------------------------------------


// Notifications----------------------------------------------------
const notify = document.querySelector(".sidebar .notify")
const notification = document.querySelector(".sidebar .menu-bar .notification")
let toastBox = document.getElementById("toastBox")
let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Sucessfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'
const pi = document.querySelector(".sidebar .pi-chart")

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast")
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if (msg.includes("error")){
        toast.classList.add("error")
    }
    if (msg.includes("Invalid")){
        toast.classList.add("invalid")
    }

    setTimeout(()=>{
        toast.remove()
    }, 6000)
}


notification.addEventListener("click", ()=>{
    notify.classList.toggle("buttons-notification")
    if (notify.classList.contains("buttons-notification")){
        container.style.display = "none" 
        // pi.style.display = "none"
        notify.style.display = "block"
    }else{
        container.style.display = "block" 
        notify.style.display = "none"
    }
    
})



//-------------------------------------------------------------------------------------------

// wallet  sidebar

const wallet_click = document.querySelector(".sidebar .menu-bar .wallet")
const wallet_block = document.querySelector(".sidebar .wallet-block")




wallet_click.addEventListener("click",()=>{
    wallet_block.classList.toggle("wallet-container")
    const wallet_container = document.querySelector(".sidebar .wallet-container")
    if (wallet_block.classList.contains("wallet-container")){
        wallet_block.style.display = "block"
        container.style.display = "none"
        gsap.to(".sidebar .wallet-container", {
            opacity:1,
            duration : 2
        })
    }else{
        wallet_block.style.display = "none"
        container.style.display = "block"
    }
})

const wallet = document.querySelector(".sidebar .wallet-block  .wallet")
const arrow_back = document.querySelector(".sidebar .wallet-block  .wallet-header .arrow-backward")
const arrow_forward = document.querySelector(".sidebar .wallet-block  .wallet-header .arrow-forward")

wallet.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    wallet.scrollLeft += evt.deltaY
    wallet.style.scrollBehavior = "auto"
})

arrow_forward.addEventListener("click", ()=>{
    wallet.style.scrollBehavior = "smooth"
    wallet.scrollLeft += 300;
})

arrow_back.addEventListener("click", ()=>{
    wallet.style.scrollBehavior = "smooth"
    wallet.scrollLeft -= 300;
})


//--------------------------------------------------------------------------------------------------
// Account header 2

const acount = document.querySelectorAll(".container .account-header .account")
const acount_header = document.querySelectorAll(".container .account-header")
// const acount_icon_rotate = document.querySelector(".container .Account_header .account .ro")
// console.log(acount);
// acount.addEventListener("click", ()=>{
//     acount.children[2].setAttribute("id", "rotate")

// })
acount.forEach((a)=>{
    a.addEventListener("click", (e)=>{
        a.children[2].classList.toggle("rotate-icon")
    })
    
})












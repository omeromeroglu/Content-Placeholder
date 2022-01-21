const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bgs_texts = document.querySelectorAll(".animated-bg-text")


setTimeout(getData,2500)

function getData(){
   
    header.innerHTML = "<img src='https://images.unsplash.com/photo-1642543491722-f176053e2df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'alt=''/>"
    title.innerHTML =  "lorem ipsun dolor"
    excerpt.innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, minima?"
    profile_img.innerHTML = '   <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />'
    name.innerHTML = "Omer Omeroglu"
    date.innerHTML= "Jan 21,2022"

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"))
}
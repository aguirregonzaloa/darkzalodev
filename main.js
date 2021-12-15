import "./style.css"

const navbtn = document.getElementById("navbtn")
const ul = document.getElementById("option")

navbtn.addEventListener("click", (e) => {
  console.log("button")
  if (ul.classList.contains("hidden")) {
    ul.classList.remove("hidden")
    ul.classList.add("flex")
  } else {
    ul.classList.remove("flex")
    ul.classList.add("hidden")
  }
})

console.log(ul.classList.contains("hidden"))
console.log(navbtn)

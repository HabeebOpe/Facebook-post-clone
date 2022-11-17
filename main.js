const contaniner = document.querySelector(".container");

const privacy = contaniner.querySelector("#privacy");

const back = container.querySelector("#back")

privacy.addEventListener("click", () => {
   container.classList.add("activ")
})

back.addEventListener("click", () => {
   container.classList.remove("activ")
})



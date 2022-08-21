const saleDay = new Date()
saleDay.setFullYear(new Date().getFullYear() + 1);

const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let timer = () => {
    let diff = (saleDay - (new Date()))
    diff=Math.floor(diff/1000)
    hours.textContent = Math.floor((diff/60/60)%24)
    days.textContent = Math.floor(diff/60/60/24)
    seconds.textContent = Math.floor(diff%60)
    minutes.textContent = Math.floor((diff/60)%60)
}

setInterval(timer, 1000)
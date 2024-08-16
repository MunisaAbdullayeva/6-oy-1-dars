let button = document.querySelectorAll('button')
let time = document.querySelector('#time')
let year = document.querySelector('#year')
let weekDay = document.querySelector('#weekDay')
let month = document.querySelector('#month')

setInterval(() => {
    let date = new Date()

    let hours = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let years = date.getFullYear()
    let week = date.getDay()
    let month = date.getMonth()

    let array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    console.log(week)

    time.innerHTML = `
    <span>${(hours < 10) ? ("0" + hours) : (hours)}</span>:<span>${(minute < 10) ? ("0" + minute) : (minute)}</span>:<span>${(second < 10) ? ("0" + second) : (second)}</span>
    `
    weekDay.innerHTML = array[week - 1]

    year.innerHTML = years

}, 1000);


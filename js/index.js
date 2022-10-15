const clockContente = document.getElementById('clock')
let fontSize = 15
window.addEventListener('load', (event) => {
    setInterval(setTime, 100)
});

function setTime() {
    const time = formatedTime()
    clockContente.innerText = time
}

function formatedTime() {
    const now = new Date();
    const [hour, minutes, sec] = [now.getHours(), now.getMinutes(), now.getSeconds()]
    const hourFormated = hour.toString().length == 1 ? `0${hour}` : hour
    const min = minutes.toString().length == 1 ? `0${minutes}` : minutes

    return `${hourFormated}:${min}`
}

document.getElementById('plus').addEventListener('click', () => {
    fontSize += 1
    clockContente.style.fontSize = `${fontSize}em` 
})


document.getElementById('minus').addEventListener('click', () => {
    fontSize -= 1
    clockContente.style.fontSize = `${fontSize}em` 
})    



const asciiHolder = document.querySelector("section")
const locHash = window.location.search
const mediaSrc = locHash ? locHash.substring(1) : "index"

console.log(mediaSrc)

asciiHolder.innerHTML = `<asciinema-player src="media/${mediaSrc}.cast" cols="100" rows="26" id="asciinema" font-size=".8rem" preload="auto" speed="2.8"></asciinema-player>`

const asciiPlayer = asciiHolder.querySelector("asciinema-player")

asciiPlayer.addEventListener("canplaythrough", ()=> {
    const controlBarOrig = asciiPlayer.querySelector(".control-bar")
    const controlBarNew = document.createElement('div')
    controlBarOrig.parentNode.appendChild(controlBarNew)
    controlBarOrig.style.display = "none"
    controlBarNew.classList.add("control-bar")
    controlBarNew.innerHTML = `<audio src="media/${mediaSrc}.mp3" controls preload="auto"></audio>`
    const audioPlayer = document.querySelector("audio")
    asciiPlayer.addEventListener("play",  () => audioPlayer.play())
    asciiPlayer.addEventListener("pause", () => audioPlayer.pause())
    audioPlayer.addEventListener("play",  () => asciiPlayer.play())
    audioPlayer.addEventListener("pause", () => asciiPlayer.pause())
})

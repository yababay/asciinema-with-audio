const asciiPlayer = document.querySelector("asciinema-player")

asciiPlayer.addEventListener("canplaythrough", ()=> {
    const controlBarOrig = asciiPlayer.querySelector(".control-bar")
    const controlBarNew = document.createElement('div')
    controlBarOrig.parentNode.appendChild(controlBarNew)
    controlBarOrig.style.display = "none"
    controlBarNew.classList.add("control-bar")
    controlBarNew.innerHTML = '<audio src="media/index.mp3" controls loop preload="auto"></audio>'
    const audioPlayer = document.querySelector("audio")
    asciiPlayer.addEventListener("play",  () => audioPlayer.play())
    asciiPlayer.addEventListener("pause", () => audioPlayer.pause())
    audioPlayer.addEventListener("play",  () => asciiPlayer.play())
    audioPlayer.addEventListener("pause", () => asciiPlayer.pause())
})

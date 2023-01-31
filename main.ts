function updateScorces () {
    let p2 = 0
    OLED.clear()
    OLED.writeStringNewLine("Player 1: " + p1)
    OLED.writeStringNewLine("Player 2: " + p2)
    OLED.writeStringNewLine("Ties: " + ties)
    OLED.writeStringNewLine("Rounds: " + rounds)
}
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    OLED.writeStringNewLine("Wanna play a game? It would be sooo funny")
    p1 = 0
    p1 = 0
    rounds = 0
    ties = 0
    basic.pause(2000)
    OLED.clear()
    updateScorces()
}
let rounds = 0
let ties = 0
let p1 = 0
reset()

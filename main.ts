function updateScorces () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1: " + p1)
    OLED.writeStringNewLine("Player 2: " + p1)
    OLED.writeStringNewLine("Ties: " + p1)
    OLED.writeStringNewLine("Rounds: " + p1)
}
let p1 = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Wanna play a game? Its gonna be sooo funny")
p1 = 0
p1 = 0
let rounds = 0
let ties = 0
basic.pause(2000)
OLED.clear()
updateScorces()

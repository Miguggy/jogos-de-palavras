let listas: string[] = []
let letra: string[] = []
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (listas._pickRandom()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (letra._pickRandom()))
})
basic.forever(function () {
    listas = [
    "letra",
    "listas",
    "c",
    ""
    ]
    letra = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o"
    ]
})

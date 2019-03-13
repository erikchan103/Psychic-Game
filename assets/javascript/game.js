var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0
var losses = 0
var tries = 9
var guesses = []
var solution = alphabet[Math.floor(Math.random() * alphabet.length)]

document.onkeyup = function (e) {
    if (e.key === solution) {
        wins++
        document.getElementById('wins').textContent = wins
        solution = alphabet[Math.floor(Math.random() * alphabet.length)]
        guesses = []
        tries = 9
        document.getElementById('guesses').textContent = guesses
        document.getElementById('tries').textContent = tries
    }
    if (alphabet.indexOf(e.key) != -1 && guesses.indexOf(e.key) === -1) {
        guesses.push(e.key)
        tries--
        document.getElementById('tries').textContent = tries
        document.getElementById('guesses').textContent = guesses
        if (guesses.length === 9) {
            losses++
            document.getElementById('losses').textContent = losses
            solution = alphabet[Math.floor(Math.random() * alphabet.length)]
            guesses = []
            tries = 9
            document.getElementById('guesses').textContent = guesses
            document.getElementById('tries').textContent = tries
        }
    }
}
// wait for the DOM to finish loading
$(document).ready(function () {
  var playerTurn = ['userInput_click_p1', 'userInput_click_p2', 'userInput_click_p1', 'userInput_click_p2', 'userInput_click_p1', 'userInput_click_p2', 'userInput_click_p1', 'userInput_click_p2', 'userInput_click_p1']

  $('.userInput').click(function () {
    if (playerTurn.length !== 0) {
      if (playerTurn.length % 2 !== 0) {
        $(this).toggleClass(playerTurn[0])
        console.log(playerTurn[0])
        playerTurn.splice(0, 1)
      } else {
        $(this).toggleClass(playerTurn[0])
        console.log(playerTurn[0])
        playerTurn.splice(0, 1)
      }
    } else {
      console.log('Game Over')
    }
  })
})

document.getElementById('myForm').reset()

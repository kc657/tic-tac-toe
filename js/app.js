// wait for the DOM to finish loading
$(document).ready(function() {
      var playerTurn = ['user_click_p1', 'user_click_p2', 'user_click_p1', 'user_click_p2', 'user_click_p1', 'user_click_p2', 'user_click_p1', 'user_click_p2', 'user_click_p1']

      $('.userInput').click(function() {
          if (playerTurn.length === 0) {
              window.alert('Draw..or someone won and both of you are blind. Please click the "Reset Game" button to play again.')
            } else if ($(this).hasClass('user_click_p1')) {
              window.alert('Already taken, please select a empty square!')
            } else if ($(this).hasClass('user_click_p2')) {
              window.alert('Already taken, please select a empty square!')
            } else if ($(this).hasClass('userInput')) {
              if (playerTurn.length !== 0) {
                if (playerTurn.length === 1) {
                  $(this).addClass(playerTurn[0])
                  $(this).removeClass('userInput')
                  console.log(playerTurn[0])
                  playerTurn.splice(0, 1)
                  window.alert('Draw..or someone won and both of you are blind. Please click the "Reset Game" button to play again.')
                } else if (playerTurn.length % 2 !== 0) {
                  $(this).addClass(playerTurn[0])
                  $(this).removeClass('userInput')
                  console.log(playerTurn[0])
                  playerTurn.splice(0, 1)
                } else {
                  $(this).addClass(playerTurn[0])
                  $(this).removeClass('userInput')
                  console.log(playerTurn[0])
                  playerTurn.splice(0, 1)
                }
              }
            }
          })
      })

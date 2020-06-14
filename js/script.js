'use strict';
const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  guessTheNumber = function () {
    let number = Math.floor(Math.random() * 100) + 1;

    alert('Угадай число от 0 до 100');

    function firstLevel () {
      let usersNumber = prompt ('Введите число');

      function secondLevel () {
          if (+usersNumber > number) {
            confirm(' Загаданное число меньше');
            firstLevel();
          } else if (+usersNumber < number) {
            confirm(' Загаданное число больше');
            firstLevel();
          } else {
            alert('Вы угадали ');
              if (confirm('Сыграем еще?')) {
                guessTheNumber();
              }
          }
      }
      if (!isNumber(+usersNumber) || usersNumber === '') {
                  firstLevel();
                } else if (usersNumber === null) {
                return;
                } else {
                  secondLevel();
                }
    
    }
    firstLevel();

  };
  guessTheNumber();











//   guessTheNumber = function() {
//     let number = Math.floor(Math.random() * 100) + 1;
      

//     alert('Угадай число от 1 до 100');

//     function checkType() {
//       let usersNumber = prompt('Введи число!');

//       function checkNumber() {
      
//         if (+usersNumber > number) {
          
//           alert('Загаданное число меньше');
//           checkType();
//         } else if (+usersNumber < number) {
          
//           alert('Загаданное число больше' );
//           checkType();
//         } else {
//           alert('Вы угадали!');
//           if (confirm('Сыграем ещё?')) {
//             guessTheNumber();
//           }
//         }
//       }

//       if (!isNumber(+usersNumber) || usersNumber === '') {
//         checkType();
//       } else if (usersNumber === null) {
//         return;
//       } else {
//         checkNumber();
//       }
//     }

//     checkType();
//   };

// guessTheNumber();






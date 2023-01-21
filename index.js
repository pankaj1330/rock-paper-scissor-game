const choices = document.querySelectorAll('.choices div');
const yourChoice = document.querySelector('.your-choice img');
const compChoice = document.querySelector('.comp-choice img');
const result = document.getElementById('result');
const resultContainer = document.querySelector('.result');

const imgCollection = ['./images/paper.png',
    './images/scissor.png',
    './images/rock.png'];

function compChoices() {
    const index = randomNo();
    compChoice.src = imgCollection[index];
}

function randomNo() {
    return (Math.floor(Math.random() * 3));
}

function WinOrLoss() {
    if ((yourChoice.src.substr(yourChoice.src.lastIndexOf('/')+1) == 'paper.png' && compChoice.src.substr(compChoice.src.lastIndexOf('/')+1) == 'scissor.png') ||
        (yourChoice.src.substr(yourChoice.src.lastIndexOf('/')+1) == 'scissor.png' && compChoice.src.substr(compChoice.src.lastIndexOf('/')+1) == 'rock.png') ||
        (yourChoice.src.substr(yourChoice.src.lastIndexOf('/')+1) == 'rock.png' && compChoice.src.substr(compChoice.src.lastIndexOf('/')+1) == 'paper.png'))
    {
        result.innerHTML = `You <br> <span>Loose</span>`;
        resultContainer.style.background = 'rgb(255, 186, 186)';
    }
    else if (yourChoice.src === compChoice.src) {
        result.innerHTML = `Draw`
        resultContainer.style.background = 'rgb(190, 255, 155)';
    }
    else {
        result.innerHTML = `You <br> <span>Win</span>`
        resultContainer.style.background = 'rgb(190, 255, 155)';
    }
}

choices.forEach(function (choice) {
    choice.addEventListener('click', function () {
        const imgSrc = choice.querySelector('img').src;
        // console.log(imgSrc);
        yourChoice.src = imgSrc;
        compChoices();
        WinOrLoss();
    })
})

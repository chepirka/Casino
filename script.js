let rules = document.querySelector('.rules')
let rules__okay = document.querySelector('.rules__window-okay') 
let show__rules = document.querySelector('.show__rules')
let addBalance = document.querySelector('.caa__main-add-balance');
let balanceWindow = document.querySelector('.sec__addbalance') ;
let okay = document.querySelector('.okay');
let balance = document.querySelector('.balance');
let input = document.querySelector('.input');
let cross = document.querySelector('.cross');
let plusBet = document.querySelector('.plusBet')
const inputsName = ['crown', 'heart', 'diamonds', 'spades', 'clubs', 'anchor'];
const iconsArr = {
    crown: '<svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(139, 139, 139)" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"/></svg>', 
    heart: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="rgb(139, 139, 139)" d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797-0.671-1.429-2.118-2.797-3.8-2.797-2.318 0-4.2 1.882-4.2 4.2 0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.050 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"></svg>', 
    diamonds: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="rgb(139, 139, 139)" d="M8 0l-5 8 5 8 5-8z"></path></svg>', 
    spades: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="rgb(139, 139, 139)" d="M12.294 6.137c-0.922 0-1.751 0.384-2.341 1.011-0.25 0.265-0.684 0.58-1.153 0.856 0.22-0.842 0.917-1.902 1.4-2.367 0.619-0.596 1-1.435 1-2.367 0-1.795-1.429-3.252-3.2-3.271-1.771 0.019-3.2 1.475-3.2 3.271 0 0.932 0.38 1.771 1 2.367 0.484 0.465 1.18 1.525 1.4 2.367-0.469-0.277-0.903-0.591-1.153-0.856-0.59-0.627-1.419-1.011-2.341-1.011-1.787 0-3.236 1.463-3.236 3.271s1.448 3.271 3.236 3.271c0.923 0 1.751-0.396 2.341-1.023 0.263-0.279 0.726-0.627 1.223-0.916-0.047 2.308-1.149 4.003-2.271 4.67v0.59h6v-0.59c-1.122-0.668-2.224-2.363-2.271-4.67 0.498 0.289 0.961 0.637 1.223 0.916 0.59 0.626 1.419 1.023 2.341 1.023 1.787 0 3.236-1.464 3.236-3.271s-1.448-3.271-3.236-3.271z"></path></svg>', 
    clubs: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16"><path fill="rgb(139, 139, 139)" d="M12.775 5.44c-3.024-2.248-4.067-4.047-4.774-5.44v0c-0 0-0-0-0-0v0c-0.708 1.393-1.75 3.192-4.774 5.44-5.157 3.833-0.303 9.182 3.965 6.238-0.278 1.827-1.227 3.159-2.191 3.733v0.59h6v-0.59c-0.964-0.574-1.913-1.906-2.191-3.733 4.268 2.944 9.122-2.405 3.965-6.238z"></path></svg>',
    anchor: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="79.536px" height="79.536px" viewBox="0 0 79.536 79.536" style="enable-background:new 0 0 79.536 79.536;" xml:space="preserve"><g><path style="fill: rgb(167, 167, 167)" d="M70.943,44.304l-9.735,9.311l2.951,0.859c-4.23,6.954-11.878,10.015-20.588,10.615V29.826h8.078c0.673,0.678,1.605,1.092,2.641,1.092c2.051,0,3.718-1.66,3.718-3.718c0-2.056-1.667-3.723-3.718-3.723c-1.025,0-1.957,0.419-2.641,1.098h-8.078v-4.251c3.925-1.533,6.731-5.333,6.731-9.8C50.303,4.73,45.581,0,39.769,0c-5.811,0-10.53,4.73-10.53,10.524c0,4.771,3.213,8.777,7.581,10.059v3.987h-8.933c-0.676-0.673-1.607-1.093-2.636-1.093c-2.053,0-3.723,1.667-3.723,3.723c0,2.058,1.67,3.718,3.723,3.718c1.028,0,1.96-0.414,2.636-1.092h8.933v35.242c-9.178-0.684-17.189-4.257-21.21-11.791l2.939-0.647L9.45,42.709L5.398,55.551l3.431-0.767c5.015,10.988,16.448,19.838,29.359,20.692l2.004,4.06l1.999-4.05c12.28-0.823,23.211-8.896,28.617-19.065l3.329,0.974L70.943,44.304z M34.37,10.524c0-2.98,2.423-5.398,5.403-5.398c2.979,0,5.403,2.418,5.403,5.398c0,2.98-2.429,5.403-5.408,5.403C36.788,15.928,34.37,13.505,34.37,10.524z"/></g></svg>'};
let result = document.querySelectorAll('.caa__main-gain-res');
let resultValue = []
let bets = document.querySelectorAll('.caa__main-bets-bet svg');
let betsBox = document.querySelectorAll('.caa__main-bets-bet');
let play = document.querySelector('.caa__main-play');
let crownInput = document.querySelector('.input__bet[name="crown"]');
let heartInput = document.querySelector('.input__bet[name="heart"]');
let diamondsInput = document.querySelector('.input__bet[name="diamonds"]');
let spadesInput = document.querySelector('.input__bet[name="spades"]');
let clubsInput = document.querySelector('.input__bet[name="clubs"]');
let anchorInput = document.querySelector('.input__bet[name="anchor"]');
let error = document.querySelector('.balanceLess0');
let okayError = document.querySelector('.okay__error')
let gain = [];
let betMinus = document.querySelector('.betMinus')
let betMinus__window = document.querySelector('.betMinus__window')
let betMinus__okay = document.querySelector('.betMinus__window-okay')
let betZero = document.querySelector('.betZero')
let betZero__window = document.querySelector('.betZero__window')
let betZero__okay = document.querySelector('.betZero__window-okay')
let pb = document.querySelector('.pb')
let pb__okay = document.querySelector('.pb__window-okay')
let bMoreM = document.querySelector('.bMoreM')
let bMoreM_window = document.querySelector('.bMoreM_window')
let bMoreM_okay = document.querySelector('.bMoreM_window-okay')
let show__gameHistory = document.querySelector('.show__gameHistory')
let gameHistory = document.querySelector('.gameHistory')
let crossHistory = document.querySelector('.crossHistory')

let gainBet = 0;
let betsSum = 0;
let res = 0;
crownInput.value = " "
heartInput.value = " "
diamondsInput.value = " "
spadesInput.value = " "
clubsInput.value = " "
anchorInput.value = " "

crossHistory.addEventListener('click', ()=>{
    gameHistory.classList.remove('active')
})
const isPositive = (number)=>{
    return number >= 0;
}
// показ истории игр
show__gameHistory.addEventListener('click', ()=>{
    gameHistory.classList.add('active')
    getHistory()
})

// показ правил
show__rules.addEventListener('click', ()=>{
    rules.classList.add('active')
})
rules__okay.addEventListener('click', ()=>{
    rules.classList.remove('active')
})

// Значение пополнения должно быть положительными
pb__okay.addEventListener('click', ()=>{
    pb.classList.remove('active')
})

//Открытие модального окна
addBalance.addEventListener('click', function(){
    balanceWindow.classList.remove('active'); 
})
// Закрытие модального окна
okay.addEventListener('click', function(){
    if(input.value < 0){
        pb.classList.add('active')
    }
    else if(input.value > 1000000){
        bMoreM.classList.add('active')
        balanceWindow.classList.add('active') 
    }
    else{
        const input_num = input.value;
        balanceWindow.classList.add('active') 
        balance.textContent = +balance.textContent + +input_num
        plusBet.textContent = "+" + input_num
        setTimeout(()=>{
            plusBet.textContent = " "
        }, 2 *1000)
        input.value = 0
    }
})
bMoreM_okay.addEventListener('click', ()=>{
    bMoreM.classList.remove('active')
    balanceWindow.classList.remove('active') 
})

// ставка меньше нуля
betMinus__okay.addEventListener('click', ()=>{
    betMinus.classList.remove('active')
})

// ставки должны быть больше нуля
betZero__okay.addEventListener('click', ()=>{
    betZero.classList.remove('active')
})

// закрытие окна пополнения баланса
cross.addEventListener('click', ()=>{
    balanceWindow.classList.add('active')
    input.value = 0
})

// рандомное значение
const randomNum = (i)=>{
    return Math.floor(Math.random() * i);
}
let test = 0
//функция показа выигрыша
const win = (obj) =>{
    for(key in obj){
        res += obj[key]
    }
    test = gainBet + res
    plusBet.innerHTML += +test
    if(test > 0){
        plusBet.style.color = "green"
        console.log("green")
    }
    else if(test < 0){
        console.log("red")
        plusBet.style.color = "red"
    }
    else{
        console.log("error")
        plusBet.style.color = "rgb(139, 139, 139)"
    }
    console.log(test)
    balance.innerHTML = +balance.innerHTML +  res
    console.log(res)
    setTimeout( () => {
        plusBet.innerHTML = ""
    }, 2 * 1000 )
    obj = {};
    return res
}
let php = {}
// начать игру
play.addEventListener('click', () =>{
    // очищение результатов
    result[0].innerHTML = " "
    result[1].innerHTML = " "
    result[2].innerHTML = " " 

    resultValue = [];

    let bm = [+crownInput.value, +heartInput.value, +diamondsInput.value, +spadesInput.value, +clubsInput.value, +anchorInput.value]

    let bmTwo = bm.every(isPositive)

    betsSum = +crownInput.value + +heartInput.value + +diamondsInput.value + +spadesInput.value + +clubsInput.value + +anchorInput.value;

    if(betsSum == 0){
        betZero.classList.add('active')
    }
    else{
        if(bmTwo !== false){
            php.crown = bm[0];
            php.heart = bm[1];
            php.diamonds = bm[2];
            php.spades = bm[3];
            php.clubs = bm[4];
            php.anchor = bm[5];
            
            let inBalance = +balance.innerHTML
            
            let gain = {}
            
            gain.lenght = 0;
            
            let allInputs = document.querySelectorAll('.input__bet')
            
            allInputs.forEach(input =>{
                if(input.value !== 0){
                    gain[input.name] = +input.value
                }
            })
                
            if(betsSum > inBalance){
                error.classList.add('active')
            }
            else{
                // блокировка кнопки
                play.setAttribute('disabled', 'disabled');  
                roll(randomNum(6))
                .then((promiseResult) => {
                    result[0].innerHTML = iconsArr[promiseResult]
                    resultValue.push(promiseResult)
                })
                .then(() => {
                    return roll(randomNum(6)).then((promiseResult) => {             
                        result[1].innerHTML = iconsArr[promiseResult]
                        resultValue.push(promiseResult)
                    })
                })
                .then(() => {
                    return roll(randomNum(6)).then((promiseResult) => {
                        result[2].innerHTML = iconsArr[promiseResult]
                        resultValue.push(promiseResult)
                    })
                })
                .then(() => {
                    const result = {}
                    
                    resultValue.forEach(winbet => {
                        for (bet in gain) {
                            if (bet === winbet) {
                                if(result.hasOwnProperty(bet)){
                                    result[bet] += gain[bet]
                                }
                                else{
                                    result[bet] = gain[bet]
                                }
                            }
                        }
                    })  
                    play.removeAttribute('disabled')
                    php.first = resultValue[0]
                    php.second = resultValue[1]
                    php.third = resultValue[2]
                    php.balance = balance.textContent
                    gainBet = res - betsSum
                    console.log(gainBet)
                    let betValue = +balance.innerHTML - betsSum
                    balance.innerHTML = betValue
                    win(result)
                    php.betValue = test
                    saveGain(php)
                })
                .then(()=>{
                    crownInput.value = " "
                    heartInput.value = " "
                    diamondsInput.value = " "
                    spadesInput.value = " "
                    clubsInput.value = " "
                    anchorInput.value = " "
                    betsSum = 0
                    res = 0
                    gainBet = 0
                })
            }
        }
        else{
            betMinus.classList.add('active')
        }
    }
})

okayError.addEventListener('click', () =>{
    error.classList.remove('active')
})

//сама игра(ролл)
const roll = async (i) => {

    let promise = new Promise((resolve, reject) => {
    
        let indexOld;
    
        let iterations = 0;
    
        let index = 0;
    
        const interval = setInterval(() => {
    
            let indexNow = randomNum(6);
            betsBox[indexNow].classList.add('active');
    
            if (indexOld === 0 || !!indexOld) {
                betsBox[indexOld].classList.remove('active');
            }
            
            indexOld = indexNow

            if(iterations == i){
                betsBox[indexOld].classList.remove('active')
                iteration = 0
                index++
                clearInterval(interval)
                resolve(inputsName[indexNow])
                gain.push(inputsName[indexNow])
            }
            iterations++
        }, 250)
        

    })

    return await promise;
 
}
//запрос php
const saveGain = (e)=>{
    fetch('code.php', {
        method: 'POST',
        body: JSON.stringify(e)
    })
}



//получение данных для истории игр
const getHistory = ()=>{
    let sHistory = document.querySelector('.sHistory');
    let response = fetch('script.json' + `?test=${Math.random()}`, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        let b = data.bets
        sHistory.innerHTML = ' '
        b.forEach(function(item, i){
            const someDiv = document.createElement('div');
            someDiv.className = "block"
            someDiv.innerHTML = `
            <div class="imgBets">
                <div class="box">${data.bets[i].crown}</div>
                <div class="box">${data.bets[i].heart}</div>
                <div class="box">${data.bets[i].diamonds}</div>
                <div class="box">${data.bets[i].spades}</div>
                <div class="box">${data.bets[i].clubs}</div>
                <div class="box">${data.bets[i].anchor}</div>
            </div>
            <div class = "winBets">
                <div class="blocks">${iconsArr[data.win[i].first]}</div>
                <div class="blocks">${iconsArr[data.win[i].second]}</div>
                <div class="blocks">${iconsArr[data.win[i].third]}</div>
            </div>
            <div class="gain">${data.win[i].betValue}</div>`

            sHistory.append(someDiv)
        })
    })
}

//закрытие по Escape
document.addEventListener('keydown', (e)=>{
    if(e.code == 'Escape'){
        gameHistory.classList.remove('active')
    }
})
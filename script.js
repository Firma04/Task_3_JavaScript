'use strict';

// let num = 20;

// function ShowFirstMessage(text){
//     alert(text);
//     console.log(num);
// }
/*---------- */
// ShowFirstMessage("Hello world");
// console.log(num);

/*---------- */
// let calc = function(a,b){
//     return(a + b);
// }
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?: ", " ");
    time = prompt("Введите дату в формате YYYY-MM-DD: ", " ");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?: ", " ");
    }
}
start();


let appData = {
    cash: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

/*<!------------------------Использование цикла do while #1--------------------------!>*/
function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце ", " "),
            b = prompt("Во сколько обойдется ?", " ");

        if(typeof(a)=== "string" && (typeof(a) != null && (typeof(b) != null && a !="" && b !="" && a.length < 50))){
            console.log("done");
        appData.expenses[a] = b;
        } else {
            console.log("Повтор");
            i = i - 1;
        }
    }
}
chooseExpenses();

function detectDayBudget(){
    appData.DayBudget = (appData.cash / 30).toFixed();
    alert("Ежедневный бютжет: " + appData.DayBudget + "USD - функция");
}
detectDayBudget();

//appData.moneyEveryDay = (appData.cash / 30).toFixed();
//alert("Ежедневный бютжет: " + appData.moneyEveryDay + "USD");

function detectLevel(){
    if (appData.DayBudget > 1000){
        console.log("Доход слишком большой: " + appData.DayBudget + " USD");
    } else if (appData.DayBudget > 400 && appData.DayBudget < 1000){
        console.log("Доход достаточный: " + appData.DayBudget + " USD");
    } else if (appData.DayBudget < 400){
        console.log("Нужно улучшать доход: " + appData.DayBudget + " USD");
    } else {
        console.log("Ошибка: ");
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какая сума накопления? "),
            percent = +prompt("Под какой процент? ");
        appData.monthIncome = save/100/12*percent;
        alert("Доход с вашего депозита составляет: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i <= 2; i++){
        let dontOptExpenses = prompt("Не обезательные росходы: ", "");
        appData.optionalExpenses[i] = dontOptExpenses;
        //console.log(appData.optionalExpenses); - не обезательно 
    }
}
chooseOptExpenses();


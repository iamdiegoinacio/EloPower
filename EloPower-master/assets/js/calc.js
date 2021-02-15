/*GLOBAL VAR*/
var i = 0;

/*SELEÇÃO DO SELECT PAI E FILHO DO ELO ATUAL*/
var eloCurrentSelect = document.querySelector('#eloCurrentSelect');
var divisionCurrentSelect = document.querySelector('#divisionCurrentSelect');

/*SELEÇÃO DO SELECT PAI E FILHO DO ELO OBJETIVO*/
var eloGoalSelect = document.querySelector('#eloGoalSelect');
var divisionGoalSelect = document.querySelector('#divisionGoalSelect');

/*SELEÇÃO DOS INPUTS DE VALORES DE DIVISÃO*/
var currentDivisionValue = document.querySelector('#currentDivisionValue');
var goalDivisionValue = document.querySelector('#goalDivisionValue');

/*SELEÇÃO DOS INPUTS HIDDEN QUE ARMAZENAM A ESCOLHA DE ELO E DIVISÃO ATUAL*/
var currentEloChoice = document.querySelector("#currentEloChoice");
var currentDivisionChoice = document.querySelector("#currentDivisionChoice");

/*SELEÇÃO DOS INPUTS HIDDEN QUE ARMAZENAM A ESCOLHA DE ELO E DIVISÃO DE OBJETIVO*/
var goalEloChoice = document.querySelector("#goalEloChoice");
var goalDivisionChoice = document.querySelector("#goalDivisionChoice");

/*SELEÇÃO DO SPAN QUE MOSTRA O RESULTADO DO CALCULO NA TELA*/
var fValueSpace = document.querySelector("#fValueSpace");

/*SELEÇÃO DO BOTÃO DE CALCULO*/
var btnCalc = document.querySelector("#btnCalc");
var btnCalcMb = document.querySelector("#btnCalcMb");

/*DIVISION PRICE OBJECT*/
divisionPrice = {
    iron: 8,
    bronze: 10,
    silver: 15,
    gold: 20,
    platinum: 30
}

/*ELO LIST OBJECT*/ 
eloList = {
    iron: "iron",
    bronze: "bronze",
    silver: "silver",
    gold: "gold",
    platinum: "platinum",
    diamond: "diamond"
}


/*APPLY DIVISION NUMBER*/
var iron = ["0", "1", "2", "3", "4"]; //0 É NULO, De 1 a 4 é FERRO (IV, III, II, I)
var bronze = ["5", "6", "7", "8", "9"];
var silver = ["10", "11", "12", "13", "14"];
var gold = ["15", "16", "17", "18", "19"];
var platinum = ["20", "21", "22", "23", "24"];
var diamond = ["25", "26", "27", "28", "29"];
var choiceNull = ["0", "5", "10", "15", "20", "25"];


/*FUNÇÃO AUXILIADO DA applyDivisionNumber PARA INSERIRIR O ARRAY*/
function applyDivision(flagSelect, array) {
    for (i = 0; i < 6; i++) {
        flagSelect.options[i].value = `${array[i]}`
    }
}

/*APLICA OS RESPECTIVOS NÚMEROS DAS DIVISÕES DEPENDENDO DA
ESCOLHA DO ELO NA CALCULADORA, OS NÚMEROS CORRESPONDENTES 
AS DIVISÕES ESTÁ NO ARQUIVO DATABASE.JS*/
function applyDivisionNumber(selectFather, flagSelect) {
    if (selectFather.value === 'iron') {
        applyDivision(flagSelect, iron);

    } else if (selectFather.value === 'bronze') {
        applyDivision(flagSelect, bronze);

    } else if (selectFather.value === 'silver') {
        applyDivision(flagSelect, silver);

    } else if (selectFather.value === 'gold') {
        applyDivision(flagSelect, gold);

    } else if (selectFather.value === 'platinum') {
        applyDivision(flagSelect, platinum);

    } else if (selectFather.value === 'diamond') {
        applyDivision(flagSelect, diamond);
    } else {
        return null;
    }
}

/*APPLY ELO AND DIVISION CHOICE*/
/*função que insere a divisão o elo escolhido*/
function eloChoice(inputElo, selectElo) {
    return inputElo.value = selectElo.value;
}

/*função que insere a divisão escolhida*/
function divisionChoice(inputDivision, selectDivision ) {
    inputDivision.value = selectDivision.options[selectDivision.options.selectedIndex].value;
}

/*Função que aplica a number flag nos values dos options do select de elo*/
eloCurrentSelect.addEventListener("click", () => {
    applyDivisionNumber(eloCurrentSelect, divisionCurrentSelect);
});

eloCurrentSelect.addEventListener("click", () => {
    eloChoice(currentEloChoice, eloCurrentSelect);
});

divisionCurrentSelect.addEventListener("click", () => {
    divisionChoice(currentDivisionChoice, divisionCurrentSelect);
});

/*Escuta o evento click nos selects de objetivo*/
eloGoalSelect.addEventListener("click", () => {
    applyDivisionNumber(eloGoalSelect, divisionGoalSelect);
});

eloGoalSelect.addEventListener("click", () => {
    eloChoice(goalEloChoice, eloGoalSelect);
});

divisionGoalSelect.addEventListener("click", () => {
    divisionChoice(goalDivisionChoice, divisionGoalSelect);
});

function calcEloJob(currentDivisionChoice, goalDivisionChoice, divisionPrice){
    var currentDivision = parseInt(currentDivisionChoice.value);
    var goalDivision = parseInt(goalDivisionChoice.value);
    var finalPrice = 0;

    while(currentDivision <= goalDivision){
        if(currentDivision > 0 && currentDivision < 5){
            finalPrice+=divisionPrice.iron;

        }else if(currentDivision > 5 && currentDivision < 10){
            finalPrice+=divisionPrice.bronze;

        }else if(currentDivision > 10 && currentDivision < 15){
            finalPrice+=divisionPrice.silver;

        }else if(currentDivision > 15 && currentDivision < 20){
            finalPrice+=divisionPrice.gold;

        }else if(currentDivision > 20 && currentDivision < 25){
            finalPrice+=divisionPrice.platinum;
        }

        currentDivision++;
    }
    
    return finalPrice;
}

$('#btnCalc').on('click touchstart', function(event) {
    event.preventDefault();
    var finalPrice = 0;

    finalPrice = calcEloJob(currentDivisionChoice, goalDivisionChoice, divisionPrice); 
    
    fValueSpace.innerHTML = finalPrice.toString();
});



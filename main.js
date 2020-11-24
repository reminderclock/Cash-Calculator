
function inputData() {
    document.getElementById('output').style.display='none';
    const inputMoney = document.getElementById('inputMoney');
    inputMoney.addEventListener('input', event =>calculateCnt(event));
}

function calculateCnt(event) {
    let money = event.target.value;
    let paperCnt =[];
    let paper = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    for(let i =0; i<paper.length; i++) {
        paperCnt.push(Math.floor(money/paper[i]));
        money = money%paper[i];
    }
    displayCnt(paperCnt, paper);
}

function displayCnt(paperCnt, paper) {
    document.getElementById('output').style.display='';
    for(let i=0; i<paperCnt.length; i++) {
    const container = document.getElementById(`card-block${i}`);
    if(paperCnt[i]===0) {
        document.getElementById(`card-block${i}`).style.display='none';
    }
    else
        document.getElementById(`card-block${i}`).style.display='';
        if(i<=3) {
            
            container.innerHTML= `<div class="moneyBox" id="index${i}">${paper[i]}원: ${paperCnt[i]}(장)</div>`;
        }
        else{
            container.innerHTML= `<div class="moneyBox" id="index${i}">${paper[i]}원: ${paperCnt[i]}(닢)</div>`;
        }

    }
}

inputData();

const CurrentBalcance = document.querySelector("#CurrentBalcance");
const Amtname = document.querySelector("#amountName");
const typEE = document.querySelector("#amountType");
const inN = document.querySelector("#inAmount");
const out = document.querySelector("#outAmount");
const clearAll = document.getElementById("span");

let totalIn = 0;
let totalOut = 0;
let currTotal = 0;

function addTransaction() {

    const valAMount = parseFloat(typEE.value);
    const nameAmt = Amtname.value.trim();

    if(!nameAmt || isNaN(valAMount) || valAMount === 0){
        alert("Invalid entery! try again.");
        return;
    }

    if(valAMount > 0){
        totalIn = Math.abs(valAMount);
        currTotal += valAMount;
        inN.textContent = `$${totalIn.toFixed(2)}`;
    } else if(valAMount < 0){
        totalOut = Math.abs(valAMount);
        currTotal += valAMount;
        out.textContent = `$${totalOut.toFixed(2)}`;
    }

    CurrentBalcance.textContent = `$${currTotal.toFixed(2)}`;
    addRecord(nameAmt, valAMount);

    Amtname.value = "";
    typEE.value = "";

}

const recordAmount = document.querySelector(".recordAmount");
function addRecord(nameAmt, valAMount){
    const letLi = document.createElement("li");
    letLi.innerHTML = nameAmt + " ";

    const letSpanAmt = document.createElement("span");
    letSpanAmt.textContent = (valAMount > 0 ? '+': '') + valAMount.toFixed(2);
    letLi.appendChild(letSpanAmt);

    recordAmount.appendChild(letLi);

}

clearAll.addEventListener("click", ()=>{
    recordAmount.innerHTML = '';
})


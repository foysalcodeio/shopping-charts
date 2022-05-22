document.getElementById('case-plus').addEventListener('click', function(){

    /*
    const caseInput = document.getElementById('case-numbers');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    
    const total = document.getElementById('pana-total').innerHTML;
    const totalCount = parseFloat(total);
    const NewTotal = caseInput.value * totalCount;
    document.getElementById('pana-total').innerHTML = NewTotal;
    console.log(NewTotal);

   const PanaTotal = caseInput.value * 600;
   document.getElementById('pana-total').innerText = PanaTotal;
   */
  handleProductChange(true);

})

document.getElementById('case-minus').addEventListener('click', function(){
    handleProductChange(false);
})

function handleProductChange(IsIncrease){
    const caseInput = document.getElementById('case-numbers');
    const caseCount = parseInt(caseInput.value);
    //const caseNewCount = caseCount - 1;
    let caseNewCount = caseCount;
    if (IsIncrease == true){
        caseNewCount = caseCount + 1;
    }
    else{
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    
    const PanaTotal = caseInput.value * 600;
    document.getElementById('pana-total').innerHTML = PanaTotal;
}



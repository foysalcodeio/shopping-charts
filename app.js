function handleProductChange(IsIncrease){
    const caseInput = document.getElementById('case-numbers');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (IsIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    else{
        caseNewCount = caseCount + 1;
    }
    caseInput.value = caseNewCount;
    
    const PanaTotal = caseInput.value * 600;
    document.getElementById('pana-total').innerHTML = PanaTotal;
}

// onclick = document.getElementById('id').addEventListener('click', function(){.... data .... })

document.getElementById('pvc-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('pvc-number');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    
    const pvcTotal = caseInput.value * 500;
    document.getElementById('pvc-total').innerText = pvcTotal;
})

document.getElementById('pvc-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('pvc-number');
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;

    const pvcTotal = caseInput.value * 500;
    document.getElementById('pvc-total').innerText = pvcTotal;
})
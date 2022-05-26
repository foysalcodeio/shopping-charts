function handleProductChange(product, IsIncrease){
    const caseInput = document.getElementById(product + '-numbers');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (IsIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    else{
        caseNewCount = caseCount + 1;
    }
    caseInput.value = caseNewCount;
    
    let Total = 0;
    if (product == 'pvc'){
        Total =  caseInput.value * 500;
    }
    if(product == 'pana'){
        Total = caseInput.value * 600;
    }
    document.getElementById(product + '-total').innerHTML = Total;
    calculateTotal();
}

function calculateTotal(){
    const pvcInput = getInputNumber('pvc');
    const panaInput = getInputNumber('pana');

    const subPrice = pvcInput * 500 + panaInput * 600;
    document.getElementById('sub-price').innerText = subPrice;
}

function getInputNumber(products){
    const productInput = document.getElementById(products + '-numbers');
    const productsCount = parseInt(productInput.value);
    return productsCount;
}


// function handleProductChange(IsIncrease){
//     const caseInput = document.getElementById('case-numbers');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (IsIncrease == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     else{
//         caseNewCount = caseCount + 1;
//     }
//     caseInput.value = caseNewCount;
    
//     const PanaTotal = caseInput.value * 600;
//     document.getElementById('pana-total').innerHTML = PanaTotal;
// }

// onclick = document.getElementById('id').addEventListener('click', function(){.... data .... })

// function pvcHandleProduct(updates)
// {
//     const caseInput = document.getElementById('pvc-number');
//     const caseCount = parseInt(caseInput.value);
//     //const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(updates == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(updates == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
    
//     caseInput.value = caseNewCount;

//     const pvcTotal = caseInput.value * 500;
//     document.getElementById('pvc-total').innerText = pvcTotal;
// }
//* ==================== Get Input ======================
let inpBudget = document.getElementById('inpBudget')
let inpExpName = document.getElementById('inpExpName')
let inpExpenses = document.getElementById('inpExp')

//* ==================== Get title ======================
let textBudget = document.getElementById('Bug_text')
let textExpenses = document.getElementById('Exp_text')
let textBalance = document.getElementById('Bal_text')
//* ==================== Get list ======================
let addlist = document.getElementById('ulist')
//* ==================== Get button ======================
let btnBudget = document.getElementById('btnBudget')
let btnExpenses = document.getElementById('btnExp')
let btnNewBudget = document.getElementById('btnNew')

//* ==================== Add Budget ======================
btnBudget.addEventListener('click',()=>{
    if(inpBudget.value != ""){
        textBudget.innerText = inpBudget.value
        textBalance.innerText = inpBudget.value
        inpBudget.value = ''
    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please input filled!",
          });
    }
   
})

//* ====================Add Expenses ======================
btnExpenses.addEventListener('click',()=>{
       
    if(inpExpName.value&&inpExpenses.value != ''){
        textExpenses.innerText = inpExpenses.value
        textBalance.innerText = textBalance.innerText - textExpenses.innerText
        addlist.innerHTML +=` <li class="list_Title">
                    <div class="list_item">${inpExpName.value}</div>
                    <div class="list_item">${inpExpenses.value}</div>
                    <div class="list_item"><button class="list_btn">Delete</button></div>
                    
                    </li>`
                    Swal.fire({
                        title: "Good job!",
                        text: "Add Expenses!",
                        icon: "success"
                      });
    }else if(textBalance.innerText == "000"){
        Swal.fire({
            icon: "error",
            title: "No Balance!",
            text: "Please Budget Set!",
          });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please input filled!",
          });
    }
 
    inpExpName.value = ''
    inpExpenses.value = ''

})
//* ====================button New Budget ======================
btnNewBudget.addEventListener('click',()=>{
    textBudget.innerText = ''
    textBalance.innerText = ''
    textExpenses.innerText = ''
    addlist.innerHTML = ''
})
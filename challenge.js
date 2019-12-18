let counter = document.getElementById('counter')
let pauseSignal = document.getElementById("pause")

function addOneCount(){
  counter.innerText = parseInt(counter.innerHTML)+1;
    }


var t1 = setInterval(addOneCount,1000)


function minusOneCount(){
  let i = parseInt(counter.innerHTML,10);
  counter.innerHTML = i-1
}

let mybtns= document.getElementsByTagName('button')

function pause(){
    if (pauseSignal.innerText =="pause"){
      clearInterval(t1)
      pauseSignal.innerText = "resume"
      disableButton();
    }else{
      t1 = setInterval(addOneCount,1000)
      pauseSignal.innerText = "pause"
      recoverButton()
    }
}

function disableButton(){
  for (let item of mybtns){
    item.disabled = true
  }
  mybtns[3].disabled = false
}

function recoverButton(){
  for (let item of mybtns){
    item.disabled = false
  }
}

let numberCounts = {}

function likeCounter(){
  let number = counter.innerText
  if (numberCounts[number]==undefined){
    numberCounts[number]=[number]
  }else{
    numberCounts[number].push(number)
  }
  printCounter(numberCounts[number].length,number)
}

function printCounter(clicks,number){
  let likeField = document.getElementsByClassName("likes")[0]
  if (clicks == 1){
    likeField.innerHTML += `<li id=${number}> ${number} has been liked 1 time.</li>`
  }else{
    let el = document.getElementById(number)
    el.remove()
    likeField.innerHTML += `<li id=${number}> ${number} has been liked ${clicks} times.</li>`
  }
}

function submitForm(e){
  e.preventDefault();
  let value = document.getElementById("comment-input").value
  let list = document.getElementById("list")
  list.innerHTML+=`<p>${value}</p>`
}

let form = document.getElementById("comment-form")
form.addEventListener('submit',submitForm)



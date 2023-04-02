console.log("Welcome To The XOX Game Show")
let kou=new Audio("background.mp3")
let bro=new Audio("xoxtype.mp3")
let prav=new Audio("success.mp3")
let turn="X"
let gameisdone=false;
// function to change the turn 
const changeturn=()=>{
    return turn==="X"?"O":"X"
}

// function to check for a win 
const checkwin=()=>{
    let innerboxes=document.getElementsByClassName('innerboxes');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((innerboxes[e[0]].innerText === innerboxes[e[1]].innerText) && (innerboxes[e[2]].innerText === innerboxes[e[1]].innerText) && (innerboxes[e[0]].innerText!== "")){
            document.querySelector('.information').innerText = innerboxes[e[0]].innerText +" has won "
            // document.querySelector('.left').style.width="0px"
            // document.querySelector('.left').style.height="0px"
            gameisdone=true
            document.querySelector('.beginningindication').getElementsByTagName('img')[0].style.width="289px"
            prav.play();
        }
        // else if(gameisdone==false){
        //     document.querySelector('.beginningindication1').getElementsByTagName('img')[0].style.width="289px"
        // }
    })
}

// the logic of the game (taking the turns)
kou.play();
let box=document.getElementsByClassName("boxes");
Array.from(box).forEach(element=>{
    let innerboxes=element.querySelector('.innerboxes');
    element.addEventListener('click',()=>{
        if(innerboxes.innerText===''){
            innerboxes.innerText=turn;
            turn=changeturn();
            bro.play();
            checkwin();
            if(!(gameisdone)){
            document.getElementsByClassName("information")[0].innerText="Turn For "+turn
        }
    }
    })
})
btn.addEventListener('click',()=>{
    let happy=document.querySelectorAll('.innerboxes');
    Array.from(happy).forEach(element => {
        element.innerText=""
    });
    turn="X";
    gameisdone=false;
    document.getElementsByClassName("information")[0].innerText="Turn For "+turn
    document.querySelector('.beginningindication').getElementsByTagName('img')[0].style.width="0px"
    })

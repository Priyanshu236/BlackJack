function ageindays() {
var year=prompt('enter year');
var ans=(2021-year)*365;
var h=document.createElement('h2');
var text=document.createTextNode('You are '+ans+' days old');
h.setAttribute('id','ageindays');
h.appendChild(text);
document.getElementById('result').appendChild(h);
}
function reset(){
    document.getElementById('ageindays').remove();
}






function generatecat(){
    var image=document.createElement('img');
    var div=document.getElementById('cat-cont');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}








function rpsgame(yourchoice){

var humanchoice,botchoice;
humanchoice=yourchoice.id;


botchoice=randomtochoice(random());
var results=decidewinner(humanchoice,botchoice);
message=finalmessage(results);
console.log(message);
rpsfrontend(humanchoice,botchoice,message);
}

function random(){
    return Math.floor(Math.random()*3);
    }


    function randomtochoice(number){
        return ['rock','paper','scissors'][number];
    }


    function decidewinner(yourchoice,computerchoice){
        var rpsdatabase={
            'rock': {'scissors': 1, 'rock': 0.5,'paper': 0},
            'paper': {'scissors': 0, 'rock': 1,'paper': 0.5},
            'scissors': {'scissors': 0.5, 'rock': 0,'paper': 1},
        };
        var yourscore=rpsdatabase[yourchoice][computerchoice];
        var computerscore=rpsdatabase[computerchoice][yourchoice];
        return [yourscore,computerscore];
    }


    function finalmessage([yourscore,botscore]){
        if(yourscore===0){
            return {'message':'You lost!','color':'red'};
        } else if(yourscore ===0.5){
            return {'message':'You tied!','color':'yellow'};
        }else{
            return {'message':'You won!','color':'green'};
        }
    }

    function rpsfrontend(humanimage,botimage,finalmessage){
        var imagesdatabase={
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humandiv= document.createElement('div');
        var botdiv= document.createElement('div');
        var msgdiv= document.createElement('div');
        humandiv.innerHTML="<img src='"+imagesdatabase[humanimage]+"' height: 150 width: 150 style='box-shadow: 0px 10px 30px rgba(0,0,255)'>"
        msgdiv.innerHTML="<h1 style='color: "+finalmessage['color']+"; font-size: 4rem; margin: 20px;'>"+finalmessage['message']+"</h1>"
        botdiv.innerHTML="<img src='"+imagesdatabase[botimage]+"' height: 150 width: 150 style='box-shadow: 0px 10px 30px rgba(238,24,24)'>"
        document.getElementById('flex-rps-div').appendChild(humandiv);
        document.getElementById('flex-rps-div').appendChild(msgdiv);
        document.getElementById('flex-rps-div').appendChild(botdiv);
        
    }
//
//
//
//
//
//
//
//
//
// function buttoncolorchange(){

// }
var allbuttons=document.getElementsByTagName('button');
// console.log(allbuttons[1]);
var copybuttons=[];
for(let i=0;i<allbuttons.length;i++){
    copybuttons.push(allbuttons[i].classList[0]); 
}
console.log(allbuttons);
// console.log(allbuttons[0].classList);
function buttoncolorchange(thingy){
if(thingy.value==='red'){
    buttonred();
}else if(thingy.value==='green'){
    buttongreen();
}else if(thingy.value==='random'){
    buttonrandom();
}else if(thingy.value==='reset'){
    buttonreset();
}}

function buttonred(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add('btn-2');
    }
}
function buttongreen(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add('btn-3');
    }
}
function buttonreset(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        allbuttons[i].classList.add(copybuttons[i]);
    }
}
function buttonrandom(){
    for(let i=0;i<allbuttons.length;i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[0]);
        let rand=Math.floor((Math.random())*copybuttons.length);
        allbuttons[i].classList.add(copybuttons[rand]);
    }
}


//////
let blackjackgame={
    'you':{'scoreSpan': '#yourscore','div':'#yourbox','score':0},
    'dealer':{'scoreSpan':'#Dealerscore','div':'#dealer-box','score':0},
    'cards':["2","3","4","5","6","7","8","9","10","A","J","K","Q"],
    'wins':0,'losses':0,'draw':0
}
var snd = new Audio("../cardPlace2.wav"); // buffers automatically when created

let flag1=1;
let flag2=0;
let flag3=0;
let YOU=blackjackgame['you'];
let DEALER=blackjackgame['dealer'];
document.querySelector('#hit').addEventListener('click',blackjackhit);

document.querySelector('#stand').addEventListener('click',blackjackstand);
document.querySelector('#deal').addEventListener('click',blackjackdeal);


function blackjackhit(){
    
    if(flag1==1){
        document.getElementById('message').innerHTML="Let's Play"
        document.getElementById('message').style.color='black';
        showcard(YOU);
    }
}

 


function blackjackstand(){
        flag1=0;
        flag3=1;
        function blackjack(){
            document.getElementById('message').innerHTML="Let's Play"
        document.getElementById('message').style.color='black';
            if(DEALER['score']>15){
                
                computewinner();
            }
            else{
                
                showcard(DEALER);
            }
        }
        myVar= setInterval(blackjack,1000);
}
function myStopFunction() {
    window.clearInterval(myVar);
  }
// let id=blackjackstand();


function showcard(activeplayer){
    snd.play();
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scoreSpan']).innerHTML='YOU BUST!';
        flag1=0;
    }else{

        let image=document.createElement('img');
        let k=randomno();
        let m=randomL();
    if(k==9){
        if(activeplayer['score']+11<=21)
        activeplayer['score']+=11;
        else
    activeplayer['score']+=1;
    }
    
    else if(k>=10)
    activeplayer['score']+=10;
    else
    activeplayer['score']+=k+2;
    if(activeplayer['score']>21)
    document.querySelector(activeplayer['scoreSpan']).innerHTML='YOU BUST!';
    else
    document.querySelector(activeplayer['scoreSpan']).innerHTML=activeplayer['score'];

    console.log(activeplayer['score']);
    image.src=(`../PNG/${blackjackgame['cards'][k]}${m}.png`);
    image.style.width = '20%'
    image.style.height = 'auto'
    document.querySelector(activeplayer['div']).appendChild(image);
}
}




function blackjackdeal(){
        
        if(flag3==1){
            let snd2=new Audio('../cardOpenPackage1.wav')
            snd2.play();
        let yourimages=document.getElementById('yourbox').querySelectorAll('img');
        for( i=0;i<yourimages.length;i++){
            yourimages[i].remove();
        }
        let dealerimages=document.getElementById('dealer-box').querySelectorAll('img');
        for( i=0;i<dealerimages.length;i++){
            dealerimages[i].remove();
        }
        // if(YOU['score']>21)
        // YOU['score']=0;
        // if(DEALER['score']>21)
        // DEALER['score']=0;
        
        YOU['score']=0;
        DEALER['score']=0;
        document.querySelector('#yourscore').innerHTML=0;
        document.querySelector('#Dealerscore').innerHTML=0;
        document.getElementById('message').innerHTML="Let's Play";
        document.getElementById('message').style.color='black';
    }
        flag3=0;
    
    }
    
    
    function computewinner(){
        myStopFunction();
        flag3=1;
        
        if(YOU['score']>21)
        YOU['score']=0;
        if(DEALER['score']>21)
        DEALER['score']=0;
        if(YOU['score']>DEALER['score']){
            let snd4=new Audio('../sounds/cash.mp3');
            snd4.play();
            document.getElementById('message').innerHTML="You Won";
            document.getElementById('message').style.color='green';
            blackjackgame['wins']++;
            document.getElementById('win').textContent=blackjackgame['wins'];
            // YOU['score']=0;
            // DEALER['score']=0;
            flag1=1;
        }
        else if(YOU['score']==DEALER['score']){
            document.getElementById('message').innerHTML="Draw";
            document.getElementById('message').style.color='black';
            blackjackgame['draw']++;
            
            document.getElementById('draw').textContent=blackjackgame['draw'];
            // YOU['score']=0;
            // DEALER['score']=0;
            flag1=1;
        }else{
            let snd3=new Audio('../sounds/aww.mp3');
            snd3.play();
         document.getElementById('message').innerHTML="You Lost";
         document.getElementById('message').style.color='red';
         blackjackgame['losses']++;
         document.getElementById('losses').textContent=blackjackgame['losses'];
        //  YOU['score']=0;
        //  DEALER['score']=0;
         flag1=1;
        }
 }

 function randomno(){
    let ind=Math.floor(Math.random()*13);
     return ind;
 }
 function randomL(){
     let arr=['H','D','S','C']
     let ind=Math.floor( Math.random()*4);
      return arr[ind];
  }
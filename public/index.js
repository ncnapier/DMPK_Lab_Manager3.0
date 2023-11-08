

//arrays used for class variables for intruments:
const instruments = ["Old4500", "New4500", "6500", "5500"];
const instrumentStatus = ["In use", "Available", "Maintenance"];
const initials = ["nn", "ob", "kw", "sc", "izi", "hm"];
//////////////////////////////////////////////////////////////////////////


//set instrument status:
// ###NOTE### consider eliminating these variables and just using numbers when declaring instances of new instruments? 
var sa = 0;
var sb = 1;
var sc = 0;
var sd = 2;

//set user initials:
var ia = 2;
var ib = 3;
var ic = 0;
var id = 1;
/////////////////////////////////////////////////////////////////////////


//instrument class constructor function:
function Instrument(title, instrumentStatus, user, details){
    this.title = title;
    this.instrumentStatus = instrumentStatus;
    this.user = user;
    this.details = details;
    this.structure = function(){
        document.getElementById('instruments').appendChild(document.createElement('section')).setAttribute('id',title);
        document.getElementById(title).appendChild(document.createElement('h2')).setAttribute('id', title + 'name');
        document.getElementById(title + 'name').appendChild(document.createElement('p').appendChild(document.createTextNode(title)));
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'status');
        document.getElementById(title + 'status').appendChild(document.createElement('p').appendChild(document.createTextNode("Status:  " + instrumentStatus)));
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'user');
        document.getElementById(title + 'user').appendChild(document.createElement('p').appendChild(document.createTextNode("User:  " + user)));
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'details');
        document.getElementById(title + 'details').appendChild(document.createElement('p').appendChild(document.createTextNode("Comments:  " + details)));
        
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//declaring individual instances of instruments:
const fortyFiveHundred = new Instrument(instruments[0], instrumentStatus[sa], initials[ia], "detail");
fortyFiveHundred.structure();

const fiftyFiveHundred = new Instrument(instruments[3], instrumentStatus[sb], initials[ib], "detail");
fiftyFiveHundred.structure();

const newFortyFiveHundred = new Instrument(instruments[1], instrumentStatus[sc], initials[ic], "detail");
newFortyFiveHundred.structure();

const sixtyFiveHundred = new Instrument(instruments[2], instrumentStatus[sd], initials[id], "detail");
sixtyFiveHundred.structure();

//change instrument on display:
function chooseCurrentInstrument(currentInstrument){
    let hiddenInstruments = [];
for(let i = 0; i < instruments.length; i++){
    
    if (instruments[i] != currentInstrument){
        hiddenInstruments.push(instruments[i])
    }
}
for(let j = 0; j < hiddenInstruments.length; j++){
    let currentHide = document.getElementById(hiddenInstruments[j]);
    currentHide.classList.add('hidden');
  }
};
///////////////////////////////////////////////////////////////////////////////

chooseCurrentInstrument(instruments[0]);


//cycle through displayed instrument on click:
let instrumentNumber = 0;

function addCount(){
    instrumentNumber +=1;
    if(instrumentNumber > 3){
        instrumentNumber = 0;
    }
    document.getElementById(instruments[instrumentNumber]).classList.remove('hidden');
    chooseCurrentInstrument(instruments[instrumentNumber])
   }
let thisOne = instruments[instrumentNumber];
document.getElementById('instruments').addEventListener("click", addCount)
////////////////////////////////////////////////////////////////////////////////////



//arrays used for class variables for intruments:
const instruments = ["Old4500", "New4500", "6500", "5500"];
const instrumentStatus = ["Available","In use","Maintenance"];
const initials = ["", "nn", "ob", "kw", "sc", "izi", "hm"];
//////////////////////////////////////////////////////////////////////////


//set instrument status:
// ###NOTE### consider eliminating these variables and just using numbers when declaring instances of new instruments? 
var sa = 1;
var sb = 1;
var sc = 1;
var sd = 1;

//set user initials:
var ia = 0;
var ib = 0;
var ic = 0;
var id = 0;
/////////////////////////////////////////////////////////////////////////


//instrument class constructor function:

//###note### create a function that pushes new instrument information to the 'instruments' array.
function Instrument(title, instrumentStatus, user, trays, details){
    this.title = title;
    this.instrumentStatus = instrumentStatus;
    this.user = user;
    this.trays = trays;
    this.details = details;
    this.namePush = function(title){
        instruments.push(title);
    }
    this.structure = function(){
        //create section for each individual intrumet- id of section will be title:
        document.getElementById('instruments').appendChild(document.createElement('section')).setAttribute('id',title);
        //1a) creates an h2 attribute- the id of this element will be title plus name:
        document.getElementById(title).appendChild(document.createElement('h2')).setAttribute('id', title + 'name');
        //1b)sets the text of the h2 element to the name of the instrument (title):
        document.getElementById(title + 'name').appendChild(document.createElement('p').appendChild(document.createTextNode(title)));
        //2a)status
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'status');
        //2b)status
        document.getElementById(title + 'status').appendChild(document.createElement('p').appendChild(document.createTextNode("Status:  " + instrumentStatus)));
        //3) user
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'user');
        //3) user
        document.getElementById(title + 'user').appendChild(document.createElement('p').appendChild(document.createTextNode("User:  " + user)));
        //4a) trays
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'trays');
        //4b) trays
        document.getElementById(title + 'trays').appendChild(document.createElement('p').appendChild(document.createTextNode("Trays in use:  " + this.trays)));
        //5a) comments
        document.getElementById(title).appendChild(document.createElement('h3')).setAttribute('id', title + 'details');
        //5b) comments
        document.getElementById(title + 'details').appendChild(document.createElement('p').appendChild(document.createTextNode("Comments:  " + details)));
        
    }
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let old4500array = localStorage.getItem('instrument0').split(',');
let new4500array = localStorage.getItem('instrument1').split(',');
let i6500array = localStorage.getItem('instrument2').split(',');
let i5500array = localStorage.getItem('instrument3').split(',');
console.log(i5500array + "4500 array");
console.log(old4500array.slice(9, old4500array.length))
console.log(i6500array)
//declaring individual instances of instruments:

//
const fortyFiveHundred = new Instrument(instruments[0], instrumentStatus[old4500array[1]], initials[old4500array[2]],old4500array[3] + ',' + old4500array[4], old4500array[5]);
fortyFiveHundred.structure();

const fiftyFiveHundred = new Instrument(instruments[3], instrumentStatus[i5500array[1]], initials[i5500array[2]],i5500array[3] + ',' + i5500array[4], i5500array[5]);
fiftyFiveHundred.structure();

const newFortyFiveHundred = new Instrument(instruments[1], instrumentStatus[new4500array[1]], initials[new4500array[2]],new4500array[3] + ',' + new4500array[4], new4500array[5]);
newFortyFiveHundred.structure();

const sixtyFiveHundred = new Instrument(instruments[2], instrumentStatus[i6500array[1]], initials[i6500array[2]],i6500array[3] + ',' + i6500array[4], i6500array[5]);
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

//functioning for submit button
//###note### add event listener on id=submit; function onclick; send key:value pairs from form to local storage. pull key: value pairs from local storage to full out tables

function submitRun(event){
    //event.preventDefault();
    console.log("run submitted")
    let inst = document.getElementById('instrument_select').value;
    let set = document.getElementById('status').value;
    let use = document.getElementById('user').value;
    let tray1 = document.getElementById('trays').value;
    let tray2 = document.getElementById('trays2').value;
    let comm = document.getElementById('comments').value;

    console.log(inst)
    console.log(tray1 + "tray one")
    localStorage.setItem('instrument'+ inst, [inst, set, use, tray1, tray2, comm]);
    console.log(localStorage.getItem('instrument'))
};

document.getElementById('submit').addEventListener('click', submitRun);

// let old4500array = localStorage.getItem('instrument0')
// console.log(old4500array + "4500 array")
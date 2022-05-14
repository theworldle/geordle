window.localStorage;
if (!localStorage.totalgwins){
localStorage.setItem("totalgwins",0);
localStorage.setItem("totalgtime",0);
localStorage.setItem("averagegtime",0);
}

let timer = 0;
window.onload = onTimer();
function onTimer() {
  timer++;
	if (!gameOver){  
		setTimeout(onTimer, 1000);
	}
}

// Toggles the passed button from OFF to ON and vice-versa.
var gameMode = 0;
var gameType = Math.round(Math.random()*1);
var gameName = "";
var hintIndex = 0;
var hintSwitch = 0;
var hintPosn = [];
if (gameType==1){
	//alert("The Mystery Word is a CAPITAL");
	gameName = "CAPITAL";
  } else {
	//alert("The Mystery Word is a COUNTRY");
	gameName = "COUNTRY";
}
function toggle(button) {
  if (button.value == "EASY") {
    button.value = "HARD";
	gameMode = 1;
  } else {
    button.value = "EASY";
	gameMode = 0;
  }
}

var gameOver = false;
if (gameType == 1) {
	var wordList = ["abudhabi","abuja","accra","addisababa","algiers","amman","amsterdam","andorralavella","ankara","antananarivo","apia","ashgabat","asmara","asuncion","athens","baghdad","baku","bamako","bandarseribegawan","bangkok","bangui","banjul","basseterre","beijing","beirut","belgrade","belmopan","berlin","bern","bishkek","bissau","bloemfontein","bogota","brasilia","bratislava","brazzaville","bridgetown","brussels","bucharest","budapest","buenosaires","cairo","canberra","capetown","caracas","castries","chisinau","conakry","copenhagen","dakar","damascus","dhaka","dili","djibouti","dodoma","doha","dublin","dushanbe","freetown","funafuti","gaborone","georgetown","gitega","guatemalacity","hanoi","harare","havana","helsinki","honiara","islamabad","jakarta","jerusalem","juba","kabul","kampala","kathmandu","khartoum","kigali","kingston","kingstown","kinshasa","kualalumpur","kuwaitcity","kyiv","lapaz","libreville","lilongwe","lima","lisbon","ljubljana","lobamba","lome","london","luanda","lusaka","luxembourg","madrid","majuro","malabo","male","managua","manama","manila","maputo","maseru","mbabane","mexicocity","minsk","mogadishu","monaco","monrovia","montevideo","moroni","moscow","muscat","nairobi","nassau","naypyidaw","ndjamena","newdelhi","ngerulmud","niamey","nicosia","nouakchott","nukualofa","nursultan","oslo","ottawa","ouagadougou","oyala","palikir","panamacity","paramaribo","paris","phnompenh","podgorica","portauprince","portlouis","portmoresby","portofspain","portonovo","portvila","prague","praia","pretoria","pristina","pyongyang","quito","rabat","reykjavik","riga","riyadh","rome","roseau","saintgeorges","saintjohns","sanaa","sanjose","sanmarino","sansalvador","santiago","santodomingo","satome","sarajevo","seoul","singapore","skopje","sofia","srijayawardenepurakotte","stockholm","sucre","suva","taipei","tallinn","tarawa","tashkent","tbilisi","tegucigalpa","tehran","thimphu","tirana","tokyo","tripoli","tunis","ulaanbaatar","vaduz","valletta","vaticancity","victoria","vienna","vientiane","vilnius","warsaw","washingtondc","wellington","windhoek","yamoussoukro","yaounde","yarendistrict","yerevan","zagreb"]
	var guessList = ["abudhabi","abuja","accra","addisababa","algiers","amman","amsterdam","andorralavella","ankara","antananarivo","apia","ashgabat","asmara","asuncion","athens","baghdad","baku","bamako","bandarseribegawan","bangkok","bangui","banjul","basseterre","beijing","beirut","belgrade","belmopan","berlin","bern","bishkek","bissau","bloemfontein","bogota","brasilia","bratislava","brazzaville","bridgetown","brussels","bucharest","budapest","buenosaires","cairo","canberra","capetown","caracas","castries","chisinau","conakry","copenhagen","dakar","damascus","dhaka","dili","djibouti","dodoma","doha","dublin","dushanbe","freetown","funafuti","gaborone","georgetown","gitega","guatemalacity","hanoi","harare","havana","helsinki","honiara","islamabad","jakarta","jerusalem","juba","kabul","kampala","kathmandu","khartoum","kigali","kingston","kingstown","kinshasa","kualalumpur","kuwaitcity","kyiv","lapaz","libreville","lilongwe","lima","lisbon","ljubljana","lobamba","lome","london","luanda","lusaka","luxembourg","madrid","majuro","malabo","male","managua","manama","manila","maputo","maseru","mbabane","mexicocity","minsk","mogadishu","monaco","monrovia","montevideo","moroni","moscow","muscat","nairobi","nassau","naypyidaw","ndjamena","newdelhi","ngerulmud","niamey","nicosia","nouakchott","nukualofa","nursultan","oslo","ottawa","ouagadougou","oyala","palikir","panamacity","paramaribo","paris","phnompenh","podgorica","portauprince","portlouis","portmoresby","portofspain","portonovo","portvila","prague","praia","pretoria","pristina","pyongyang","quito","rabat","reykjavik","riga","riyadh","rome","roseau","saintgeorges","saintjohns","sanaa","sanjose","sanmarino","sansalvador","santiago","santodomingo","satome","sarajevo","seoul","singapore","skopje","sofia","srijayawardenepurakotte","stockholm","sucre","suva","taipei","tallinn","tarawa","tashkent","tbilisi","tegucigalpa","tehran","thimphu","tirana","tokyo","tripoli","tunis","ulaanbaatar","vaduz","valletta","vaticancity","victoria","vienna","vientiane","vilnius","warsaw","washingtondc","wellington","windhoek","yamoussoukro","yaounde","yarendistrict","yerevan","zagreb"]
}
 else if (gameType == 0) {
	var wordList = ["liechtenstein","guineabissau","turkmenistan","burkinafaso","saudiarabia","sierraleone","southafrica","vaticancity","afghanistan","netherlands","philippines","switzerland","elsalvador","newzealand","northkorea","saintlucia","southkorea","southsudan","azerbaijan","bangladesh","ivorycoast","kazakhstan","kyrgyzstan","luxembourg","madagascar","mauritania","micronesia","montenegro","mozambique","seychelles","tajikistan","timorleste","uzbekistan","caboverde","costarica","sanmarino","argentina","australia","guatemala","indonesia","lithuania","mauritius","nicaragua","palestine","singapore","venezuela","scotland","srilanka","barbados","botswana","bulgaria","cambodia","cameroon","colombia","djibouti","dominica","eswatini","ethiopia","honduras","kiribati","malaysia","maldives","mongolia","pakistan","paraguay","portugal","slovakia","slovenia","suriname","tanzania","thailand","zimbabwe","england","barbuda","antigua","albania","algeria","andorra","armenia","austria","bahamas","bahrain","belarus","belgium","bolivia","burundi","comoros","croatia","denmark","ecuador","eritrea","estonia","finland","georgia","germany","grenada","hungary","iceland","ireland","jamaica","lebanon","lesotho","liberia","moldova","morocco","myanmar","namibia","nigeria","romania","senegal","somalia","tunisia","ukraine","uruguay","vanuatu","vietnam","angola","belize","bhutan","bosnia","brazil","brunei","canada","cyprus","france","gambia","greece","guinea","guyana","israel","jordan","kosovo","kuwait","latvia","malawi","mexico","monaco","norway","panama","poland","russia","rwanda","serbia","sweden","taiwan","turkey","tuvalu","uganda","zambia","wales","czech","benin","chile","china","congo","egypt","gabon","ghana","haiti","india","italy","japan","kenya","libya","malta","nauru","nepal","niger","palau","qatar","samoa","spain","sudan","syria","tonga","yemen","chad","cuba","fiji","iran","iraq","laos","mali","oman","peru","togo","usa","uae","png"]
	var guessList = ["liechtenstein","guineabissau","turkmenistan","burkinafaso","saudiarabia","sierraleone","southafrica","vaticancity","afghanistan","netherlands","philippines","switzerland","elsalvador","newzealand","northkorea","saintlucia","southkorea","southsudan","azerbaijan","bangladesh","ivorycoast","kazakhstan","kyrgyzstan","luxembourg","madagascar","mauritania","micronesia","montenegro","mozambique","seychelles","tajikistan","timorleste","uzbekistan","caboverde","costarica","sanmarino","argentina","australia","guatemala","indonesia","lithuania","mauritius","nicaragua","palestine","singapore","venezuela","scotland","srilanka","barbados","botswana","bulgaria","cambodia","cameroon","colombia","djibouti","dominica","eswatini","ethiopia","honduras","kiribati","malaysia","maldives","mongolia","pakistan","paraguay","portugal","slovakia","slovenia","suriname","tanzania","thailand","zimbabwe","england","barbuda","antigua","albania","algeria","andorra","armenia","austria","bahamas","bahrain","belarus","belgium","bolivia","burundi","comoros","croatia","denmark","ecuador","eritrea","estonia","finland","georgia","germany","grenada","hungary","iceland","ireland","jamaica","lebanon","lesotho","liberia","moldova","morocco","myanmar","namibia","nigeria","romania","senegal","somalia","tunisia","ukraine","uruguay","vanuatu","vietnam","angola","belize","bhutan","bosnia","brazil","brunei","canada","cyprus","france","gambia","greece","guinea","guyana","israel","jordan","kosovo","kuwait","latvia","malawi","mexico","monaco","norway","panama","poland","russia","rwanda","serbia","sweden","taiwan","turkey","tuvalu","uganda","zambia","wales","czech","benin","chile","china","congo","egypt","gabon","ghana","haiti","india","italy","japan","kenya","libya","malta","nauru","nepal","niger","palau","qatar","samoa","spain","sudan","syria","tonga","yemen","chad","cuba","fiji","iran","iraq","laos","mali","oman","peru","togo","usa","uae","png"]
} 
var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
//console.log(word);
var height = 8; //number of guesses
var width = word.length; //length of the word
if (width > 5){
	height = 10
}
document.getElementById("answer").style.color = "#6AAA64";
document.getElementById("answer").innerText = "THE " +gameName +" HAS " + width + " LETTERS. YOU HAVE " + height + " TRIES!\n READ THE GAME RULES FOR MORE INSTRUCTIONS.";
var row = 0; //CURRENT GUESS (ATTEMPT #)
var col = 0; //current letter for that attempt

var boardWidth = (width*30); 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

window.onload = function(){
	//console.log("sankar");
    intialize();
}


function intialize() {

    // Create the game board

	var element = document.getElementById("board");
        element.style.width = boardWidth;
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
	document.getElementById("mode").innerHTML += gameName;
	document.getElementById("wins").innerHTML = "Total Wins: " + localStorage.totalgwins;
	if (localStorage.totalgwins == 0){
		document.getElementById("time").innerHTML = "Avg. Time: 0s";
	}
	else{
		document.getElementById("time").innerHTML = "Avg. Time: " + localStorage.averagegtime + "s";
	}

    // Create the key board
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["⏎", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]
	
/*     let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]	 */

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "⏎") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            } 

            keyTile.addEventListener("click", processKey);

            if (key == "⏎" || key == "⌫"){
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }
    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}


function hint() {
	if (!gameOver) {
		//alert("Hint is now pressed");
		hintSwitch = 1;
		if (hintPosn.length > 0){
			for (let j = 0; j < hintPosn.length; j++){
				if (j != hintPosn[j]){
					hintIndex = j;
					break;
				}
				else{
					hintIndex = j+1;
				}
			}
		}
		else{
			hintIndex = 0;
		}

		if (col != hintIndex){
			for (let c = col-1; c >=hintIndex; c--) {
				let currTile = document.getElementById(row.toString() + '-' + c.toString());
				currTile.innerText = " ";
				currTile.classList.remove("poptile");
				col -= 1;
			}	
		}	
		for (let c = 0; c <= hintIndex; c++) {
			if (c < width){
				let currTile = document.getElementById(row.toString() + '-' + c);
				currTile.innerText = word[c];
				hintPosn.push(c);
				hintPosn.sort();
				hintPosn = [...new Set(hintPosn)];		
				currTile.classList.add("correct");			
				col =  c + 1;	
				document.getElementById("answer").style.color = "#6AAA64";
				document.getElementById("answer").innerText = "ONE LETTER REVEALED!\n FIVE SECONDS PENALTY.";				
			}	
			else{
				document.getElementById("answer").style.color = "red";
				document.getElementById("answer").innerText = "ALL HINTS USED!";				
			}
		}	
		//let currTile = document.getElementById(row.toString() + '-' + hintIndex);
/* 		if (currTile.innerText == ""){
			hintIndex = 1;
		} */	
		//currTile.innerText = word[hintIndex];
		//currTile.classList.add("correct");
/* 		if (hintIndex == 1){
				col += 1;
		} */
		//hintIndex += 1;	
		timer += 5;			
	}
}

function giveUp() {
	if (gameOver != true){
		if (col != 0){
			for (let c = col-1; c >=0; c--) {
				let currTile = document.getElementById(row.toString() + '-' + c.toString());
				currTile.innerText = " ";
				col -= 1;
			}	
		}	
		for (let c = 0; c < width; c++) {
			currTile = document.getElementById(row.toString() + '-' + c.toString());
			currTile.innerText = word[c];
			currTile.classList.remove("poptile","shaketile");
			currTile.classList.add("failed", "animated");
		}	
			gameOver = true;
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "YOU GAVE UP TOO EASILY.\nTRY HARDER NEXT TIME!";
			localStorage.totalgtime = Number(localStorage.totalgtime)+ timer;		
			localStorage.averagegtime = Math.round(localStorage.totalgtime/localStorage.totalgwins);
			document.getElementById("wins").innerHTML = "Total Wins: " + localStorage.totalgwins;
			document.getElementById("time").innerHTML = "Avg. Time: " + localStorage.averagegtime + "s";			
	}
}

function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 

    // alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
				currTile.classList.add("poptile");
                col += 1;
            }
        }
		document.getElementById("answer").innerText = "";
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
		document.getElementById("answer").innerText = "";
		for (let c = width-1; c = 0; c--) {
			let delTile = document.getElementById(row.toString() + '-' + c);
			delTile.classList.remove("shaketile");
		}		
		currTile.classList.remove("correct", "poptile");
    }

    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
		document.getElementById("answer").style.color = "red";
        document.getElementById("answer").innerText = "THE  " +gameName +"  WAS " + word + "! HARD LUCK.\n REFRESH TO TRY AGAIN.";
    }
}

function update() {
	for (let c = 0; c < width; c++) {
		let currTile = document.getElementById(row.toString() + '-' + c);
		currTile.classList.remove("shaketile");
	}	
    let guess = "";
    document.getElementById("answer").innerText = "";

    //string up the guesses into the word
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
	
    if (gameMode == 1){
		if (!gameOver && col < width) {
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "NOT ENOUGH LETTERS!";
			return;
		}   
	}		

	if (!guessList.includes(guess)) {
		document.getElementById("answer").style.color = "red";
		document.getElementById("answer").innerText = "NOT A VALID  " +gameName +"  NAME!";
		for (let c = 0; c < width; c++) {
			let currTile = document.getElementById(row.toString() + '-' + c);
			currTile.classList.add("shaketile");
		}
		return;
	}	

     //Again parse the string to look for easy mode processing
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
		currTile.classList.remove("poptile");
		if (letter =="" && gameMode == 0){
		currTile.classList.add("easyguess");
		currTile.innerText = "";
		letter ="";
		}
        //guess += letter;
    }

    //start processing guess
    let correct = 0;

    let letterCount = {}; //keep track of letter frequency, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
           letterCount[letter] += 1;
        } 
        else {
           letterCount[letter] = 1;
        }
    }

    //first iteration, check all the correct ones first
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
		currTile.classList.add("poptile");
		//Is it in the correct position?
		if (word[c] == letter) {
			//disable hint button if first letter is correct 			
/* 			if (c == 0) {
				if (hintSwitch == 0){
				document.getElementById("answer").style.color = "#6AAA64";
				document.getElementById("answer").innerText = "YOU HAVE IDENTIFIED THE FIRST LETTER.\nHINT IS NOW DISABLED.";	
				}	
			} */				
			currTile.classList.add("correct");
			let keyTile = document.getElementById("Key" + letter);
			keyTile.classList.remove("present");
			keyTile.classList.add("correct");
			correct += 1;
			letterCount[letter] -= 1; //deduct the letter count
			hintPosn.push(c);
			hintPosn.sort();
			hintPosn = [...new Set(hintPosn)];			
		}

		if (correct == width) {
			document.getElementById("answer").style.color = "#6AAA64";
			document.getElementById("answer").innerHTML = gameName +" SUCCESSFULLY IDENTIFIED IN " + timer + "s.\n CONGRATULATIONS! REFRESH TO PLAY AGAIN.";
			//console.log(timer);
			for (let c = 0; c < width; c++) {
				let winTile = document.getElementById(row.toString() + '-' + c.toString());
				winTile.classList.remove("poptile");
				winTile.classList.add("animated");	
			}				
			localStorage.totalgwins = Number(localStorage.totalgwins)+ 1;
			localStorage.totalgtime = Number(localStorage.totalgtime)+ timer;		
			localStorage.averagegtime = Math.round(localStorage.totalgtime/localStorage.totalgwins);
			document.getElementById("wins").innerHTML = "Total Wins: " + localStorage.totalgwins;
			document.getElementById("time").innerHTML = "Avg. Time: " + localStorage.averagegtime + "s";
			gameOver = true;
		}		
    }

    //go again and mark which ones are present but in wrong position
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // skip the letter if it has been marked correct
        if (!currTile.classList.contains("correct")) {
            //Is it in the word?         //make sure we don't double count
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");
                
                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Not in the word or (was in word but letters all used up to avoid overcount)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
				if (keyTile !== null){
					if (!keyTile.classList.contains("present") && !keyTile.classList.contains("correct")) {
						keyTile.classList.add("absent");
					}	
				}
            }
        }
    }

    row += 1; //start new row
    col = 0; //start at 0 for new row
}

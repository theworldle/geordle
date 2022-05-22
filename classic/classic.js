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
	var wordList = ["belmopan", "maseru", "abuja", "saintgeorges", "ottawa", "accra", "moscow", "funafuti", "nicosia", "nassau", "victoria", "london", "georgetown", "manila", "sucre", "abudhabi", "dodoma", "addisababa", "ulaanbaatar", "riyadh", "vaduz", "panamacity", "doha", "budapest", "niamey", "montevideo", "amsterdam", "maputo", "ashgabat", "prague", "mogadishu", "tirana", "cairo", "yarendistrict", "bucharest", "pretoria", "bamako", "sanjose", "yamoussoukro", "seoul", "portonovo", "kampala", "majuro", "harare", "vilnius", "baku", "antananarivo", "mbabane", "baghdad", "stockholm", "dublin", "lome", "amman", "muscat", "bishkek", "reykjavik", "bern", "kinshasa", "pristina", "gitega", "guatemalacity", "dakar", "chisinau", "manama", "monrovia", "sanaa", "athens", "pyongyang", "santodomingo", "capetown", "libreville", "conakry", "malabo", "monaco", "basseterre", "tripoli", "freetown", "saintjohns", "zagreb", "saotome", "lilongwe", "managua", "kathmandu", "portvila", "apia", "lima", "hanoi", "kyiv", "jakarta", "asmara", "yaounde", "kingston", "santiago", "asuncion", "portauprince", "tbilisi", "podgorica", "thimphu", "ouagadougou", "bangkok", "havana", "rabat", "nairobi", "luxembourg", "dhaka", "singapore", "skopje", "nouakchott", "belgrade", "tashkent", "dili", "portmoresby", "bandarseribegawan", "beijing", "madrid", "quito", "lisbon", "yerevan", "algiers", "nukualofa", "ljubljana", "wellington", "sofia", "buenosaires", "edinburgh", "jerusalem", "castries", "windhoek", "kabul", "kuwaitcity", "sanmarino", "islamabad", "bogota", "canberra", "phnompenh", "palikir", "ndjamena", "suva", "lusaka", "sarajevo", "minsk", "ankara", "helsinki", "cardiff", "washingtondc", "vaticancity", "honiara", "kualalumpur", "andorralavella", "mexicocity", "tunis", "tehran", "gaborone", "riga", "oslo", "tokyo", "portlouis", "damascus", "roseau", "srijayawardenepurakotte", "bratislava", "tallinn", "paramaribo", "tarawa", "portofspain", "bissau", "bangui", "brasilia", "vientiane", "copenhagen", "newdelhi", "valletta", "moroni", "brussels", "banjul", "luanda", "sansalvador", "djibouti", "rome", "vienna", "lobamba", "bridgetown", "praia", "warsaw", "paris", "taipei", "tegucigalpa", "nursultan", "juba", "caracas", "male", "dushanbe", "bloemfontein", "khartoum", "beirut", "kingstown", "berlin", "naypyidaw", "kigali", "ngerulmud", "lapaz", "brazzaville", "oyala", "jerusalem",];
	var guessList = ["belmopan", "maseru", "abuja", "saintgeorges", "ottawa", "accra", "moscow", "funafuti", "nicosia", "nassau", "victoria", "london", "georgetown", "manila", "sucre", "abudhabi", "dodoma", "addisababa", "ulaanbaatar", "riyadh", "vaduz", "panamacity", "doha", "budapest", "niamey", "montevideo", "amsterdam", "maputo", "ashgabat", "prague", "mogadishu", "tirana", "cairo", "yarendistrict", "bucharest", "pretoria", "bamako", "sanjose", "yamoussoukro", "seoul", "portonovo", "kampala", "majuro", "harare", "vilnius", "baku", "antananarivo", "mbabane", "baghdad", "stockholm", "dublin", "lome", "amman", "muscat", "bishkek", "reykjavik", "bern", "kinshasa", "pristina", "gitega", "guatemalacity", "dakar", "chisinau", "manama", "monrovia", "sanaa", "athens", "pyongyang", "santodomingo", "capetown", "libreville", "conakry", "malabo", "monaco", "basseterre", "tripoli", "freetown", "saintjohns", "zagreb", "saotome", "lilongwe", "managua", "kathmandu", "portvila", "apia", "lima", "hanoi", "kyiv", "jakarta", "asmara", "yaounde", "kingston", "santiago", "asuncion", "portauprince", "tbilisi", "podgorica", "thimphu", "ouagadougou", "bangkok", "havana", "rabat", "nairobi", "luxembourg", "dhaka", "singapore", "skopje", "nouakchott", "belgrade", "tashkent", "dili", "portmoresby", "bandarseribegawan", "beijing", "madrid", "quito", "lisbon", "yerevan", "algiers", "nukualofa", "ljubljana", "wellington", "sofia", "buenosaires", "edinburgh", "jerusalem", "castries", "windhoek", "kabul", "kuwaitcity", "sanmarino", "islamabad", "bogota", "canberra", "phnompenh", "palikir", "ndjamena", "suva", "lusaka", "sarajevo", "minsk", "ankara", "helsinki", "cardiff", "washingtondc", "vaticancity", "honiara", "kualalumpur", "andorralavella", "mexicocity", "tunis", "tehran", "gaborone", "riga", "oslo", "tokyo", "portlouis", "damascus", "roseau", "srijayawardenepurakotte", "bratislava", "tallinn", "paramaribo", "tarawa", "portofspain", "bissau", "bangui", "brasilia", "vientiane", "copenhagen", "newdelhi", "valletta", "moroni", "brussels", "banjul", "luanda", "sansalvador", "djibouti", "rome", "vienna", "lobamba", "bridgetown", "praia", "warsaw", "paris", "taipei", "tegucigalpa", "nursultan", "juba", "caracas", "male", "dushanbe", "bloemfontein", "khartoum", "beirut", "kingstown", "berlin", "naypyidaw", "kigali", "ngerulmud", "lapaz", "brazzaville", "oyala", "jerusalem",];
}
 else if (gameType == 0) {
	var wordList = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "democraticrepublicofthecongo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "equatorialguinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosniaandherzegovina", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia", "republicofthecongo", "equatorialguinea", "palestine",];var countrylist = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "democraticrepublicofthecongo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "equatorialguinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosniaandherzegovina", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia", "republicofthecongo", "equatorialguinea", "palestine",];
	var guessList = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "democraticrepublicofthecongo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "equatorialguinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosniaandherzegovina", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia", "republicofthecongo", "equatorialguinea", "palestine",];
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
		localStorage.totalgtime = Number(localStorage.totalgtime)+ timer;		
		localStorage.averagegtime = Math.round(localStorage.totalgtime/localStorage.totalgwins);
		document.getElementById("wins").innerHTML = "Total Wins: " + localStorage.totalgwins;
		document.getElementById("time").innerHTML = "Avg. Time: " + localStorage.averagegtime + "s";		
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
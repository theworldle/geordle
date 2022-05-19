var gameOver = false;
var correct = 0;
var livescnt = 0;
var lives = "🔴🔴🔴🔴🔴";

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

function removeblink() {
	if (!gameOver){
		document.getElementById("lives").classList.remove("blink");
		document.getElementById("answer").innerText = "";
	}
}

//Final Clue Text Attenion 
function FinalClue() {
	document.getElementById("answer").classList.add("popanswer");
}


var countryList = ["belize", "lesotho", "nigeria", "grenada", "canada", "ghana", "russia", "tuvalu", "cyprus", "bahamas", "seychelles", "england", "guyana", "philippines", "bolivia", "unitedarabemirates", "tanzania", "ethiopia", "mongolia", "saudiarabia", "liechtenstein", "panama", "qatar", "hungary", "niger", "uruguay", "netherlands", "mozambique", "turkmenistan", "czechrepublic", "somalia", "albania", "egypt", "nauru", "romania", "southafrica", "mali", "costarica", "ivorycoast", "southkorea", "benin", "uganda", "marshallislands", "zimbabwe", "lithuania", "azerbaijan", "madagascar", "eswatini", "iraq", "sweden", "ireland", "togo", "jordan", "oman", "kyrgyzstan", "iceland", "switzerland", "congo", "kosovo", "burundi", "guatemala", "senegal", "moldova", "bahrain", "liberia", "yemen", "greece", "northkorea", "dominicanrepublic", "southafrica", "gabon", "guinea", "EquatorialGuinea", "monaco", "saintkittsandnevis", "libya", "sierraleone", "antiguaandbarbuda", "croatia", "saotomeandprincipe", "malawi", "nicaragua", "nepal", "vanuatu", "samoa", "peru", "vietnam", "ukraine", "indonesia", "eritrea", "cameroon", "jamaica", "chile", "paraguay", "haiti", "georgia", "montenegro", "bhutan", "burkinafaso", "thailand", "cuba", "morocco", "kenya", "luxembourg", "bangladesh", "singapore", "northmacedonia", "mauritania", "serbia", "uzbekistan", "timorleste", "papuanewguinea", "brunei", "china", "spain", "ecuador", "portugal", "armenia", "algeria", "tonga", "slovenia", "newzealand", "bulgaria", "argentina", "scotland", "israel", "saintlucia", "namibia", "afghanistan", "kuwait", "sanmarino", "pakistan", "colombia", "australia", "cambodia", "micronesia", "chad", "fiji", "zambia", "bosnia", "belarus", "turkey", "finland", "wales", "unitedstatesofamerica", "vaticancity", "solomonislands", "malaysia", "andorra", "mexico", "tunisia", "iran", "botswana", "latvia", "norway", "japan", "mauritius", "syria", "dominica", "srilanka", "slovakia", "estonia", "suriname", "kiribati", "trinidadandtobago", "guineabissau", "centralafricanrepublic", "brazil", "laos", "denmark", "india", "malta", "comoros", "belgium", "gambia", "angola", "elsalvador", "djibouti", "italy", "austria", "eswatini", "barbados", "caboverde", "poland", "france", "taiwan", "honduras", "kazakhstan", "southsudan", "venezuela", "maldives", "tajikistan", "southafrica", "sudan", "lebanon", "saintvincentandthegrenadines", "germany", "myanmar", "rwanda", "palau", "bolivia",];
var capitalList = ["belmopan", "maseru", "abuja", "saintgeorges", "ottawa", "accra", "moscow", "funafuti", "nicosia", "nassau", "victoria", "london", "georgetown", "manila", "sucre", "abudhabi", "dodoma", "addisababa", "ulaanbaatar", "riyadh", "vaduz", "panamacity", "doha", "budapest", "niamey", "montevideo", "amsterdam", "maputo", "ashgabat", "prague", "mogadishu", "tirana", "cairo", "yarendistrict", "bucharest", "pretoria", "bamako", "sanjose", "yamoussoukro", "seoul", "portonovo", "kampala", "majuro", "harare", "vilnius", "baku", "antananarivo", "mbabane", "baghdad", "stockholm", "dublin", "lome", "amman", "muscat", "bishkek", "reykjavik", "bern", "kinshasa", "pristina", "gitega", "guatemalacity", "dakar", "chisinau", "manama", "monrovia", "sanaa", "athens", "pyongyang", "santodomingo", "capetown", "libreville", "conakry", "malabo", "monaco", "basseterre", "tripoli", "freetown", "saintjohns", "zagreb", "saotome", "lilongwe", "managua", "kathmandu", "portvila", "apia", "lima", "hanoi", "kyiv", "jakarta", "asmara", "yaounde", "kingston", "santiago", "asuncion", "portauprince", "tbilisi", "podgorica", "thimphu", "ouagadougou", "bangkok", "havana", "rabat", "nairobi", "luxembourg", "dhaka", "singapore", "skopje", "nouakchott", "belgrade", "tashkent", "dili", "portmoresby", "bandarseribegawan", "beijing", "madrid", "quito", "lisbon", "yerevan", "algiers", "nukualofa", "ljubljana", "wellington", "sofia", "buenosaires", "edinburgh ", "jerusalem", "castries", "windhoek", "kabul", "kuwaitcity", "sanmarino", "islamabad", "bogota", "canberra", "phnompenh", "palikir", "ndjamena", "suva", "lusaka", "sarajevo", "minsk", "ankara", "helsinki", "cardiff", "washingtondc", "vaticancity", "honiara", "kualalumpur", "andorralavella", "mexicocity", "tunis", "tehran", "gaborone", "riga", "oslo", "tokyo", "portlouis", "damascus", "roseau", "srijayawardenepurakotte", "bratislava", "tallinn", "paramaribo", "tarawa", "portofspain", "bissau", "bangui", "brasilia", "vientiane", "copenhagen", "newdelhi", "valletta", "moroni", "brussels", "banjul", "luanda", "sansalvador", "djibouti", "rome", "vienna", "lobamba", "bridgetown", "praia", "warsaw", "paris", "taipei", "tegucigalpa", "nursultan", "juba", "caracas", "male", "dushanbe", "bloemfontein", "khartoum", "beirut", "kingstown", "berlin", "naypyidaw", "kigali", "ngerulmud", "lapaz",];
var index = Math.floor(Math.random()*countryList.length);
var country = countryList[index].toUpperCase();
var capital = capitalList[index].toUpperCase();
var word = (country + capital).toUpperCase();
var countrywidth = country.length; 
var capitalwidth = capital.length; 
var disabledkeyarr = [];
document.getElementById("answer").style.color = "#6AAA64";
document.getElementById("answer").innerText = "GAME ON!";
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
    intialize();
}


function intialize() {
	
    // Create the game board
	document.getElementById("lives").innerText = lives;
	var element = document.getElementById("boardfirst");
        //element.style.width = boardWidth;
        for (let c = 0; c < countrywidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = "1" + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardfirst").appendChild(tile);
        }
		
	var element = document.getElementById("boardlast");
        //element.style.width = boardWidth;
        for (let c = 0; c < capitalwidth; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = "2" + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("boardlast").appendChild(tile);
        }		
		
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
        ["Z", "X", "C", "V", "B", "N", "M"]
    ]
	
/* 	    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["⏎", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ] */
	
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
			if ("KeyA" <= e.code && e.code <= "KeyZ") {
				if (!document.getElementById(e.code).classList.contains("disabled")){
					processInput(e);
				}
			}
		})
}


function processKey() {
    e = { "code" : this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return; 
	document.getElementById("lives").classList.remove("blink");	
	document.getElementById("answer").innerText = "";
	var LetterFound = 0;
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
		for (let i = 0; i < countrywidth; i++){
			let currTile = document.getElementById("1" + '-' + i);
			if (e.code[3] == country[i]){
				if (currTile.innerText == ""){
					currTile.innerText = e.code[3];
					currTile.classList.add("correct","poptile");
					correct += 1;				
				}
				LetterFound = 1;
			}	
		}
		for (let i = 0; i < capitalwidth; i++){
			let currTile = document.getElementById("2" + '-' + i);
			if (e.code[3] == capital[i]){
				if (currTile.innerText == ""){
					currTile.innerText = e.code[3];
					currTile.classList.add("correct","poptile");
					correct += 1;	
				}
				LetterFound = 1;				
			}
		}	
		document.getElementById(e.code).classList.add("disabled");
    }
	
	if (LetterFound == 0){
		livescnt += 1;
		timer += 5;
		switch (livescnt) {
				case 0: lives = "🔴🔴🔴🔴🔴";
					break;
				case 1: lives = "🔴🔴🔴🔴";
					break;	
				case 2: lives = "🔴🔴🔴";
					break;				
				case 3: lives = "🔴🔴";
					break;	
				case 4: lives = "🔴";
					break;	
				case 5: lives = "";
					break;
				case 6: lives = "💀💀💀💀💀";
					break;					
		}		
		
		document.getElementById("lives").innerText = lives;
		document.getElementById("lives").classList.add("blink");
		if (livescnt == 5){
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "LAST LIFE ALERT!";	
			setTimeout(FinalClue, 500);			
		}
		else{
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "YOU LOST A LIFE!";	
		}
		setTimeout(removeblink, 3000);	
	}
	
	if (livescnt == 6){
		for (let i = 0; i < countrywidth; i++) {
			let currTile = document.getElementById("1" + '-' + i);
			currTile.innerText = country[i];
			currTile.classList.remove("poptile","correct");
			currTile.classList.add("failed", "animated");
		}	
		for (let i = 0; i < capitalwidth; i++) {
			let currTile = document.getElementById("2" + '-' + i);
			currTile.innerText = capital[i];
			currTile.classList.remove("poptile","correct");
			currTile.classList.add("failed", "animated");
		}		
			gameOver = true;
			document.getElementById("answer").style.color = "red";
			document.getElementById("answer").innerText = "GAME OVER! OUT OF LIVES.";				
	}	
	
	if (correct == word.length){
		for (let i = 0; i < countrywidth; i++) {
			let currTile = document.getElementById("1" + '-' + i);
			currTile.innerText = country[i];
			currTile.classList.remove("poptile");
			currTile.classList.add("animated");
		}	
		for (let i = 0; i < capitalwidth; i++) {
			let currTile = document.getElementById("2" + '-' + i);
			currTile.innerText = capital[i];
			currTile.classList.remove("poptile");
			currTile.classList.add("animated");
		}		
			gameOver = true;
			document.getElementById("answer").style.color = "#6AAA64";
			document.getElementById("answer").innerText = "GREAT GOING! YOU WON IN " + timer + "s.\n CONGRATULATIONS! REFRESH TO PLAY AGAIN."
			localStorage.totalgwins = Number(localStorage.totalgwins)+ 1;
			localStorage.totalgtime = Number(localStorage.totalgtime)+ timer;		
			localStorage.averagegtime = Math.round(localStorage.totalgtime/localStorage.totalgwins);
			document.getElementById("wins").innerHTML = "Total Wins: " + localStorage.totalgwins;
			document.getElementById("time").innerHTML = "Avg. Time: " + localStorage.averagegtime + "s";			
	}	
}

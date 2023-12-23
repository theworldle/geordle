//Baseline Date
var a = new Date(); // Current date now.
var b = new Date(2022, 4, 15, 0, 0, 0, 0); // Start of TENIZ.
var d = (a - b); // Difference in milliseconds.
var days = parseInt((d / 1000) / 86400);


function saveStats() {
			localStorage.totalgdplayed = document.getElementById("ssplayed").value;
       		 	document.getElementById("ssplayed").value = "";
			localStorage.totalgdwins = Math.round((document.getElementById("sswinp").value * localStorage.totalgdplayed)/100) ;
        		document.getElementById("sswinp").value = "";
			localStorage.totalgdstreak = document.getElementById("ssstreak").value;
        		document.getElementById("ssstreak").value = "";
			localStorage.totalgdstars = document.getElementById("ssstars").value;
        		document.getElementById("ssstars").value = "";

			localStorage.stargd5count = document.getElementById("5star").value;
       			document.getElementById("5star").value = "";
			localStorage.stargd4count = document.getElementById("4star").value;
       	 		document.getElementById("4star").value = "";
			localStorage.stargd3count = document.getElementById("3star").value;
        		document.getElementById("3star").value = "";
			localStorage.stargd2count = document.getElementById("2star").value;
        		document.getElementById("2star").value = "";
			localStorage.stargd1count = document.getElementById("1star").value;
        		document.getElementById("1star").value = "";
			localStorage.stargd0count = document.getElementById("0star").value;
        		document.getElementById("0star").value = "";
			localStorage.stargdxcount = document.getElementById("xstar").value;
        		document.getElementById("xstar").value = "";

        		document.getElementById("answer").style.color = "#6AAA64";
        		document.getElementById("answer").innerText = "STATS TRANSFERRED SUCCESSFULLY! REDIRECTING TO GEORDLE IN A FEW SECONDS.";
			waitFiveSec();
}

function waitFiveSec(){
    setTimeout(opengeordle, 5000) /*(here you need to implement delay code)*/
  }

function opengeordle(){
    window.open('https://sank0403.github.io/geordle/')
    //window.close();
  }

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function submitMe() {

        if (Number(document.getElementById("ssplayed").value) >= 0 && Number(document.getElementById("sswinp").value) >= 0 && Number(document.getElementById("ssstreak").value) >= 0 && Number(document.getElementById("ssstars").value) >= 0 && Number(document.getElementById("5star").value) >= 0 && Number(document.getElementById("4star").value) >= 0 && Number(document.getElementById("3star").value) >= 0 && Number(document.getElementById("2star").value) >= 0 && Number(document.getElementById("1star").value) >= 0 && Number(document.getElementById("0star").value) >= 0  &&
 Number(document.getElementById("xstar").value) >= 0) {
        	//do nothing;
        }
	else {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ONLY NUMERIC VALUES ALLOWED!";
        	return false;
	}

 	if (document.getElementById("ssplayed").value.includes('.') || document.getElementById("sswinp").value.includes('.') || document.getElementById("ssstreak").value.includes('.') || document.getElementById("ssstars").value.includes('.') || document.getElementById("5star").value.includes('.') || document.getElementById("4star").value.includes('.') || document.getElementById("3star").value.includes('.') || document.getElementById("2star").value.includes('.') || document.getElementById("1star").value.includes('.') || document.getElementById("0star").value.includes('.') || document.getElementById("xstar").value.includes('.')) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "NO DECIMAL VALUES ALLOWED'!";
        	return false;
        }
        if (document.getElementById("ssplayed").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'PLAYED'!";
        	return false;
        }
        if (localStorage.getItem('gameovergd' + days) == 1) {
       		 if (Number(document.getElementById("ssplayed").value) > days) {
       			document.getElementById("answer").style.color = "#FF0000";
        		document.getElementById("answer").innerText = "GEORDLE HAS NOT BEEN LIVE FOR " + document.getElementById("ssplayed").value + " DAYS. NO CHEATING!";
        		return false;
		}
	}
	else {
       		 if (Number(document.getElementById("ssplayed").value) > (days - 1)) {
       			document.getElementById("answer").style.color = "#FF0000";
        		document.getElementById("answer").innerText = "CAN ONLY TRANSFER FOR  " + (days - 1) + " DAYS COVERING STATS UNTIL YESTERDAY! PLAY TODAYS GAME ONCE TRANSFERRED.";
        		return false;
		}
        }

        if (document.getElementById("sswinp").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'WIN %'!";
        	return false;
        }
        if (Number(document.getElementById("sswinp").value) > 100) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "WIN % CANNOT BE GREATER THAN 100!";
        	return false;
        }
        if (document.getElementById("ssstreak").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'STREAK'!";
        	return false;
        }
        if (Number(document.getElementById("ssstreak").value) > Number(document.getElementById("ssplayed").value)) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "STREAK CANNOT BE LARGER THAN TOTAL PLAYED!";
        	return false;
        }
        if (document.getElementById("ssstars").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'STARS'!";
        	return false;
        }
        if (document.getElementById("5star").value == "" || document.getElementById("4star").value == ""  || document.getElementById("3star").value == "" || document.getElementById("2star").value == "" || document.getElementById("1star").value == "" || document.getElementById("0star").value == ""  || document.getElementById("xstar").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER ALL VALUES FOR 'STAR DISTRIBUTION'!";
        	return false;
        }
        var CountSD = Number(document.getElementById("5star").value) + Number(document.getElementById("4star").value) + Number(document.getElementById("3star").value) + 	Number(document.getElementById("2star").value) + Number(document.getElementById("1star").value) + Number(document.getElementById("0star").value) + 	Number(document.getElementById("xstar").value);
	var SumSD = Number(document.getElementById("5star").value) * 5 + Number(document.getElementById("4star").value) * 4 + Number(document.getElementById("3star").value) * 3 + Number(document.getElementById("2star").value) * 2 + Number(document.getElementById("1star").value) * 1 ;
 

        if (CountSD == Number(document.getElementById("ssplayed").value) && SumSD == Number(document.getElementById("ssstars").value)) {
	    saveStats();
	}
        else if  (CountSD != Number(document.getElementById("ssplayed").value) ) {
       		if (confirm('TOTAL SUM OF STAR DISTRIBUTION (' + CountSD +  ') SHOULD EQUAL TOTAL PLAYED (' + document.getElementById("ssplayed").value + ')! IGNORE THIS ERROR?')) {
		    if (SumSD != Number(document.getElementById("ssstars").value) ) {
			if (confirm('TOTAL STARS OF STAR DISTRIBUTION (' + SumSD +  ') SHOULD EQUAL TOTAL STARS (' + document.getElementById("ssstars").value + ')! IGNORE THIS ERROR?')) {				saveStats();
			}
		    }
		    else {
                       saveStats();
                    }
		}
        }
	else if  (SumSD != Number(document.getElementById("ssstars").value) ) {
		if (confirm('TOTAL STARS OF STAR DISTRIBUTION (' + SumSD +  ') SHOULD EQUAL TOTAL STARS (' + document.getElementById("ssstars").value + ')! IGNORE THIS ERROR?')) {
		   saveStats();
		}
	}
}


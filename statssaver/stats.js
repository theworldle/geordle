window.localStorage;
if (!localStorage.totalgdplayed){
localStorage.setItem("totalgdplayed",0);
localStorage.setItem("totalgdwins",0);
localStorage.setItem("totalgdstreak",0);
localStorage.setItem("totalgdstars",0);
localStorage.setItem("stargd0count", 0);
localStorage.setItem("stargd1count", 0);
localStorage.setItem("stargd2count", 0);
localStorage.setItem("stargd3count", 0);
localStorage.setItem("stargd4count", 0);
localStorage.setItem("stargd5count", 0);
localStorage.setItem("stargdxcount", 0);
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
        if (document.getElementById("ssplayed").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'PLAYED'!";
        	return false;
        }
        if (document.getElementById("sswinp").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'WIN %'!";
        	return false;
        }
        if (document.getElementById("ssstreak").value == "") {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "ENTER VALUE FOR 'STREAK'!";
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

        if (Number(document.getElementById("5star").value) + Number(document.getElementById("4star").value) + Number(document.getElementById("3star").value) + Number(document.getElementById("2star").value) + Number(document.getElementById("1star").value) + Number(document.getElementById("0star").value) + Number(document.getElementById("xstar").value) != Number(document.getElementById("ssplayed").value) ) {
       		document.getElementById("answer").style.color = "#FF0000";
        	document.getElementById("answer").innerText = "SUM OF ALL ENTRIES FOR STAR DISTRIBUTION SHOULD EQUAL TOTAL PLAYED!";
        	return false;
        }

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
        document.getElementById("answer").innerText = "STATS SAVED SUCCESSFULLY!";
}


document.addEventListener("deviceready", onDeviceReady, false);

function open_home_page()
{
	document.getElementById("home_page").style.visibility = "visible";
	document.getElementById("adding_page").style.visibility = "hidden";
}

function open_adding_page()
{
	document.getElementById("home_page").style.visibility = "hidden";
	document.getElementById("adding_page").style.visibility = "visible";
}

function add_item()
{
}
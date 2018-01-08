var pawn_item_list = [];
var iavailable = 0;

function open_home_page()
{
	document.getElementById("adding_page").style.visibility = "hidden";
	document.getElementById("home_page").style.visibility = "visible";
	document.getElementById("add_button").style.visibility = "visible";
}

function open_adding_page()
{
	document.getElementById("home_page").style.visibility = "hidden";
	document.getElementById("adding_page").style.visibility = "visible";
	document.getElementById("add_button").style.visibility = "hidden";
}

function add_item()
{
	var iname = document.getElementById("item_name").value;
	var owner = document.getElementById("item_owner").value;
	var idate = document.getElementById("item_date").value;
	var itype = document.getElementById("item_type").value;
	var quality = document.getElementById("item_quality").value;
	var ivalue = document.getElementById("item_value").value;
	var buyamt = document.getElementById("item_amount").value;
	var weight = document.getElementById("item_weight").value;
	var buyprice = get_buying_price(weight, quality);
	iavailable = 1;
	
	var parenta = document.createElement("a");
	
	var inameh3 = document.createElement("h3");
	inameh3.innerHTML = iname;
	var ownerh6 = document.createElement("h6");
	ownerh6.innerHTML = "From: "+ owner +" ("+idate+")";
	var itypep = document.createElement("p");
	itypep.innerHTML = "Type: "+ itype;
	var qualityp = document.createElement("p");
	qualityp.innerHTML = "Quality: "+ quality;
	var ivaluep = document.createElement("p");
	ivaluep.innerHTML = "Value: "+ ivalue;
	var weightp = document.createElement("p");
	weightp.innerHTML = "Weight: "+ weight +"g";
	var buyamtp = document.createElement("p");
	buyamtp.innerHTML = "Buying Price: P"+ buyamt;
	var buypricep = document.createElement("p");
	buypricep.innerHTML = "Selling Price: P"+ buyprice;
	var iavailableh4 = document.createElement("h4");
	if (iavailable = 1){
		iavailableh4.innerHTML = "AVAILABLE"
	} else {
		iavailableh4.innerHTML = "NOT AVAILABLE"
	}
	
	parenta.appendChild(inameh3);
	parenta.appendChild(ownerh6);
	parenta.appendChild(itypep);
	parenta.appendChild(qualityp);
	parenta.appendChild(ivaluep);
	parenta.appendChild(weightp);
	parenta.appendChild(buyamtp);
	parenta.appendChild(buypricep);
	parenta.appendChild(iavailableh4);
	
	$("#itm_lst").append(parenta);
							
	var pawn_item = {itemName:iname, itemOwner:owner, itemDate:idate, 
					itemType:itype, itemQuality:quality, itemValue:ivalue, 
					itemAmount:buyamt, itemWeight:weight, itemPrice:buyprice};
	pawn_item_list.push(pawn_item);
	
	var inputItem = JSON.stringify(pawn_item_list);
	window.localStorage.setItem("all_items", inputItem);
	
	document.getElementById("adding_page").style.visibility = "hidden";
	document.getElementById("home_page").style.visibility = "visible";
	iavailable = 0;
	
	var newitem = 
}

function get_buying_price(weight, quality)
{
	return weight*quality;
}

function change_availability()
{
	
}
/*function get(id)
{
	return doc.getElementById(id);
}

function get_value(type, id) 
{
    var value;
    if (type == "input" || type == "select")
        value = get(id).value;
    else
        value = get(id).innerHTML;
    return value;
}*/
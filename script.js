var firstTime =false;
var currentPopup = undefined;
var zoneHilfe = "zone_hilfe";


function ersteHilfe(){

	closePopUp();
	currentPopup = WA.openPopup("popup_info", 'Wilkommen auf unserer Map. Willst du sehen wo alles ist ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			popup.close();
			WA.openPopup("popup_info2", 'Sehr gut dann zoom doch bitte mit hilfe von STRG + Scroll ein bisschen raus',[]);
			WA.openPopup("popup_mapStudio", 'Hier gehts zum Inovation Studio von Avanade' , []);
			WA.openPopup("popup_meetingraum",'Hier ist unser Meetingraum',[]);
			WA.openPopup("popup_finance",'Hier gehts zum Finance',[]);
			WA.openPopup("popup_purchasing",'Hier gehts zum Purchasing',[]);
			WA.openPopup("popup_RD",'Hier ist unser R&D',[]);
			WA.openPopup("popup_QA",'Hier ist unser QA',[]);
			WA.openPopup("popup_production",'Hier findet die Produktion statt',[]);
			WA.openPopup("popup_distribution",'Hier gehts zur Distribution',[]);
			WA.openPopup("popup_marketingArea",'Hier ist die Marketing Area',[]);
			WA.openPopup("popup_dealer",'Hier ist die Dealer Area',[]);
			WA.openPopup("popup_customer",'Hier ist der Customer Berreich',[]);
				
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);


}


WA.onEnterZone(zoneHilfe, () => {
	if(!firstTime){
		firstTime = false;
		ersteHilfe();
	}
	else{
		WA.openPopup("popup_info", 'Brauchst du nocmal die Übersicht ?',[
			{
				label: "Ja, bitte!",
				className: "primary",
				callback: (popup) => {
					popuo.close();
					ersteHilfe();}
		},
		{
				label: "Nein, lieber nicht",
				className: "warning",
				callback: (popup) => {
					popup.close();}
			}
		])
	}
})
	
function closePopUp(){
	if(currentPopup!==undefined){
		currentPopup.close();
		currentPopup=undefined;
	}
}

WA.onLeaveZone(zoneHilfe, () =>{
	closePopUp();
}
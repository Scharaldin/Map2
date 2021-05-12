var firstTime =false;
var currentPopup = undefined;
var zoneHilfe = "zone_hilfe";
var zoneService = "zone_service";
var viewSales ='https://scharaldin.github.io/Map2/service_area.png';
var Pop = undefined;
var Pop2 = undefined;
var Pop3 = undefined;
var Pop4 = undefined;
var Pop5 = undefined;
var Pop6 = undefined;
var Pop7 = undefined;
var Pop8 = undefined;
var Pop9 = undefined;
var Pop10 = undefined;
var Pop11 = undefined;
var Pop12 = undefined;
var Pop13 = undefined;
var Pop14 = undefined;
var Pop15 = undefined;
var Pop16 = undefined;



function ersteHilfe(){

	closePopUp();
	currentPopup = WA.openPopup("popup_info", 'Willst du sehen wo alles ist ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			popup.close();
		Pop =	WA.openPopup("popup_info2", 'Sehr gut dann zoom doch bitte mit hilfe von STRG + Scroll ein bisschen raus',[]);
		Pop2 =	WA.openPopup("popup_mapStudio", 'Hier gehts zum Inovation Studio von Avanade' , []);
		Pop3 =	WA.openPopup("popup_meetingraum",'Hier ist unser Meetingraum',[]);
		Pop4 =	WA.openPopup("popup_finance",'Hier gehts zum Finance',[]);
		Pop5 =	WA.openPopup("popup_purchasing",'Hier gehts zum Purchasing',[]);
		Pop6 =	WA.openPopup("popup_RD",'Hier ist unser R&D',[]);
		Pop7 =	WA.openPopup("popup_QA",'Hier ist unser QA',[]);
		Pop8 =	WA.openPopup("popup_production",'Hier findet die Produktion statt',[]);
		Pop9 =	WA.openPopup("popup_distribution",'Hier gehts zur Distribution',[]);
		Pop10 =	WA.openPopup("popup_marketingArea",'Hier ist die Marketing Area',[]);
		Pop11 =	WA.openPopup("popup_dealer",'Hier ist die Dealer Area',[]);
		Pop12 =	WA.openPopup("popup_customer",'Hier ist der Customer Berreich',[]);
		Pop13 =	WA.openPopup("popup_itArea",'Hier ist der IT Berreich',[]);
		Pop14 =	WA.openPopup("popup_serviceArea",'Hier ist der Service Berreich',[]);
		Pop15 =	WA.openPopup("popup_salesArea",'Hier ist der Sales Berreich',[]);
		Pop16 =	WA.openPopup("popup_bewegen",'Bewegen kannst du dich mit den Pfeiltasten oder W,A,S,D. Sprinten geht mit der Shift Taste. Falls du mit etwas Interagieren kannst bekommest du ein Popup unten im Bildschirm',[]);
				
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);


}


WA.onEnterZone(zoneService,() => {
	currentPopup = WA.openPopup("popup_serviceArea",'Do you want an overview over the service room?',[
		{
			label: "Ja",
			className: "primary",
			callback: (popup) => {
				popup.close();
				WA.openCoWebSite(viewSales);
			}
			},{
				label:"Nein",
				className: "warning",
				callback: (popup) => {
					popup.close();
				}
			}
		
	])
});

WA.onEnterZone(zoneHilfe, () => {
	if(!firstTime){
		firstTime = true;
		ersteHilfe();
	}
	else{
		currentPopup = WA.openPopup("popup_info", 'Findest du dich zurecht ?',[
			{
				label: "Nein",
				className: "primary",
				callback: (popup) => {
					popup.close();
					ersteHilfe();}
		},
		{
				label: "Ja alles gut",
				className: "primary",
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
	if(Pop!==undefined){
		Pop.close();
		Pop = undefined;
		Pop2.close();
		Pop2 = undefined;
		Pop3.close();
		Pop3 = undefined;
		Pop4.close();
		Pop4 = undefined;
		Pop5.close();
		Pop5 = undefined;
		Pop6.close();
		Pop6 = undefined;
		Pop7.close();
		Pop7 = undefined;
		Pop8.close();
		Pop8 = undefined;
		Pop9.close();
		Pop9 = undefined;
		Pop10.close();
		Pop10 = undefined;
		Pop11.close();
		Pop11 = undefined;
		Pop12.close();
		Pop12 = undefined;
		Pop13.close();
		Pop13 = undefined;
		Pop14.close();
		Pop14 = undefined;
		Pop15.close();
		Pop15 = undefined;
		Pop16.close();
		Pop16 = undefined;
	}
}

WA.onLeaveZone(zoneHilfe, () =>{
	closePopUp();
});
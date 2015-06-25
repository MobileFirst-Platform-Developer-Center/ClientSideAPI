/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.
*/

var busy;

function wlCommonInit(){
	busy = new WL.BusyIndicator();
	displayInfo();
}

function displayInfo(){
	//Get the value of currently selected option from a HTML element with id="actions"
	var selectedValue = $('#actions').val();
	var text="";

	switch (selectedValue) {
		case 'language':
			//If language option is selected, get client language using WL API
			text = WL.App.getDeviceLanguage();
			break;
		case 'appEnvironment':
			//If environment option is selected, get client environment using WL API
			text = WL.Client.getEnvironment();
			break;
		default:
			break;
	}

	//Update the content of html element with id="info"
	$('#info').html(text);
}

function reload(){
	//Show busy indicator. Will work regardless of a environment
	busy.show();
	
	//Set timeout for 5 seconds and reload application using WL API
	setTimeout(WL.Client.reloadApp, 5000);
}

function loadWebPage(){
	//use WL API to open an URL. Will work regardless of the environment
	WL.App.openURL('http://www.ibm.com','_blank');
}

/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
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

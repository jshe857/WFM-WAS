/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

var clientID = "5dceb7cd-b733-4281-8a95-79530a0d4a96"
var groupName = "anseele" // "blue"
var blueGroupUrl = "https://w3.api.ibm.com/common/run/bluegroup/members/"+ groupName +"?attrib=uid&client_id=" + clientID
var blueGroupPath = "/common/run/bluegroup/members/"+ groupName +"?attrib=email&client_id=" + clientID

/**
 * @param userEmail
 *            Has to be a user's email address
 * @returns true/false if user has access to WFM
 */
function getGroup(userEmail) {
	
	//WL.Logger.error("test umail xcode");
	//WL.Logger.warn("Email Is:");
	//WL.Logger.warn(userEmail);

	var input = {
	        method : 'get',
	        returnedContentType : 'json',
	        path : blueGroupPath
	    };
	
	// Get members in bluegroup, returned as JSON
	var response = WL.Server.invokeHttp(input);
	var membersArry = response.group;
	
	var userAuthenticated = false;
	
	// Find if user is has access as listed in Bluegroups
	for (var i = 0; i < membersArry.length; i++) {
		var currEmail = membersArry[i].member;		
	   if(userEmail == currEmail) { //Email Found
		   userAuthenticated = true;
		   break;
	   }
	}
	
	// Data returned has to be a JSON Object
	var returnJSONData= '{ "isAuthenticated" : ' + userAuthenticated +' }';
	var returnJSON = JSON.parse(returnJSONData);

	return returnJSON;
}



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

function getGroup() {
	WL.Logger.warn("test");
	
	var input = {
	        method : 'get',
	        returnedContentType : 'json',
	        path : blueGroupPath
	    };
	
	return WL.Server.invokeHttp(input);
}


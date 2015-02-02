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
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "javascript", "plain", "xml", "html"  
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
var groupName = "blue"
var blueGroupUrl = "https://w3.api.ibm.com/common/run/bluegroup/members/"+ groupName +"?attrib=uid&client_id=" + clientID
var csvServer = "sydgsa.ibm.com/projects/p/practitioneravailability/"

function getCSVList() {
	
	
	WL.Logger.error("test");
	WL.Logger.warn("test");
	//WL.Logger.warn(WL.Server.configuration);
	//WL.Logger.warn(WL.Server.configuration["ssl.keystore.path"]);
	
	var input = {
	        method : 'get',
	        returnedContentType : 'csv',
	        path : "/projects/p/practitioneravailability/GBS Bench Report.csv"
	    };
	
	
	//			sydgsa.ibm.com
	//			/projects/p/practitioneravailability/GBS%20Bench%20Report.csv
	//			sydgsa.ibm.com/projects/p/practitioneravailability/GBS%20Bench%20Report.csv

	return WL.Server.invokeHttp(input);
}



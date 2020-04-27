


function vehicle()
{ 
	
    var Account=window.localStorage.getItem('accountID');
    var userID= window.localStorage.getItem('userId');
	//var VehicleID= document.getElementById('vehicleID').value;
	var globalVehicles=[];//vahiles for vehiclesStatus
	var globalVehicles1=[];
	var globalVehicles2=[];
    var v = new Date();
    document.getElementById('fromDate').value=dateToStringFormat(v);
    document.getElementById('toDate').value=dateToStringFormat(v);
     
   $.ajax({
	   type: 'get',
	   url: 'php/fuelVehicles.php',
	   data: {'accountID':Account,'userID':userID},
	   dataType: 'json',
	   success: function(data)
	   {
		   $.each(data,function(key,value)
		   {
			//   alert(globalVehicles);
		     /*  var select=document.getElementById('vehicleID');
		       var selectlength=document.getElementById("vehicleID").length;
               if(selectlength>=0){
            	   for(var i=selectlength-1;i>0;i--)
	               {
	                   select.remove(i);
	               }
               }*/
                  if(key=='groups'){
                        //  alert(value);
                          var select=document.getElementById('groupdevice');
                          var selectlength=document.getElementById("groupdevice").length;
                          if(selectlength>=0){
                             for(var i=selectlength-1;i>0;i--)
                             {
                               select.remove(i);
                             }
                         }

                       for(var i=0;i<value.length;i++)
                        {
                             var option=document.createElement("option");
                            // option.value=value[i][0];
                            // option.textContent=value[i];
                            option.value= option.text=value[i];
                            select.appendChild(option);

                        }
 

                   }               

                  if(key=="markers"){
                          var select=document.getElementById('ss');
                          var selectlength=document.getElementById("ss").length;
                          if(selectlength>=0){
                             for(var i=selectlength-1;i>0;i--)
                             {
                               select.remove(i);
                             }
                         }

                    for(var i=0;i<value.length;i++)
                    {
            	          var option=document.createElement("option");
                        //option.value=value[i][0];
            		//option.textContent=value[i][0]+'   < '+value[i][1]+'   >';
            		globalVehicles[i]=value[i][0];
            		globalVehicles1[i]=value[i][1]+'['+value[i][2];
            		
            		 option.value= option.text=value[i][0];
            		select.appendChild(option);
                     }
                        //alert(value.length+" first");
                      window.localStorage.setItem('vehicle',value[0][0]);
               
                       window.localStorage.setItem('globalVehicles',globalVehicles);
                       window.localStorage.setItem('globalVehicles1',globalVehicles1);

                     }
		   });
	   }

   });
}


 
function validuser()
{
    //window.localStorage.setItem('accountID',"kkkk");    
    var Account=window.localStorage.getItem('accountID');
   
    if (Account == '' || Account == undefined) {
         alert('Invalid User Login Again');
         window.location="../../../index.html";
     }
}
function logout()
{
    var Account=window.localStorage.getItem('accountID');
//alert(Account);
 //   window.localStorage.setItem('accountID',"");    
       alert('Logged Out. Thanks for logging in');
       window.localStorage.setItem('accountID',"");
    window.location="../vehicleStatus.html";
   

}
function back(){
	 var Account=window.localStorage.getItem('accountID');
   if(Account!="goghealth" && Account!="gvk-ut-gogh"){ 
	var uri = window.location.toString();
	var url='';
    if (uri.indexOf("?") > 0) {
	   // url = uri.substring(0,uri.indexOf("?"));
	   url=window.location.origin;
	   var port='';
       if(window.location.port!=''){port=":"+window.location.port;}
	   url=url+port+":8080/track/Track";
	} 
	
	    window.location=url;
    }else{
         window.location='http://goghealth.glovision.co:8080/track/Track';
    }

}
function sessionTimeOut()
{
    window.localStorage.setItem('accountID',"");
    alert('Session Timed Out plz login Again');
    window.location="../../../index.html";
} 
// Copyright 2013-2014 Glovision Techno Services Pvt Ltd

// Specific Form based methods

var value = window.localStorage.getItem('packagingidentify');
// new code for track request
var userid='';
var Account=window.localStorage.getItem('accountID');
var uri = window.location.toString();
  if(uri.indexOf("accountID=")>0) {
	 // var uri = window.location.toString();
	  var acc;
    	if (uri.indexOf("?") > 0) {
    		var substring=uri.substring(uri.indexOf("?"),uri.length);
    		   var keyvalue=substring.split('&');
    		         acc=keyvalue[0].split('=')[1];
    		         userid=keyvalue[1].split('=')[1];
    		         
    	    //acc = uri.substring(uri.indexOf("accountID=")+10,uri.length);
    	    
    	} 
	  value=acc+",1,1,1,1,1,1,1,1,1,1,1,1,1,1443092021,1413543222,1,1,1,1,1,1,1,1,silver";
	  window.localStorage.setItem('accountID',acc);
	  window.localStorage.setItem('userId',userid);
	  if(acc.indexOf("gvk") == -1 || acc.indexOf("gog") == -1){
	     window.localStorage.setItem('showmap','all');
	  }
	  window.localStorage.setItem('packagingidentify',value);
	  window.localStorage.setItem('vehicleType',"ambulance");
	
  }
  
value=value.split(",");


function dateToEpochDB(indate)
{
    var tempdate=new Date();
    tempdate=parseInt(Math.round(indate.getTime()/1000.0));
 //   alert("D2EB: " + tempdate);
    return tempdate;
}
function datestringToEpochDB(ds)
{
    if (ds) {
   //     alert("DS2EB: " + ds);
        var tempdate = stringFormatToDate(ds);
        return dateToEpochDB(tempdate);
    }
}

function dateToStringFormat(indate)
{
   // alert(indate);
    var month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";
    // Wed May 07 2014 20:01:48 GMT+0530 (IST)
    var d = indate.getDate();
    if (d < 10) {
        d = "0" + d;
    }
    var M = month[indate.getMonth()]; 
    var Y = indate.getFullYear();
    var H = indate.getHours();
    var i = indate.getMinutes();
    var s = indate.getSeconds();
    
    // 07-May-2014 20:01:48
    return (d + "-" + M + "-" + Y + " "+ H + ":" + i + ":" + s);
}

function stringFormatToDate(ds)
{
    // 07-May-2014 20:01:48
    //alert(ds);
    var dsArray=ds.split(/[\s-:]+/);
    
    var year = dsArray[2];
    var day = dsArray[0];
    var month;
    if (dsArray[1]=="Jan") month = 0;
    else if (dsArray[1]=="Feb") month = 1;
    else if (dsArray[1]=="Mar") month = 2;
    else if (dsArray[1]=="Apr") month = 3;
    else if (dsArray[1]=="May") month = 4;
    else if (dsArray[1]=="Jun") month = 5;
    else if (dsArray[1]=="Jul") month = 6;
    else if (dsArray[1]=="Aug") month = 7;
    else if (dsArray[1]=="Sep") month = 8;
    else if (dsArray[1]=="Oct") month = 9;
    else if (dsArray[1]=="Nov") month = 10;
    else if (dsArray[1]=="Dec") month = 11;
    
    var hour = dsArray[3];
    var minute = dsArray[4];
    var second = dsArray[5];
    
    var d = new Date (year, month, day, hour, minute, second );
    return d;
}
function EpochDBToDate(epoch){
 //   alert("EDB2D: "+epoch);
    var date = new Date(parseInt(Math.round(epoch*1000)));
  //  alert("EDB2D: "+date);
    // date.setHours(date.getHours()+5);
    // date.setMinutes(date.getMinutes()+30);
    return date;
}
function EpochDBToDateString(epoch){
  // alert("EDB2DS: "+epoch);
    var date = EpochDBToDate(epoch);
    return dateToStringFormat(date);
}
function fuelDBConverts(from){
var date=stringFormatToDate(from);
	
	var H = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
	var d = date.getDate();
    if (d < 10) {
        d = "0" + d;
    }
    var M = date.getMonth(); 
    //alert(M);
    if (M < 9) {
        M = "0" + ++M;
    }
    else {
     //alert("else");
     M = ++M;
     //alert(M);
     
    }
    var Y = date.getFullYear();
   return Y+"-"+M+"-"+d+"  "+H+":"+i+":"+s ;
	
	
}

function stringFormatToDateForFuel(ds)
{
    // 07-May-2014 20:01:48
    //alert(ds);
    var dsArray=ds.split(/[\s-:]+/);
    var year = dsArray[0];
    var day = dsArray[2];
    var month;
    if (dsArray[1]=="01") month = "Jan";
    else if (dsArray[1]=="02") month = "Feb";
    else if (dsArray[1]=="03") month = "Mar";
    else if (dsArray[1]=="04") month = "Apr";
    else if (dsArray[1]=="05") month = "May";
    else if (dsArray[1]=="06") month = "Jun";
    else if (dsArray[1]=="07") month = "Jul";
    else if (dsArray[1]=="08") month = "Aug";
    else if (dsArray[1]=="09") month ="Sep";
    else if (dsArray[1]=="10") month = "Oct";
    else if (dsArray[1]=="11") month = "Nov";
    else if (dsArray[1]=="12") month = "Dec";
    
    var hour = dsArray[3];
    var minute = dsArray[4];
    var second = dsArray[5];
    return day+"-"+month+"-"+year+"  "+ hour+":"+minute+":"+ second ;
}
function addOneDayToFromDate(){
	var date = new Date();
	date.setDate(date.getDate() - 1);
    document.getElementById("fromDate").value=dateToStringFormat(date);
    var date1 = new Date();
    document.getElementById("toDate").value=dateToStringFormat(date1);
	
}// Copyright 2013-2014 Glovision Techno Services Pvt Ltd



	
	
/////////////////vehicle Status.js///////////////
	var vehicleWithEventData=[];
	var vehicleAvailable=[];
	var globalVehicles=[];
	var globalVehicles1=[];
	function initialise4(){
	     var  myLatlng1 = new google.maps.LatLng(21.0000, 78.0000);
		 var mapOptions = {
		    zoom: 5,
		    center: myLatlng1,
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
	        streetViewControl: false,
	        mapTypeControl: false
		 }
		var  map = new google.maps.Map(document.getElementById('mapcontainer'), mapOptions);
		
	}


	 
	function twoVehiclePath(){
		var checkbox = document.getElementsByName('multipleVehicles');
		var selectVehicle=[];
		 var VehicleIndx=0;
	    for (var i = 0; i < checkbox.length; i++) {
	         if (checkbox[i].checked) {
		        selectVehicle[VehicleIndx]=checkbox[i].value;
		         VehicleIndx++;
		     }
		 }
	    if(selectVehicle.length==2){
	    	vehicleRoute(selectVehicle,3);
	     }else if(selectVehicle.length==1 || selectVehicle.length==0){
	    	 alert(" Select Two Vehicles"); 
	     }else{
	    	alert("You select More Then Two Vehicles");
	    }
	}

	/////////////////status///////////////////////////////////////////
	var map ;
	var marker=new Array();
	

	function secondsToTimeFormate(TotalAcOnTime){
		var hours=0;
		var min=0;
		var sec=0;
		if(TotalAcOnTime>=3600){
			hours=parseInt(TotalAcOnTime/(60*60));
			var tempmin=TotalAcOnTime%(60*60);
			var result=secondsToTimeFormate(tempmin);
			return hours+"Hr :"+result;
		}else if(TotalAcOnTime>=60){
			 min=parseInt(TotalAcOnTime/60);
			 var tempsec=TotalAcOnTime%60;
			 
			 return min+" Min :"+secondsToTimeFormate(tempsec);
		}else{
		     return TotalAcOnTime+" sec";	
		}
		
	}
	
	function UrlExit(url) {
	/*	var http = new XMLHttpRequest();
	    http.open('HEAD', url, false);
	    http.send();
	    return http.status!=404;*/
    return true;
	}
	
	function allVehicleStatus() {
// alert(window.localStorage.getItem('showmap'));
		if(nochangeofflineonlineidle=='no'){
		 window.localStorage.setItem('showmap',"all");
		}
		if(vehicleWithEventData.length>0){
	    var markerinfo=[];
	    var zoom1=6;
	    var myLatlng1;
	    var mapInitializeOnce=0;
	    
	    var vehicleAvailableIndex=0;
	    var markers = [];
	 
	    var showvehicles=window.localStorage.getItem('showmap');
     //     alert(showvehicles);
	    for(var i=0;i<vehicleWithEventData.length;i++){
	    	
	    	var lastEventOfVehicle=vehicleWithEventData[i].length-1;
	    	var mapOptions ;
	    	
	    	if(vehicleWithEventData[i].length>0){
	    		var lastEvntDate=stringFormatToDate(stringFormatToDateForFuel(vehicleWithEventData[i][lastEventOfVehicle][4]+""));
	    		var epoc1=dateToEpochDB(lastEvntDate);
	    		var currentTime = new Date();
	    	    var epoc2=dateToEpochDB(currentTime);
	    	    
	             if(showvehicles!="single"){
    	   
	    	 
	        	 if(mapInitializeOnce==0){
	        		myLatlng1 = new google.maps.LatLng(parseFloat(vehicleWithEventData[i][0][6]),parseFloat(vehicleWithEventData[i][0][7]));
	        		 //myLatlng1 = new google.maps.LatLng(21.0000, 78.0000);
	                 mapOptions = {
	                     zoom: zoom1,
	                     center: myLatlng1,
	                     mapTypeControlOptions: {
	                         mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                 position: google.maps.ControlPosition.LEFT_CENTER
	                     },
	                     mapTypeId: google.maps.MapTypeId.ROADMAP,
	                     streetViewControl: true,
	                     mapTypeControl: true,
	                     show_markers: false,
	                     type: 'polygon',
	                     draggable: true
	                 } 
	                 map = new google.maps.Map(document.getElementById('mapcontainer'), mapOptions);
	                 
	        		 mapInitializeOnce++;
	        	 }
	        }	 
	        	 var vehicleStatusColor="#F78181";
	    	     if(vehicleWithEventData[i][lastEventOfVehicle][2]=='61714'){
	    		     vehicleStatusColor="#81F781";
	    	     }
	    	     var statusColor='blue';
	  	        // var image='http://track.glovision.co:8080/statictrack/images/custom/'+vehicleWithEventData[i][lastEventOfVehicle][9]+'.png';
	    	     
	    	     //alert(vehicleWithEventData[i][lastEventOfVehicle][11]);
	    	   if(showvehicles!="single"){
 
                    var position = new google.maps.LatLng(parseFloat(vehicleWithEventData[i][lastEventOfVehicle][6]),parseFloat(vehicleWithEventData[i][lastEventOfVehicle][7]));
                    }
	  	         var title1='Ignition Off';
	  	         var showstatus='';
	  	   	     if(vehicleWithEventData[i][lastEventOfVehicle][2]=="61714"){
	     		     title1="Running";
	  		         statusColor="green";
	  		       showstatus='online';
			     }else if(vehicleWithEventData[i][lastEventOfVehicle][2]=="61718" || vehicleWithEventData[i][lastEventOfVehicle][2]=="61720"){
				     title1="Idle";
	   		         statusColor="yellow";
	   		      showstatus='idle';
			    }else if(vehicleWithEventData[i][lastEventOfVehicle][2]=="61717" || vehicleWithEventData[i][lastEventOfVehicle][2]=="61477"){
				     title1="stopped";
	           	     statusColor="red";
	           	     showstatus='idle';
			    }else if(vehicleWithEventData[i][lastEventOfVehicle][2]=="0000"){
			    	title1="offline";
			    	showstatus='offline';
			    }else{
			    	title1="stopped";
	           	     statusColor="red";
	           	  showstatus='idle';
			   }
	  	   	    // if(vehicleWithEventData[i][0][9]=='tn23ah0648'){alert(title1+vehicleWithEventData[i][lastEventOfVehicle][11]+vehicleWithEventData[i][lastEventOfVehicle][2]);}
	  	   	    
	  	   	     
	  	   	//if(parseInt((epoc2-epoc1)/60)>12){title1="offline";}
	  	   	  //var vehiclesType=window.localStorage.getItem('vehicleType');
	  	   	var uri = window.location.toString();
	  		var url='';
	  	    if (uri.indexOf("?") > 0) {
	  	    	 var port='';
		           if(window.location.port!=''){port=":"+window.location.port;}
		  	      url = window.location.origin+port;
		          // url='http://track.glovision.co:8080';
	  		    	    
	  		} 
	  	   	 var vehiclesType=vehicleWithEventData[i][lastEventOfVehicle][13];
	  	   //vehiclesType="ambulance";
	  	   	if(vehiclesType==''){vehiclesType='ambulance'; }
	  	   	var image='images/'+vehiclesType+'/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
	  	  if(!UrlExit(image)){
	  	//	alert(image+" 1");
	  	    	image='images/vehicle.png'
	  		   image= url+'/statictrack/images/custom/'+vehicleWithEventData[i][lastEventOfVehicle][9]+'.png';
	  	    	if(!UrlExit(image)){image='images/vehicle.png';}
	  	    	
	  	    }
            
	  	   //alert(image);
	  	if(showvehicles!="single" && (showvehicles==showstatus || showvehicles=='all')){ 
	         marker[i] = new google.maps.Marker({
	                position: position,
	                map: map,
	                icon: image,
	                animation: google.maps.Animation.DROP,
	                title:"vehicle Id: "+vehicleWithEventData[i][0][9]+"  Speed : "+vehicleWithEventData[i][0][3]+"  Odometer Reading: "+vehicleWithEventData[i][0][5]+"Status: "+title1,
	                visible: true
	            });
	         
	        	
	            markers.push(marker[i]);
	     }
	         var boxText = document.createElement("div");
	   		boxText.style.cssText = "border: 1px solid black; margin-top: 8px; background: "+statusColor+"; padding: 1px;";
	   		boxText.innerHTML = vehicleWithEventData[i][lastEventOfVehicle][9]+" :"+title1;
	   		//boxText.innerHTML='ra';
	   		var  myOptions = {
	   			 content: boxText
	   			
	   		};
	           
	   		

	           
	   		var Account=window.localStorage.getItem('accountID');
              if(showvehicles!="single")
	   		  iw = new google.maps.InfoWindow(myOptions);
	       // google.maps.event.addListener(marker[i], "click", function (e) {iw.open(map,this); });
	        var lablediplay=$( "#lableDiplay" ).val();
	        if(lablediplay == "enable"){
                    if(showvehicles!="single") 
                       iw.open(map, marker[i]);
	         }
	       
		      //  google.maps.event.addListener(marker[i], "click", function () { iw.open(map, marker[i]); });
	     
	       

	        /*google.maps.event.addListener(marker, 'mouseover', function() {
	            if (!this.infowindow) {
	                this.infowindow = new google.maps.InfoWindow({content: 'abc'});
	            }
	            this.infowindow.open(map, this);
	        });
	        google.maps.event.addListener(marker, 'mouseout', function() {
	            this.infowindow.close();
	        });*/
	             // iw.open(map, marker);
	           //  if(parseInt((epoc2-epoc1)/(60*60))<24){
	            	 vehicleAvailable[vehicleAvailableIndex]=[];
	  	             vehicleAvailable[vehicleAvailableIndex][0]=vehicleWithEventData[i][0][9];
	  	             vehicleAvailable[vehicleAvailableIndex][1]=vehicleWithEventData[i][lastEventOfVehicle][2];
	  	             vehicleAvailable[vehicleAvailableIndex][2]=vehicleWithEventData[i][lastEventOfVehicle][5];
	  	             vehicleAvailable[vehicleAvailableIndex][3]=vehicleWithEventData[i][lastEventOfVehicle][8];
	  	             vehicleAvailable[vehicleAvailableIndex][4]=vehicleWithEventData[i][lastEventOfVehicle][10];
	  	             vehicleAvailable[vehicleAvailableIndex][5]=vehicleWithEventData[i][lastEventOfVehicle][3];
	  	           vehicleAvailable[vehicleAvailableIndex][6]=vehicleWithEventData[i][lastEventOfVehicle][12];
	  	         vehicleAvailable[vehicleAvailableIndex][7]=vehicleWithEventData[i][lastEventOfVehicle][13];
	  	       vehicleAvailable[vehicleAvailableIndex][8]=vehicleWithEventData[i][lastEventOfVehicle][11];
	  	     vehicleAvailable[vehicleAvailableIndex][9]=vehicleWithEventData[i][lastEventOfVehicle][14];
	             /*} else{
	            	 //alert(secondsToTimeFormate(epoc2-epoc1));
	            	  
	     	    	    vehicleAvailable[vehicleAvailableIndex]=[];
	     	            vehicleAvailable[vehicleAvailableIndex][0]=vehicleWithEventData[i][0][9];
	     	            vehicleAvailable[vehicleAvailableIndex][1]="0000";
	     	            vehicleAvailable[vehicleAvailableIndex][2]=vehicleWithEventData[i][lastEventOfVehicle][5];
	     	            vehicleAvailable[vehicleAvailableIndex][3]=vehicleWithEventData[i][lastEventOfVehicle][8];
	     	            vehicleAvailable[vehicleAvailableIndex][4]="Disconnect in" +secondsToTimeFormate(epoc2-epoc1);
	     	           vehicleAvailable[vehicleAvailableIndex][5]=vehicleWithEventData[i][lastEventOfVehicle][3];
	     	          vehicleAvailable[vehicleAvailableIndex][6]=vehicleWithEventData[i][lastEventOfVehicle][12];
	     	         vehicleAvailable[vehicleAvailableIndex][7]=vehicleWithEventData[i][lastEventOfVehicle][13];
	     	        vehicleAvailable[vehicleAvailableIndex][8]=vehicleWithEventData[i][lastEventOfVehicle][11];
	     	       vehicleAvailable[vehicleAvailableIndex][9]=vehicleWithEventData[i][lastEventOfVehicle][14];
	     	    	}
	             
	          */
	            /* var populationOptions = {
	       	         strokeColor: vehicleStatusColor,
	       	         strokeOpacity: 0.8,
	       	         strokeWeight: 2,
	       	         fillColor: vehicleStatusColor,
	       	         fillOpacity: 0.35,
	       	         map: map,
	       	         center:new google.maps.LatLng(parseFloat(vehicleWithEventData[i][lastEventOfVehicle][6]),parseFloat(vehicleWithEventData[i][lastEventOfVehicle][7])),
	                 radius:2000,
	       	     };
	             cityCircle = new google.maps.Circle(populationOptions);*/
	            //allVehicleRoute(map); //too late load all vehicles
	               
	       	    // Add the circle for this city to the map.
	 
	    	    
	       	}else{
	       	   
	       	  var res=['','',''];
              
               for(var j=0;j<globalVehicles1.length;j++){
            	   var dis=globalVehicles1[j].toUpperCase();
               	if (dis.indexOf(globalVehicles[i].toUpperCase()) !=-1) {
               		 var res=globalVehicles1[j].split("][");
               		
               	     break;
               	}
               }
	       		vehicleAvailable[vehicleAvailableIndex]=[];
	            vehicleAvailable[vehicleAvailableIndex][0]=globalVehicles[i];
	            vehicleAvailable[vehicleAvailableIndex][1]="0000";
	            vehicleAvailable[vehicleAvailableIndex][2]="0";
	            vehicleAvailable[vehicleAvailableIndex][3]="No Location";
	            vehicleAvailable[vehicleAvailableIndex][4]="Vehicle Repair";
	            vehicleAvailable[vehicleAvailableIndex][5]="";
   	          vehicleAvailable[vehicleAvailableIndex][6]=res[2]+"/"+res[1];
   	         vehicleAvailable[vehicleAvailableIndex][7]="";
   	        vehicleAvailable[vehicleAvailableIndex][8]="";
   	       vehicleAvailable[vehicleAvailableIndex][9]=res[3];
	       	}
	    	vehicleAvailableIndex++;
	    }//end loop
	    ///allVehicleRoute(map); //here is load all vehicles early
	    //var mc = new MarkerClusterer(map);
	    //var zoom = parseInt(document.getElementById('zoom').value, 10);
	    //var size = parseInt(document.getElementById('size').value, 10);
	    //var style = parseInt(document.getElementById('style').value, 10);
	    //zoom = zoom == -1 ? null : zoom;
	    //size = size == -1 ? null : size;
	    //style = style == -1 ? null: style;
//	    alert(showvehicles);
	  if(showvehicles!="single"){

               var markerClusterer = new MarkerClusterer(map, markers, {
	        maxZoom: zoom1,
	        gridSize: 10,
	      });
            //    availabilityVehicles();
            }else{
              //      availabilityVehicles(); 
                     //  alert(window.localStorage.getItem('selectedVehicleIndx')); 
                   vehicleRoute(window.localStorage.getItem('selectedVehicleIndx'),1);                   
             }	    

	  availabilityVehicles();

	   }//end if   
	}
	function allvehiclesInfo(){nochangeofflineonlineidle='no';allVehicleStatus();}
	function online(){window.localStorage.setItem('showmap',"online");nochangeofflineonlineidle='yes';allVehicleStatus();}
	function offline(){window.localStorage.setItem('showmap',"offline");nochangeofflineonlineidle='yes';allVehicleStatus();}
	function idle(){window.localStorage.setItem('showmap',"idle");nochangeofflineonlineidle='yes';allVehicleStatus();}
	function MapClear() {
		if(nochangeofflineonlineidle=='no'){
		window.localStorage.setItem('showmap',"clear");
		}
		if(vehicleWithEventData.length>0){
	    var markerinfo=[];
	    var zoom1=8;
	    var myLatlng1;
	    var mapInitializeOnce=0;
	    
	    var vehicleAvailableIndex=0;
	    var markers = [];
	 
	   
	    for(var i=0;i<vehicleWithEventData.length;i++){
	    	
	    	var lastEventOfVehicle=vehicleWithEventData[i].length-1;
	    	var mapOptions ;
	    	
	    	if(vehicleWithEventData[i].length>0){
	    		var lastEvntDate=stringFormatToDate(stringFormatToDateForFuel(vehicleWithEventData[i][lastEventOfVehicle][4]+""));
	    		var epoc1=dateToEpochDB(lastEvntDate);
	    		var currentTime = new Date();
	    	    var epoc2=dateToEpochDB(currentTime);
	    	    if(mapInitializeOnce==0){
	        		myLatlng1 = new google.maps.LatLng(parseFloat(vehicleWithEventData[i][0][6]),parseFloat(vehicleWithEventData[i][0][7]));
	        		 //myLatlng1 = new google.maps.LatLng(21.0000, 78.0000);
	                 mapOptions = {
	                     zoom: zoom1,
	                     center: myLatlng1,
	                     mapTypeControlOptions: {
	                         mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                                  position: google.maps.ControlPosition.LEFT_CENTER
	                     },
	                     mapTypeId: google.maps.MapTypeId.ROADMAP,
	                     streetViewControl: true,
	                     mapTypeControl: true,
	                     show_markers: false,
	                     type: 'polygon',
	                     draggable: true
	                 } 
	                 map = new google.maps.Map(document.getElementById('mapcontainer'), mapOptions);
	                 
	        		 mapInitializeOnce++;
	        	 }
	        	 
	        	
	         //    if(parseInt((epoc2-epoc1)/(60*60))<24){
	            	 vehicleAvailable[vehicleAvailableIndex]=[];
	            	  
	  	             vehicleAvailable[vehicleAvailableIndex][0]=vehicleWithEventData[i][0][9];
	  	             vehicleAvailable[vehicleAvailableIndex][1]=vehicleWithEventData[i][lastEventOfVehicle][2];
	  	             vehicleAvailable[vehicleAvailableIndex][2]=vehicleWithEventData[i][lastEventOfVehicle][5];
	  	             vehicleAvailable[vehicleAvailableIndex][3]=vehicleWithEventData[i][lastEventOfVehicle][8];
	  	             vehicleAvailable[vehicleAvailableIndex][4]=vehicleWithEventData[i][lastEventOfVehicle][10];
	  	             vehicleAvailable[vehicleAvailableIndex][5]=vehicleWithEventData[i][lastEventOfVehicle][3];
	  	           vehicleAvailable[vehicleAvailableIndex][6]=vehicleWithEventData[i][lastEventOfVehicle][12];
	  	         vehicleAvailable[vehicleAvailableIndex][7]=vehicleWithEventData[i][lastEventOfVehicle][13];
	  	       vehicleAvailable[vehicleAvailableIndex][8]=vehicleWithEventData[i][lastEventOfVehicle][11];
	  	     vehicleAvailable[vehicleAvailableIndex][9]=vehicleWithEventData[i][lastEventOfVehicle][14];
	           /*  } else{
	     	    	 // alert(secondsToTimeFormate(epoc2-epoc1));
	     	    	    vehicleAvailable[vehicleAvailableIndex]=[];
	     	            vehicleAvailable[vehicleAvailableIndex][0]=vehicleWithEventData[i][0][9];
	     	            vehicleAvailable[vehicleAvailableIndex][1]="0000";
	     	            vehicleAvailable[vehicleAvailableIndex][2]=vehicleWithEventData[i][lastEventOfVehicle][5];
	     	            vehicleAvailable[vehicleAvailableIndex][3]=vehicleWithEventData[i][lastEventOfVehicle][8];
	     	            vehicleAvailable[vehicleAvailableIndex][4]="Disconnect in" +secondsToTimeFormate(epoc2-epoc1);
	     	           vehicleAvailable[vehicleAvailableIndex][5]=vehicleWithEventData[i][lastEventOfVehicle][3];
	     	          vehicleAvailable[vehicleAvailableIndex][6]=vehicleWithEventData[i][lastEventOfVehicle][12];
	     	         vehicleAvailable[vehicleAvailableIndex][7]=vehicleWithEventData[i][lastEventOfVehicle][13];
	     	        vehicleAvailable[vehicleAvailableIndex][8]=vehicleWithEventData[i][lastEventOfVehicle][11];
	     	       vehicleAvailable[vehicleAvailableIndex][9]=vehicleWithEventData[i][lastEventOfVehicle][14];
	     	    	}*/
	           
	       	}else{
	       		
	       	  var res=['','',''];
             
                for(var j=0;j<globalVehicles1.length;j++){
                	var dis=globalVehicles1[j].toUpperCase();
                	if (dis.indexOf(globalVehicles[i].toUpperCase()) !=-1) {
                		 var res=globalVehicles1[j].split("][");
                	//hellloooooooooo raaaaaammmmmmasaaaaa	
                	     break;
                	}
                }
	       		vehicleAvailable[vehicleAvailableIndex]=[];
	            vehicleAvailable[vehicleAvailableIndex][0]=globalVehicles[i];
	            vehicleAvailable[vehicleAvailableIndex][1]="0000";
	            vehicleAvailable[vehicleAvailableIndex][2]="0";
	            vehicleAvailable[vehicleAvailableIndex][3]="No Location";
	            vehicleAvailable[vehicleAvailableIndex][4]="Vehicle Repair";
	            vehicleAvailable[vehicleAvailableIndex][5]="";
	   	          vehicleAvailable[vehicleAvailableIndex][6]=res[2]+"/"+res[1];
	   	         vehicleAvailable[vehicleAvailableIndex][7]="";
	   	        vehicleAvailable[vehicleAvailableIndex][8]="";
	   	       vehicleAvailable[vehicleAvailableIndex][9]=res[3];
	       	}
	    	vehicleAvailableIndex++;
	    }//end loop
	    
	 
	    availabilityVehicles();

	   }//end if   
	}
	
	
	
	
	function allVehicleStatusWithRoute(){
		allVehicleStatus();
		allVehicleRoute(map);
	}
	var id;
	function vehicleRoute(VehiclesArrayOrVehicle,typeview){
		//clearTimeOut();
		//var distanceRange=document.getElementById('distanceRange').value;
                 var distanceRange=15;

		nochangeofflineonlineidle="yes";
	window.localStorage.setItem('showmap',"single");
                 // alert(VehiclesArrayOrVehicle);
              window.localStorage.setItem('selectedVehicleIndx',VehiclesArrayOrVehicle);  
                 //     alert(window.localStorage.getItem('showmap'));	
		var vehicleNo=VehiclesArrayOrVehicle;
		if(typeview==3){
			vehicleNo=VehiclesArrayOrVehicle[0];
		}
		var map;
		if(vehicleWithEventData[vehicleNo].length>0){
			var lineSymbol = {
			        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
			        strokeColor: '#2E2EFE' //arrow color
		        };
		    myLatlng1 = new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleNo][0][6]),parseFloat(vehicleWithEventData[vehicleNo][0][7]));
		   

	        mapOptions = {
	            zoom: 15,
	            center: myLatlng1,
	            mapTypeControlOptions: {
	                mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
                        position: google.maps.ControlPosition.LEFT_CENTER
	            },
	         mapTypeId: google.maps.MapTypeId.ROADMAP,
	         streetViewControl: true,
	         mapTypeControl: true,
	         show_markers: false,
	         type: 'polygon',
	         draggable: true
	        } 
	        map = new google.maps.Map(document.getElementById('mapcontainer'), mapOptions);
	        if(typeview==3){
	       
	        	   map.setZoom(15);
	        	for(var index=0;index<VehiclesArrayOrVehicle.length;index++){
	        		startAndStopOfVehiclePosition(VehiclesArrayOrVehicle[index],map,'yes');
	        	}
	        
	        
	        }else{
	        	startAndStopOfVehiclePosition(vehicleNo,map,'yes');
                       // show vehicles 15 so for from selected vehicle
                       var selectvehilcepoint=new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleNo][0][6]),parseFloat(vehicleWithEventData[vehicleNo][0][7]));
                         for(var eventInx=0;eventInx<vehicleWithEventData.length;eventInx++){
                             if(vehicleWithEventData[eventInx]!=''){
                              var vehiclepoints=new google.maps.LatLng(parseFloat(vehicleWithEventData[eventInx][0][6]),parseFloat(vehicleWithEventData[eventInx][0][7]));

                               var dis= getDistance(selectvehilcepoint,vehiclepoints);
                                   
                                   if(dis<distanceRange){//show vehicle on map less 15 km from selected vehicle
                                           startAndStopOfVehiclePosition(eventInx,map,'no');
                                 } 
                              }

                         }
	        }
	        
	        if(typeview==3){
	        	document.getElementById("play").disabled = false;
	        	var vehicle1Index1=0;
	        	var vehicle1Index2=0;
	        	var vehicleNo1=VehiclesArrayOrVehicle[0];
	        	var VehicleNo2=VehiclesArrayOrVehicle[1];
	        	var lineSymbol1 = {
	    		        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
	    		        strokeColor: '#FF0040' //arrow color
	    	        };
	        
	        	id=setInterval(function(){
	        
					     if(vehicle1Index1>vehicleWithEventData[vehicleNo1].length-2 && vehicle1Index2>vehicleWithEventData[vehicleNo2].length-2){
					           //clearTimeOut();
				          }else{
				        	  if(vehicle1Index1 < vehicleWithEventData[vehicleNo1].length-2){
				        		  DrawLineMarkerToMarker(vehicleNo1,vehicle1Index1,map,lineSymbol); 
				        		  vehicle1Index1++;
				        	  }
				        	  if(vehicle1Index2 < vehicleWithEventData[VehicleNo2].length-2){
				        		  DrawLineMarkerToMarker(VehicleNo2,vehicle1Index2,map,lineSymbol1);
				        		  vehicle1Index2++;
				        	  }
				         	 
				         }
				        },1);//setInterval funcion closed
			}else if(typeview==2 && vehicleWithEventData[vehicleNo].length>2){
				document.getElementById("play").disabled = false;
	        	eventInx=0;
	        	 map.setZoom(14);
	        	id=setInterval(function(){
					     if(eventInx>vehicleWithEventData[vehicleNo].length-2){
					           //clearTimeOut();
				          }else{
				        	  DrawLineMarkerToMarker(vehicleNo,eventInx,map,lineSymbol);
				        	  eventInx++;
				        
				         }
				        },1);//setInterval funcion closed
				    
	       	   
	        }else{
	        	 map.setZoom(10);
	        	for(var eventInx=0;eventInx<vehicleWithEventData[vehicleNo].length-2;eventInx++){
			       var lat=parseFloat(vehicleWithEventData[vehicleNo][eventInx][6]);
			 	   var lang=parseFloat(vehicleWithEventData[vehicleNo][eventInx][7]);
			 	  var title1="vehicle Id: "+vehicleWithEventData[vehicleNo][eventInx][9]+"  Adress : "+vehicleWithEventData[vehicleNo][eventInx][8]+"  Odometer Reading: "+vehicleWithEventData[vehicleNo][eventInx][5];
			 	 CheckIgnitionOnOffIdelStop(lat,lang,vehicleNo,eventInx,map,title1,'no');
			 	  /* if(typeview==1){
			 		alert(typeview);
			       CheckIgnitionOnOffIdelStop(lat,lang,vehicleNo,eventInx,map,title1,'no');
			 	 }else{
			 		 alert(typeview);
			 
			 	 }*/
			      replayPath(vehicleNo,eventInx,lineSymbol,map,title1);
	       	    }//end inner loop
	        }//end if
		}else{
			
		     alert("Vehicle Has No movement");
		}
	}//end vehicleRoute Function
var rad = function(x) {
  return x * Math.PI / 180;
};
function getDistance(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat() - p1.lat());
  var dLong = rad(p2.lng() - p1.lng());
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d/1000; // returns the distance in km
}

	function DrawLineMarkerToMarker(vehicleNo,eventInx,map,lineSymbol){
		 var lat=parseFloat(vehicleWithEventData[vehicleNo][eventInx][6]);
		 var lang=parseFloat(vehicleWithEventData[vehicleNo][eventInx][7]);
		 var title1="vehicle Id: "+vehicleWithEventData[vehicleNo][eventInx][9]+"  Adress : "+vehicleWithEventData[vehicleNo][eventInx][8]+"  Odometer Reading: "+vehicleWithEventData[vehicleNo][eventInx][5];
	     CheckIgnitionOnOffIdelStop(lat,lang,vehicleNo,eventInx,map,title1,'yes'); 
		 var lineCoordinates = [
		      new google.maps.LatLng(lat,lang),
			  new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleNo][eventInx+1][6]),parseFloat(vehicleWithEventData[vehicleNo][eventInx+1][7]))
			 ];
		 var line = new google.maps.Polyline({
		     icons: [{
			    icon: lineSymbol,
			    offset: '100%'
			    }],
			 path: lineCoordinates,
			 geodesic: true,
			 strokeColor: '#4e5eb0',
			 strokeOpacity: 1.0,
			 strokeWeight: 2
			 });
		    
	      line.setMap(map);
	 
	      
	}
	function putPushpin(lat,lang,map,image,title1){
		var position = new google.maps.LatLng(lat,lang);
	    var marker = new google.maps.Marker({
	       position: position,
	       map: map,
	       icon: image,
	      // animation: google.maps.Animation.BOUNCE,
	       // animation: google.maps.Animation.DROP,
	       title:title1
	    }); 
	  
	    

	}


	function putPushpinVehicles(lat,lang,map,image,title1,vehicle,infoStatus){
		var position = new google.maps.LatLng(lat,lang);
		//map.setZoom(30);
		//var bounds = new google.maps.LatLngBounds(lat,lang);
		 //map.fitBounds(position);
	    var marker = new google.maps.Marker({
	       position: position,
	       map: map,
	       icon: image,
	      // animation: google.maps.Animation.BOUNCE,
	       // animation: google.maps.Animation.DROP,
	       title:title1
	    });
        var iw = new google.maps.InfoWindow({
            content:title1
      });
         marker.addListener('click', function() {
             iw.open(map, marker);
        });
	 
 
	    if(infoStatus=='yes'){
	    	  var contentString = '<div style="width: 100%; padding-left:0px; height: 100%;float: left;color: #FFF;background: #ed1e79;line-height: 25px;border-radius:5px 5px 0px 0px;"><strong><b>"You feild"</b></strong></div>';

	       // var iw = new google.maps.InfoWindow({
	        //content: 'Fuel :'+one1[val][2]+' Ltrs<br>   Odometer Reading: '+one1[val][7]+' Km<br> Address:'+one1[val][10]+"<br> Speed"+one1[val][4]+"KPh"
	   	 //  content:title1,
	       // content:contentString,
	       //disableAutoPan: true,
	       //maxWidth: 30
	   	   /*height:20,
	   	   shadowStyle: 1,
	       padding: 10,      
	       backgroundColor: 'blue',
	       borderRadius: 5,
	       arrowSize: 10,
	       borderWidth: 1,
	       maxWidth: 400,
	       borderColor: '#A85E45',
	       disableAutoPan: false,
	       hideCloseButton: true,
	       arrowPosition: 50,
	       backgroundClassName: 'phoney',
	       disableAutoPan: true,
	       hideCloseButton: false,
	       arrowStyle: 0
	   	   */
	   	   
	       // });
	      iw.open(map, marker);  // if it is enable zoom map autometically when infowindow is open
	    }

	}

	function startAndStopOfVehiclePosition(vehicleNo,map,infostatus){
		 var lastEventOfVehicle=vehicleWithEventData[vehicleNo].length-1;
		 //var image='http://track.glovision.co:8080/statictrack/images/custom/'+vehicleWithEventData[vehicleNo][0][9]+'.png';
		 //var image='../../../images/ambulance.png';
		 
		 var title1='Ignition Off';
	   	     if(vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="61714"){
 		     title1="Running";
		      
	     }else if(vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="61718" || vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="61720"){
		     title1="Idle";
		        
	    }/*else if(vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="61717" || vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="61477"){
		    
	    	title1="stopped";
      	     
	   }*/else if(vehicleWithEventData[vehicleNo][lastEventOfVehicle][2]=="0000"){title1="offline";
	    }else{
		   
		 	    
		    	title1="stopped";
	      
	   }
	   	  
	   	  var lastEvntDate=stringFormatToDate(stringFormatToDateForFuel(vehicleWithEventData[vehicleNo][lastEventOfVehicle][4]+""));
  		var epoc1=dateToEpochDB(lastEvntDate);
  		var currentTime = new Date();
  	    var epoc2=dateToEpochDB(currentTime);
  	  if(parseInt((epoc2-epoc1)/(60*60))>24){
  		title1="offline";
  	  }
	   	 
	   	  var vehiclesType=vehicleWithEventData[vehicleNo][lastEventOfVehicle][13];
	   	// vehiclesType="ambulance";
	  	   	 if(vehiclesType==''){vehiclesType='ambulance'; }
	  	   	   var image='images/'+vehiclesType+'/'+title1+vehicleWithEventData[vehicleNo][lastEventOfVehicle][11]+'.png';
	  if(UrlExit(image)){
	  		   // image='../images/ambulance/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
	  	    }else{
	  	    	
	  	    	var uri = window.location.toString();
	  	  	    var url='';
	  	        if (uri.indexOf("?") > 0) {
	  	        	 var port='';
	  	           if(window.location.port!=''){port=":"+window.location.port;}
	  	  	       url = window.location.origin+port;
	  	  	    }   
	  	  	
	  	      //alert(image+" 2");
	  	    	image=url+'/statictrack/images/custom/'+vehicleWithEventData[vehicleNo][lastEventOfVehicle][9]+'.png';
	  	    	if(!UrlExit(image)){image='images/vehicle.png';}
	  	    }
	   	     
	   	     
			//var image='images/ambulance/'+title1+vehicleWithEventData[vehicleNo][lastEventOfVehicle][11]+'.png';
	  	 	//alert(image);
	  	  var discription='';
	  	var Account=window.localStorage.getItem('accountID');
	  	  if(Account.indexOf("gvk")>-1 || Account.indexOf("gog")>-1){
        	  if((typeof(vehicleWithEventData[vehicleNo][lastEventOfVehicle][12]) !== 'undefined') && (vehicleWithEventData[vehicleNo][lastEventOfVehicle][12] !== null)) {
		          var result = vehicleWithEventData[vehicleNo][lastEventOfVehicle][12].split("/");
		          
		          discription="Base Location :<b>"+(typeof(result[1])== 'undefined'?' ':result[1]).replace(']','')+"</b><br>Dist :<b>"+(typeof(result[0])== 'undefined'?'':result[0]).replace(']','')+"</b><br> Phone:<b>"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][14]+"</b><br>Staus :<b>"+title1+"</b>";
			      
        	  }
		 }
	  	    //call geoaddresss code 
	  	// var address=GetAddress(vehicleWithEventData[vehicleNo][lastEventOfVehicle][6],vehicleWithEventData[vehicleNo][lastEventOfVehicle][7]);
	     //alert(address);
	  	 var vehicleTitle="<h4> vehicle Id:  "+(vehicleWithEventData[vehicleNo][lastEventOfVehicle][9].toUpperCase())+"<br>DateTime :<b>"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][4]+"</b><br> Lat/Long :<b>"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][6]+"/"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][7]+"</b><br>Speed :<b>"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][3]+" Kmph</b>";
	 // 	 if(infostatus=='no'){vehicleTitle="vehicle Id:  "+(vehicleWithEventData[vehicleNo][lastEventOfVehicle][9].toUpperCase());} 
                 var subtitle="<br>  Odometer Reading: <b>"+vehicleWithEventData[vehicleNo][lastEventOfVehicle][5]+" Km</b><br>"+discription+"</h4>";
	  	GetAddress(parseFloat(vehicleWithEventData[vehicleNo][lastEventOfVehicle][6]),parseFloat(vehicleWithEventData[vehicleNo][lastEventOfVehicle][7]),map,image,vehicleTitle,vehicleWithEventData[vehicleNo][lastEventOfVehicle][9],infostatus,subtitle);
	     var title2="vehicle Id: "+vehicleWithEventData[vehicleNo][0][9]+"<br>  Adress : "+vehicleWithEventData[vehicleNo][0][8]+" <br> Odometer Reading: "+vehicleWithEventData[vehicleNo][0][5];
	     var image1='';
	   //  putPushpinVehicles(parseFloat(vehicleWithEventData[vehicleNo][0][6]),parseFloat(vehicleWithEventData[vehicleNo][0][7]),map,image1,title2,vehicleWithEventData[vehicleNo][0][9],'yes');

	}
	
	function GetAddress(lat1,long1,map,image,vehicleTitle,vehicle,st,subtitle) {
        var lat = parseFloat(lat1);
        var lng = parseFloat(long1); 
       
        var latlng = new google.maps.LatLng(lat, lng);
        var geocoder = geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                   // alert("Location: " + results[1].formatted_address);
                   //return results[1].formatted_address;
                 //  if(st=='yes')
                    vehicleTitle=vehicleTitle+ "<br>  Adress : <b>"+results[1].formatted_address+"</b>"+subtitle;
                    //  alert(vehicleTitle); 
                   putPushpinVehicles(lat1,long1,map,image,vehicleTitle,vehicle,st);
             	  
                }
            }
        });
		
        
	}
	
	function CheckIgnitionOnOffIdelStop(lat,lang,vehicleNo,eventInx,map,title1,infoStatus){

		 	  if(vehicleWithEventData[vehicleNo][eventInx][2]=="61718" || vehicleWithEventData[vehicleNo][eventInx][2]=="61720"){//idel
			//var image='../../../images/blue-dot.png';
		 		 var image='images/yellow.png';
		 	  //var image='../../../images/ambulance.png';
			  title1=title1+"   Idle";
			  putPushpinVehicles(lat,lang,map,image,title1,'Idle',infoStatus);
		  }else if(vehicleWithEventData[vehicleNo][eventInx][2]=="61717" || vehicleWithEventData[vehicleNo][eventInx][2]=="61477"){//off
			title1=title1+"   Ignition Off";
			//var image='http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
			var image='images/red.png'
			//	var image='../../../images/ambulance.png';
			putPushpinVehicles(lat,lang,map,image,title1,'Ignition Off',infoStatus);
	    }else if(vehicleWithEventData[vehicleNo][eventInx][2]=="61714"){//ignition on
	 	   title1=title1+"   Running";
	 	  var image='images/green.png'
	 		// var image='../../../images/ambulance.png';
			 //  var image='http://maps.google.com/mapfiles/ms/icons/green-dot.png';
			   putPushpinVehicles(lat,lang,map,image,title1,'Ignition on',infoStatus);
	    }
		 
	}
	function clearTimeOut(){
		//setTimeout(id);
		clearTimeout(id);
		//alert("completed");

	}
	function replayPath(vehicleNo,eventInx,lineSymbol,map,contentString){
	  var lineCoordinates = [
	      new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleNo][eventInx][6]),parseFloat(vehicleWithEventData[vehicleNo][eventInx][7])),
	      new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleNo][eventInx+1][6]),parseFloat(vehicleWithEventData[vehicleNo][eventInx+1][7]))
	  ];
	  var line = new google.maps.Polyline({
	      icons: [{
	          icon: lineSymbol,
	          offset: '100%'
	      }],
	      path: lineCoordinates,
	      geodesic: true,
	      label: contentString,
	      strokeColor: '#4e5eb0',
	      strokeOpacity: 1.0,
	      strokeWeight: 2
	      });
	    line.setMap(map);

	}

	function allVehicleRoute(map){
	    for(var vehicleIndx=0;vehicleIndx<vehicleWithEventData.length;vehicleIndx++){
			var color1='#'+parseInt(Math.random()*100000000).toString(16); 
			var lineSymbol = {
				  path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				  strokeColor: color1 //arrow color

			 };
			var templat;
			var templang;
			for(var eventInx=0;eventInx<vehicleWithEventData[vehicleIndx].length-2;eventInx=eventInx+20){
				if(eventInx==0){
				   templat=parseFloat(vehicleWithEventData[vehicleIndx][eventInx][6]);
				   templang=parseFloat(vehicleWithEventData[vehicleIndx][eventInx][7]);
				}
				var title="vehicle Id: "+vehicleWithEventData[vehicleIndx][eventInx][9]+"  Adress : "+vehicleWithEventData[vehicleIndx][eventInx][8]+"  Odometer Reading: "+vehicleWithEventData[vehicleIndx][eventInx][5];

				CheckIgnitionOnOffIdelStop(templat,templang,vehicleIndx,eventInx,map,title,'no');
	    	    var lineCoordinates = [
	    	        new google.maps.LatLng(templat,templang),
	    	        new google.maps.LatLng(parseFloat(vehicleWithEventData[vehicleIndx][eventInx+1][6]),parseFloat(vehicleWithEventData[vehicleIndx][eventInx+1][7]))
	    	    ];
	    		templat=parseFloat(vehicleWithEventData[vehicleIndx][eventInx+1][6]);
				templang=parseFloat(vehicleWithEventData[vehicleIndx][eventInx+1][7]);
	    	    var line = new google.maps.Polyline({
	    	    icons: [{
	    	    	      icon: lineSymbol,
	    	    	      offset: '100%'
	    	    	    }],
	             path: lineCoordinates,
	    	    geodesic: true,
	    	    strokeColor: color1,
	    	    strokeOpacity: 1.0,
	    	    strokeWeight: 2
	    	    });

	    	    line.setMap(map);
	       	}//end inner loop
	     }//end outer loop
	}//end allVehicleRoute
	var msgperDay='';
	
	function filter (term,cellNr){
		 var _id='search';
		 
		var suche =term.value.toLowerCase();
		var table = document.getElementById(_id);
		var ele;
		for (var r = 0; r < table.rows.length; r++){
			ele = table.rows[r].cells[cellNr].innerHTML.replace(/<[^'>]+>/g,"");
			if (ele.toLowerCase().indexOf(suche)>=0 )
				table.rows[r].style.display = '';
			else table.rows[r].style.display = 'none';
		}
		 

		
	}
	
	
	function availabilityVehicles(){
		var w=800;
		var h=600;

		var left=screen.width/2-w/2;
		var top=screen.height/2-h/2;
		var search='search';
		//<thead><tr><th>Vehicle Id</th><th>OdoMeter Reading</th><th>Location </th><th>Status</th><th>Replay</th></tr></thead>
		//var table="<div class='hello' style='width:460;border:solid 2px orange;overflow-y:scroll;background: white;'><table border='1' align='center' id='search'><tbody>";

		//if(vehicleAvailable.length>16){
		var h1=(screen.height/2)+(screen.height/20);
                   var h2=(screen.height/100)*55;

			var table="<div class='hello' style='height:"+h2+";border:solid 2px orange;background: white;overflow: scroll;overflow-x:scroll;'><table border='1' align='center' id='search'><tbody>";
			var table1="<div class='hello' style='height:"+h1+";border:solid 2px orange;background: white;overflow: scroll;overflow-y:scroll;'><table border='1' align='center'><tbody>";
			
			var Account=window.localStorage.getItem('accountID');
			//
			if(Account=="gvkrajasthan"){
				//table="<div class='hello' style='height:530;width:500;border:solid 2px orange;overflow-y:scroll;overflow-x:scroll;background: white;'><table border='1' align='center' id='search'><tbody>";
						        	
			}
		//}
		//var table="<div class='hello' style='width:480;border:solid 2px orange;overflow-y:scroll;background: white;'><table border='1' align='center'><tbody>";
		var Status="Iggniton Off";
		//alert(vehicleAvailable+"    "+vehicleAvailable.length);
		var replay="replay";
		var noreplay="noreplay";
		var Symbol='off';
		//table=table+"<tr><td>Ignition Off <img src='../../../images/iggnitionoff.png' height='20'></td><td>Stop <br><img src='../../../images/stop.png' height='20'></td><td> Idle <br><img src='../../../images/idle.png' height='20'></td><td> Inmotion<br><img src='../../../images/inmotion.png' height='20'></td><td> Replay Path<br><img src='../../../images/PlaySymbol.png' height='20'></a></u></td></tr>";
	   var countInMotion=0;
	   var countIdle=0;
	   var countStopped=0;
	   var countIgnitonOff=0;
	   var countRepair=0;
	   var acOnCount=0;
	   //alert(vehicleAvailable.length);
	   var running='';
	   var idle='';
	   var stopped='';
	   var offline='';
           var offline_nottrackingcount=0;
           var offline_notrespondingcount=0
	   var uri = window.location.toString();
	  	    var url='';
	        if (uri.indexOf("?") > 0) {
	           var port='';
	           if(window.location.port!=''){port=":"+window.location.port;}
	  	       url = window.location.origin+port;
	          // url='http://track.glovision.co:8080';
	  	    }  
                var selectedGroup= document.getElementById("groupdevice").value;
//populate baselocations list
             var select=document.getElementById('baselocations');
                          var selectlength=document.getElementById("baselocations").length;
                          if(selectlength>=0){
                             for(var i=selectlength-1;i>0;i--)
                             {
                               select.remove(i);
                             }
                         }


		for(var vehicleIndx=0;vehicleIndx<vehicleAvailable.length;vehicleIndx++){
			//alert(vehicleAvailable[0][2]);
			 var vehiclesType=vehicleAvailable[vehicleIndx][7];
			// vehiclesType="ambulance";
			 //vehicleAvailable[vehicleIndx][6];
			 var vehiclegroup='';
			 var discription='';
			 var Account=window.localStorage.getItem('accountID');
	                  var userID=window.localStorage.getItem('userId');
                          var odometerReading="ODO:"+vehicleAvailable[vehicleIndx][2];
                    ///   alert(userID);	
                           if(userID=="monitoring"){
                                   odometerReading='';
                            }	  
			 // alert(Account.indexOf("gvk"));
	         if(Account.indexOf("gvk")>-1 || Account.indexOf("gog")>-1){//Account=="gvkrajasthan"
	        	  // alert(vehicleAvailable[vehicleIndx][6]);
	        
                     //      var head="<table><thead><tr><th>Status</th><th>Vehicle Id</th><th>Phone </th><th>Base Location</th><th>District </th></tr><tr><td colspan='5'><input id='ss' name='filter' onkeyup='filter(this,1)' size='5'  type='text' placeholder='Vehilce Search'><input id='ad' name='filter' onkeyup='filter(this,3)' size='5' type='text' placeholder='Base Location Search'><input id='ad2' name='filter' onkeyup='filter(this,4)' size='5' type='text' placeholder='District Search'></td></tr></thead></table>";
	
	      //  	  var head="<table><thead><tr><th>Status</th><th>Vehicle Id</th><th>Phone </th><th>Base Location</th><th>District </th></tr><tr><td colspan='5'><input id='ss' name='filter' onkeyup='filter(this,1)' size='5'  type='text' placeholder='Vehilce Search'><input id='ad' name='filter' onkeyup='filter(this,3)' size='5' type='text' placeholder='Base Location Search'><input id='ad2' name='filter' onkeyup='filter(this,4)' size='5' type='text' placeholder='District Search'><select id='distanceRange' width='10px'><option value='10'>10</option><option value='20'>20</option><option value='30'>30</option><option value='40'>40</option><option value='50'>50</option></td></tr></thead></table>";
	        	  //<th>Address </th>
	        //	   var elem = document.getElementById("availableVehicle");
	      	  //  elem.innerHTML = head;
	      	   
             //populate baselocations 
           if( vehicleAvailable[vehicleIndx][6] != null){
             var optresult = vehicleAvailable[vehicleIndx][6].split("/");
              var option=document.createElement("option");
                           
                            option.value= option.text=optresult[1].replace(']','');
                            select.appendChild(option); 
             }
 
	        	  if((typeof(vehicleAvailable[vehicleIndx][6]) !== 'undefined') && (vehicleAvailable[vehicleIndx][6] !== null)) {
	        		  
			          var result = vehicleAvailable[vehicleIndx][6].split("/");
			          discription="<td>"+(userID=="monitoring"?'':vehicleAvailable[vehicleIndx][9])+"</td><td style='width:15'>"+(typeof(result[1])== 'undefined'?' ':result[1]).replace(']','')+"</td><td>"+(typeof(result[0])== 'undefined'?'':result[0]).replace(']','')+"</td>";
				      vehiclegroup=result[0].replace(']','');
	        	  }
			 }else{
	        	 discription="<td>"+parseInt(vehicleAvailable[vehicleIndx][2])+" Speed: "+vehicleAvailable[vehicleIndx][5]+" Kmph</td><td>"+vehicleAvailable[vehicleIndx][3]+"</td>";
	         }
			 if(vehiclesType==''){vehiclesType='ambulance'; }
			if(vehicleAvailable[vehicleIndx][1]=="61714" && (selectedGroup.toUpperCase()==vehiclegroup.toUpperCase() || selectedGroup=="selectall")){
				Status="Iggniton On";
				Symbol='RunningE';
				countInMotion++;
				
					var image="images/"+vehiclesType+"/"+Symbol+".png";
			  	  if(UrlExit(image)){
			  		   // image='../images/ambulance/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
			  	    }else{
			  	    	//alert(image+" 3");
			  	    	image=url+'/statictrack/images/custom/'+vehicleAvailable[vehicleIndx][0]+'.png';
			  	    	if(!UrlExit(image)){image='images/vehicle.png';}
			  	    } 
				
				//running=running+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0]+"</a></u></td><td>"+vehicleAvailable[vehicleIndx][6]+"<br>"+parseInt(vehicleAvailable[vehicleIndx][2])+" Speed: "+vehicleAvailable[vehicleIndx][5]+" Kmph</td><td>"+vehicleAvailable[vehicleIndx][3]+"</td><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
				//	running=running+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+"<td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
                                $routeUrl="<td><a onClick=routeTracking('"+vehicleAvailable[vehicleIndx][0]+"')>Route</a></td>";
                             if(userID=="monitoring"){
                               $routeUrl='';
                             }
                           // if(selectedGroup==vehiclegroup || selectedGroup=="selectall")
                                 running=running+"<tr><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'> speed:"+vehicleAvailable[vehicleIndx][5]+"-Kmph "+odometerReading+"</a></td><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+$routeUrl+"</tr>";
                           
			  	    //<input type='checkbox' value='"+vehicleIndx+"' name='multipleVehicles'>
			}else if((vehicleAvailable[vehicleIndx][1]=="61718" || vehicleAvailable[vehicleIndx][1]=="61720") && (selectedGroup.toUpperCase()==vehiclegroup.toUpperCase() || selectedGroup=="selectall")){
				Status="Idle";
				Symbol='IdleE';
				countIdle++; 
	     	   	var image="images/"+vehiclesType+"/"+Symbol+".png";
		  	 if(UrlExit(image)){
		  		   // image='../images/ambulance/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
		  	    }else{
		  	    	  //alert(image+"  4");
		  	    	image='images/vehicle.png';
		  	    	image= url+'/statictrack/images/custom/'+vehicleAvailable[vehicleIndx][0]+'.png';
		  	    	if(!UrlExit(image)){image='images/vehicle.png';}
		  	    } 
				//idle=idle+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0]+"</a></u></td><td>"+vehicleAvailable[vehicleIndx][6]+"<br>"+parseInt(vehicleAvailable[vehicleIndx][2])+" Speed: "+vehicleAvailable[vehicleIndx][5]+" Kmph</td><td>"+vehicleAvailable[vehicleIndx][3]+"</td><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
		//		idle=idle+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+"<td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
                $routeUrl="<td><a onClick=routeTracking('"+vehicleAvailable[vehicleIndx][0]+"')>Route</a></td>";
                      if(userID=="monitoring"){
                       $routeUrl='';
                     }
                //     if(selectedGroup==vehiclegroup || selectedGroup=="selectall")
                          idle=idle+"<tr><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'> "+odometerReading+"</a></td><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+$routeUrl+"</tr>";


			}/*else if(vehicleAvailable[vehicleIndx][1]=="61717" || vehicleAvailable[vehicleIndx][1]=="61477"){
		
			}*/else if(vehicleAvailable[vehicleIndx][1]=="0000" && (selectedGroup.toUpperCase()==vehiclegroup.toUpperCase() || selectedGroup=="selectall")) {
			//	alert(vehicleAvailable[vehicleIndx][4]);
                                  if(vehicleAvailable[vehicleIndx][4]!="Vehicle Repair")
                                        offline_nottrackingcount++;
                                  else
                                      offline_notrespondingcount++;


				Status="Repair";
				Symbol='offlineE';
				countRepair++;
				var image="images/"+vehiclesType+"/"+Symbol+".png";

				//var image='images/icon.png';
		  	  /* if(UrlExit(image)){
		  		   // image='../images/ambulance/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
		  	    }else{
		  	    	image='images/icon.png';
		  	    	/*image= url+'/statictrack/images/custom/'+vehicleAvailable[vehicleIndx][0]+'.png';
		  	    	
		  	    	if(!UrlExit(image)){image='images/vehicle.png';}
		  	    } */
				msgperDay +=vehicleAvailable[vehicleIndx][0]+ " is OffLine <br>";
			//	offline=offline+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td> "+discription+"<td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
          $routeUrl="<td><a onClick=routeTracking('"+vehicleAvailable[vehicleIndx][0]+"')>Route</a></td>";
                      if(userID=="monitoring"){
                       $routeUrl='';
                     }
                  //if(selectedGroup==vehiclegroup || selectedGroup=="selectall")
                     offline=offline+"<tr><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'> "+odometerReading+"</a></td><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td> "+discription+$routeUrl+"</tr>";

			}else if(selectedGroup.toUpperCase()==vehiclegroup.toUpperCase() || selectedGroup=="selectall"){
				Status="Stopped";
				Symbol='stoppedE';
				
				countStopped++;
				var image="images/"+vehiclesType+"/"+Symbol+".png";
		  	    if(UrlExit(image)){
		  		   // image='../images/ambulance/'+title1+vehicleWithEventData[i][lastEventOfVehicle][11]+'.png';
		  	    }else{
		  	    	//alert(image+"  5");
		  	    	image='images/vehicle.png';
		  	    	/*image= url+'/statictrack/images/custom/'+vehicleAvailable[vehicleIndx][0]+'.png';
		  	    	
		  	    	if(!UrlExit(image)){image='images/vehicle.png';}*/
		  	    } 
//				stopped=stopped+"<tr><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+"<td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'></a></td></tr>";
                $routeUrl="<td><a onClick=routeTracking('"+vehicleAvailable[vehicleIndx][0]+"')>Route</a></td>";
                      if(userID=="monitoring"){
                       $routeUrl='';
                     }
                         // if(selectedGroup==vehiclegroup || selectedGroup=="selectall")
				stopped=stopped+"<tr><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='"+image+"' align='center' height='20'> "+odometerReading+"</a></td><td><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0].toUpperCase()+"</a></u></td>"+discription+$routeUrl+"</tr>";

			}
			/*else{
				countIgnitonOff++;
				//Symbol='red';
				Symbol='off';
			}*/
			
			if(vehicleAvailable[vehicleIndx][4]=="ON"){
				acOnCount++;
			}
			//table=table+"<tr><td><input type='checkbox' value='"+vehicleIndx+"' name='multipleVehicles'><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0]+"</a></u></td><td>"+vehicleAvailable[vehicleIndx][2]+"</td><td>"+vehicleAvailable[vehicleIndx][3]+"</td><td><img src='../../../images/"+Symbol+".png' align='center' height='20'></td><td><u><a  onClick='vehicleRoute("+vehicleIndx+",2)'><img src='../../../images/PlaySymbol.png' align='center'></a></u></td><td>"+vehicleAvailable[vehicleIndx][4]+"</td></tr>";
			//table=table+"<tr><td><input type='checkbox' value='"+vehicleIndx+"' name='multipleVehicles'><u><a  onClick='vehicleRoute("+vehicleIndx+",1)'>"+vehicleAvailable[vehicleIndx][0]+"</a></u></td><td>"+parseInt(vehicleAvailable[vehicleIndx][2])+"<br> Speed: "+vehicleAvailable[vehicleIndx][5]+" Kmph</td><td>"+vehicleAvailable[vehicleIndx][3]+"</td><td><a  onClick='vehicleRoute("+vehicleIndx+",1)'><img src='../../../images/ambulance/"+Symbol+".png' align='center' height='20'></a></td></tr>";

		 }
		//table=table+"<tr><td>Ignition Off <img src='../../../images/iggnitionoff.png' height='20'></td><td>Stop <br><img src='../../../images/stop.png' height='20'></td><td> Idle <br><img src='../../../images/idle.png' height='20'></td><td> Inmotion<br><img src='../../../images/inmotion.png' height='20'></td><td> Replay Path<br><img src='../../../images/PlaySymbol.png' height='20'></a></u></td></tr>";
    
	    //table=table+"<tr><td colspan='4' bgcolor='#4B8A08'>Running Vehcile</td></tr>"+running+"<tr><td colspan='4' bgcolor='#D7DF01'>Idel Vehicle</td></tr>"+idle+"<tr><td colspan='4' bgcolor='#FF0040'>Stopped Vehicles</td></tr>"+stopped+"<tr><td colspan='4' bgcolor='#2A120A'>Offline Vehicles</td></tr>"+offline+"</tbody></table><div>";
		//table=table+"<tr bgcolor='#4B8A08'><td></td><td></td><td><font color='#FFFFFF'>Ruunig Vehicle</font></td><td></td></tr>"+running+"<tr bgcolor='#D7DF01'><td></td><td></td><td><font>Idle Vehicle</font></td><td></td></tr>"+idle+"<tr bgcolor='#FF0040'><td></td><td></td><td><font>Stopped Vehicle</font></td><td></td></tr>"+stopped+"<tr bgcolor='#2A120A'><td></td><td></td><td><font color='#FFFFFF'>Offline Vehicles</font></td><td></td></tr>"+offline+"</tbody></table><div>";
	if(userID=="monitoring"){
                 offline='';
                }
	
		var showmap= window.localStorage.getItem('showmap');
		var allvehiclesshow=table1+running+idle+stopped+offline+"</tbody></table><div>";
		var runningVehilces=table1+running+"</tbody></table><div>";
		var idleVehilces=table1+idle+stopped+"</tbody></table><div>";
		var offlineVehilces=table1+offline+"</tbody></table><div>";

		if(showmap=='all' ||showmap=='clear' || showmap=='single'){table=table+running+idle+stopped+offline+"</tbody></table><div>";}
		else if(showmap=='online'){table=table+running+"</tbody></table><div>";}
		else if(showmap=='offline'){table=table+offline+"</tbody></table><div>";}
		else if(showmap=='idle'){table=table+idle+stopped+"</tbody></table><div>";}
		
		
		//table=table+"</tbody></table><div>";
	     var totalvehicle=countInMotion+countIdle+countStopped+countRepair;
	     var onlineVehilce=countInMotion+countIdle+countStopped;
	     /*var flagTable = "<table>";
	         flagTable +=  "<tr><td>Total Vehicle :<td></td> "+totalvehicle+"</td></tr>";
	         flagTable +=  "<tr><td>Online Vehicle :<td></td> "+onlineVehilce+"</td></tr>";
	         flagTable +=  "<tr><td></td><td>Running : "+countInMotion+"  <img src='../images/ambulance/RunningE.png'  width='40'  height='30'></td></tr>";
	    	 flagTable += "<tr><td></td><td>Idle: "+countIdle+" <img src='../../../images/ambulance/IdleE.png'  width='40' height='30'></td></tr>";
	    	 
	    	 flagTable += "<tr><td></td><td>Stopped : "+countStopped+" <img src='../images/ambulance/stoppedE.png' width='40' height='30'></td></tr>";
	    	 flagTable += "<tr><td colspan='2'>Offline : "+countRepair+" <img src='../images/ambulance/offlineE.png' width='40' height='30'></td></tr>";
	    	 */
	     var flagTable = "<table cellspacing='0' cellpadding='0'>";
         flagTable +=  "<tr><td>&nbsp&nbspTotal Vehicles &nbsp&nbsp:</td><td> "+totalvehicle+" &nbsp";
         flagTable +=(userID=="tracking")?"</td></tr>":"<a onclick='statusReportDownload();'><img src='images/arrows.png' width='16' height='16' /></a></td></tr>";
         flagTable +=  "<tr><td>&nbsp&nbspOnline Vehicles :</td><td> "+onlineVehilce+"  &nbsp";
         flagTable +=(userID=="tracking")?"</td></tr>":"<a onclick='getOnline();'><img src='images/arrows.png' width='16' height='16' /></a></td></tr>";
         flagTable +=  "<tr><td></td><td>Running :<font color='green'> "+countInMotion+"</font> &nbsp ";
         flagTable +=(userID=="tracking")?"</td></tr>":"<a onclick='getRunning();'><img src='images/arrows.png' width='16' height='16' /></a></td></tr>";
         
         document.getElementById("online").value='Running('+countInMotion+')';
         document.getElementById("idle").value='Idle('+(countIdle+countStopped)+')';
          if(userID!="monitoring"){

         document.getElementById("offline1").value='Off-road('+countRepair+')';
         }         
         document.getElementById("reset").value='All('+totalvehicle+')';
         var Account=window.localStorage.getItem('accountID');
         if(Account.indexOf("gvk")>-1  || Account.indexOf("gog")>-1){
        	 flagTable += "<tr><td></td><td>Idle: <font color='#FF9933'>"+(countIdle+countStopped)+"</font> &nbsp";
                 flagTable +=(userID=="tracking")?"</td></tr>":"<a onclick='getIdle();'><img src='images/arrows.png' width='16' height='16' /></a></td></tr>";
        	 //flagTable += "<tr><td></td><td>Stopped :<font color='red'> "+countStopped+"</font></td></tr>";
        	 
        }else{
    	    flagTable += "<tr><td></td><td>Idle: <font color='#FF9933'>"+countIdle+"</font> </td></tr>";
    	    flagTable += "<tr><td></td><td>Stopped :<font color='red'> "+countStopped+"</font></td></tr>";
         }
    	 //flagTable += "<tr><td>&nbsp&nbspVehicles Not Communicating<br> for more than 24 hours&nbsp&nbsp&nbsp&nbsp&nbsp : </td><td>"+countRepair+"</td></tr>";
           if(userID!="monitoring"){
    	 


       //     $specificword=(Account=="gvkrajasthan"?"Offline":"Off-Road");
             flagTable += "<tr><td>&nbsp&nbsp"+(Account=="gvkrajasthan"?"Offline":"Off-Road")+" Vehicles&nbsp&nbsp&nbsp&nbsp&nbsp : </td><td>"+countRepair+"  &nbsp";
             flagTable +=(userID=="tracking")?"</td></tr>":"<a onclick='getOfflineDownload();'><img src='images/arrows.png' width='16' height='16' /></a> </td></tr>";
           if(userID=="tracking"){
                 flagTable +="<tr><td></td><td>Not Tracking:"+offline_nottrackingcount+"  Not Responding:"+offline_notrespondingcount+"</td></tr>";
 

           }else{  
           flagTable +="<tr><td>Time Range "+(Account=="gvkrajasthan"?"Offline":"Off-Road")+":<a onclick='getOfflineDaterange();'><img src='images/arrows.png' width='16' height='16' /></a></td><td>Not Tracking:"+offline_nottrackingcount+" <a onclick='getOfflineNottrackingDownload();'><img src='images/arrows.png' width='16' height='16' /></a> Not Responding:"+offline_notrespondingcount+"<a onclick='getOfflineNotRespondingDownload();'><img src='images/arrows.png' width='16' height='16' /></td></tr>";
          }
    	}
	    	// flagTable += "<td>A/c On : "+acOnCount+" <img src='../images/ac.png' width='20' height='20'></td>";
	    	//flagTable += "<td>Repair: "+countStopped+" <img src='../../../images/off.png'  width='30' height='30'></td></tr></table>";

	    var flags = document.getElementById("flags");
	    flags.innerHTML = flagTable;
	   /* var flags = document.getElementById("msgcontent");
	   
	    while (flags.hasChildNodes()) {
	    	flags.removeChild(flags.firstChild);
	    }
	    flags.innerHTML = msgperDay;*/
	    document.getElementById("allVehicls").innerHTML= allvehiclesshow;
	   document.getElementById("runningVehilces").innerHTML= runningVehilces;
	    document.getElementById("idleVehilces").innerHTML= idleVehilces;
            if(userID!="monitoring"){
                document.getElementById("offlineVehilces").innerHTML= offlineVehilces;
            }
	    var elem = document.getElementById("vehicleStatusReport");
	    elem.innerHTML = table;
           // elem.scrollTop = 1;
	    $('.vehicleStatusReport').show();  
	    $('.load_image1').hide();
		//window.localStorage.setItem('vehicleStatus',table);
		//window.open('availabilityVehicles.html', 'Vehicle Status', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	}
function routeTracking(vehicleID){
       var Account=window.localStorage.getItem('accountID');

     window.open ("php/tripMap.php?accountID="+Account+"&vehicleID="+vehicleID+"&onlyidles=no","Route Tracking");

}


	//==ClosureCompiler==
	//@compilation_level ADVANCED_OPTIMIZATIONS
	//@externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/goole_maps_api_v3.js
	//==/ClosureCompiler==

	/**
	* @name MarkerClusterer for Google Maps v3
	* @version version 1.0
	* @author Luke Mahe
	* @fileoverview
	* The library creates and manages per-zoom-level clusters for large amounts of
	* markers.
	* <br/>
	* This is a v3 implementation of the
	* <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
	* >v2 MarkerClusterer</a>.
	*/

	/**
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*     http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/


	/**
	* A Marker Clusterer that clusters markers.
	*
	* @param {google.maps.Map} map The Google map to attach to.
	* @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
	*   the cluster.
	* @param {Object=} opt_options support the following options:
	*     'gridSize': (number) The grid size of a cluster in pixels.
	*     'maxZoom': (number) The maximum zoom level that a marker can be part of a
	*                cluster.
	*     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
	*                    cluster is to zoom into it.
	*     'averageCenter': (boolean) Wether the center of each cluster should be
	*                      the average of all markers in the cluster.
	*     'minimumClusterSize': (number) The minimum number of markers to be in a
	*                           cluster before the markers are hidden and a count
	*                           is shown.
	*     'styles': (object) An object that has style properties:
	*       'url': (string) The image url.
	*       'height': (number) The image height.
	*       'width': (number) The image width.
	*       'anchor': (Array) The anchor position of the label text.
	*       'textColor': (string) The text color.
	*       'textSize': (number) The text size.
	*       'backgroundPosition': (string) The position of the backgound x, y.
	* @constructor
	* @extends google.maps.OverlayView
	*/
	function MarkerClusterer(map, opt_markers, opt_options) {
	// MarkerClusterer implements google.maps.OverlayView interface. We use the
	// extend function to extend MarkerClusterer with google.maps.OverlayView
	// because it might not always be available when the code is defined so we
	// look for it at the last possible moment. If it doesn't exist now then
	// there is no point going ahead :)
	this.extend(MarkerClusterer, google.maps.OverlayView);
	this.map_ = map;

	/**
	* @type {Array.<google.maps.Marker>}
	* @private
	*/
	this.markers_ = [];

	/**
	*  @type {Array.<Cluster>}
	*/
	this.clusters_ = [];

	this.sizes = [53, 56, 66, 78, 90];

	/**
	* @private
	*/
	this.styles_ = [];

	/**
	* @type {boolean}
	* @private
	*/
	this.ready_ = false;

	var options = opt_options || {};

	/**
	* @type {number}
	* @private
	*/
	this.gridSize_ = options['gridSize'] || 60;

	/**
	* @private
	*/
	this.minClusterSize_ = options['minimumClusterSize'] || 2;


	/**
	* @type {?number}
	* @private
	*/
	this.maxZoom_ = options['maxZoom'] || null;

	this.styles_ = options['styles'] || [];

	/**
	* @type {string}
	* @private
	*/
	this.imagePath_ = options['imagePath'] ||
	   this.MARKER_CLUSTER_IMAGE_PATH_;

	/**
	* @type {string}
	* @private
	*/
	this.imageExtension_ = options['imageExtension'] ||
	   this.MARKER_CLUSTER_IMAGE_EXTENSION_;

	/**
	* @type {boolean}
	* @private
	*/
	this.zoomOnClick_ = true;

	if (options['zoomOnClick'] != undefined) {
	 this.zoomOnClick_ = options['zoomOnClick'];
	}

	/**
	* @type {boolean}
	* @private
	*/
	this.averageCenter_ = false;

	if (options['averageCenter'] != undefined) {
	 this.averageCenter_ = options['averageCenter'];
	}

	this.setupStyles_();

	this.setMap(map);

	/**
	* @type {number}
	* @private
	*/
	this.prevZoom_ = this.map_.getZoom();

	// Add the map event listeners
	var that = this;
	google.maps.event.addListener(this.map_, 'zoom_changed', function() {
	 var maxZoom = that.map_.mapTypes[that.map_.getMapTypeId()].maxZoom;
	 var zoom = that.map_.getZoom();
	 if (zoom < 0 || zoom > maxZoom) {
	   return;
	 }

	 if (that.prevZoom_ != zoom) {
	   that.prevZoom_ = that.map_.getZoom();
	   that.resetViewport();
	 }
	});

	google.maps.event.addListener(this.map_, 'idle', function() {
	 that.redraw();
	});

	// Finally, add the markers
	if (opt_markers && opt_markers.length) {
	 this.addMarkers(opt_markers, false);
	}
	}


	/**
	* The marker cluster image path.
	*
	* @type {string}
	* @private
	*/
	MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
	 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
	 'images/m';


	/**
	* The marker cluster image path.
	*
	* @type {string}
	* @private
	*/
	MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


	/**
	* Extends a objects prototype by anothers.
	*
	* @param {Object} obj1 The object to be extended.
	* @param {Object} obj2 The object to extend with.
	* @return {Object} The new extended object.
	* @ignore
	*/
	MarkerClusterer.prototype.extend = function(obj1, obj2) {
	return (function(object) {
	 for (var property in object.prototype) {
	   this.prototype[property] = object.prototype[property];
	 }
	 return this;
	}).apply(obj1, [obj2]);
	};


	/**
	* Implementaion of the interface method.
	* @ignore
	*/
	MarkerClusterer.prototype.onAdd = function() {
	this.setReady_(true);
	};

	/**
	* Implementaion of the interface method.
	* @ignore
	*/
	MarkerClusterer.prototype.draw = function() {};

	/**
	* Sets up the styles object.
	*
	* @private
	*/
	MarkerClusterer.prototype.setupStyles_ = function() {
	if (this.styles_.length) {
	 return;
	}

	for (var i = 0, size; size = this.sizes[i]; i++) {
	 this.styles_.push({
	   url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
	   height: size,
	   width: size
	 });
	}
	};

	/**
	*  Fit the map to the bounds of the markers in the clusterer.
	*/
	MarkerClusterer.prototype.fitMapToMarkers = function() {
	var markers = this.getMarkers();
	var bounds = new google.maps.LatLngBounds();
	for (var i = 0, marker; marker = markers[i]; i++) {
	 bounds.extend(marker.getPosition());
	}

	this.map_.fitBounds(bounds);
	};


	/**
	*  Sets the styles.
	*
	*  @param {Object} styles The style to set.
	*/
	MarkerClusterer.prototype.setStyles = function(styles) {
	this.styles_ = styles;
	};


	/**
	*  Gets the styles.
	*
	*  @return {Object} The styles object.
	*/
	MarkerClusterer.prototype.getStyles = function() {
	return this.styles_;
	};


	/**
	* Whether zoom on click is set.
	*
	* @return {boolean} True if zoomOnClick_ is set.
	*/
	MarkerClusterer.prototype.isZoomOnClick = function() {
	return this.zoomOnClick_;
	};

	/**
	* Whether average center is set.
	*
	* @return {boolean} True if averageCeurl =window.location.origin+":"+window.location.port;nter_ is set.
	*/
	MarkerClusterer.prototype.isAverageCenter = function() {
	return this.averageCenter_;
	};


	/**
	*  Returns the array of markers in the clusterer.
	*
	*  @return {Array.<google.maps.Marker>} The markers.
	*/
	MarkerClusterer.prototype.getMarkers = function() {
	return this.markers_;
	};


	/**
	*  Returns the number of markers in the clusterer
	*
	*  @return {Number} The number of markers.
	*/
	MarkerClusterer.prototype.getTotalMarkers = function() {
	return this.markers_.length;
	};


	/**
	*  Sets the max zoom for the clusterer.
	*
	*  @param {number} maxZoom The max zoom level.
	*/
	MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
	this.maxZoom_ = maxZoom;
	};


	/**
	*  Gets the max zoom for the clusterer.
	*
	*  @return {number} The max zoom level.
	*/
	MarkerClusterer.prototype.getMaxZoom = function() {
	return this.maxZoom_ || this.map_.mapTypes[this.map_.getMapTypeId()].maxZoom;
	};


	/**
	*  The function for calculating the cluster icon image.
	*url =window.location.origin+":"+window.location.port;
	*  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
	*  @param {number} numStyles The number of styles available.
	*  @return {Object} A object properties: 'text' (string) and 'index' (number).
	*  @private
	*/
	MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
	var index = 0;
	var count = markers.length;
	var dv = count;
	while (dv !== 0) {
	 dv = parseInt(dv / 10, 10);
	 index++;
	}

	index = Math.min(index, numStyles);
	return {
	 text: count,
	 index: index
	};
	};


	/**
	* Set the calculator function.
	*
	* @param {function(Array, number)} calculator The function to set as the
	*     calculator. The function should return a object properties:
	*     'text' (string) and 'index' (number).
	*
	*/
	MarkerClusterer.prototype.setCalculator = function(calculator) {
	this.calculator_ = calculator;
	};


	/**
	* Get the calculator function.
	*
	* @return {function(Array, number)} the calculator function.
	*/
	MarkerClusterer.prototype.getCalculator = function() {
	return this.calculator_;
	};

	url =window.location.origin+":"+window.location.port;
	/**
	* Add an array of markers to the clusterer.
	*
	* @param {Array.<google.maps.Marker>} markers The markers to add.
	* @param {boolean=} opt_nodraw Whether to redraw the clusters.
	*/
	MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
	for (var i = 0, marker; marker = markers[i]; i++) {
	 this.pushMarkerTo_(marker);
	}
	if (!opt_nodraw) {
	 this.redraw();
	}
	};


	/**
	* Pushes a marker to the clusterer.
	*
	* @param {google.maps.Marker} marker The marker to add.
	* @private
	*/
	MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
	marker.isAdded = false;
	if (marker['draggable']) {
	 // If the marker is draggable add a listener so we update the clusters on
	 // the drag end.
	 var that = this;
	 google.maps.event.addListener(marker, 'dragend', function() {
	   marker.isAdded = false;
	   that.repaint();
	 });
	}
	this.markers_.push(marker);
	};


	/**
	* Adds a marker to the clusterer and redraws if needed.
	*
	* @param {google.maps.Marker} marker The marker to add.
	* @param {boolean=} opt_nodraw Whether to redraw the clusters.
	*/
	MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
	this.pushMarkerTo_(marker);
	if (!opt_nodraw) {
	 this.redraw();
	}
	};


	/**
	* Removes a marker and returns true if reurl =window.location.origin+":"+window.location.port;moved, false if not
	*
	* @param {google.maps.Marker} marker The marker to remove
	* @return {boolean} Whether the marker was removed or not
	* @private
	*/
	MarkerClusterer.prototype.removeMarker_ = function(marker) {
	var index = -1;
	if (this.markers_.indexOf) {
	 index = this.markers_.indexOf(marker);
	} else {
	 for (var i = 0, m; m = this.markers_[i]; i++) {
	   if (m == marker) {
	     index = i;
	     break;
	   }
	 }
	}

	if (index == -1) {
	 // Marker is not in our list of markers.
	 return false;
	}

	this.markers_.splice(index, 1);

	return true;
	};


	/**
	* Remove a marker from the cluster.
	*
	* @param {google.maps.Marker} marker The marker to remove.
	* @param {boolean=} opt_nodraw Optional boolean to force no redraw.
	* @return {boolean} True if the marker was removed.
	*/
	MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
	var removed = this.removeMarker_(marker);

	if (!opt_nodraw && removed) {
	 this.resetViewport();
	 this.redraw();
	 return true;
	} else {
	return false;
	}
	};


	/**
	* Removes an array of markers from the cluster.
	*
	* @param {Array.<google.maps.Marker>} markers The markers to remove.
	* @param {boolean=} opt_nodraw Optional boolean to force no redraw.
	*/
	MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
	var removed = false;

	for (var i = 0, marker; marker = markers[i]; i++) {
	 var r = this.removeMarker_(marker);
	 removed = removed || r;
	}

	if (!opt_nodraw && removed) {
	 this.resetViewport();
	 this.redraw();
	 return true;
	}
	};


	/**
	* Sets the clusterer's ready state.
	*
	* @param {boolean} ready The state.
	* @private
	*/
	MarkerClusterer.prototype.setReady_ = function(ready) {
	if (!this.ready_) {
	 this.ready_ = ready;
	 this.createClusters_();
	}
	};


	/**
	* Returns the number of clusters in the clusterer.
	*
	* @return {number} The number of clusters.
	*/
	MarkerClusterer.prototype.getTotalClusters = function() {
	return this.clusters_.length;
	};


	/**
	* Returns the google map that the clusterer is associated with.
	*
	* @return {google.maps.Map} The map.
	*/
	MarkerClusterer.prototype.getMap = function() {
	return this.map_;
	};


	/**
	* Sets the google map that the clusterer is associated with.
	*
	* @param {google.maps.Map} map The map.
	*/
	MarkerClusterer.prototype.setMap = function(map) {
	this.map_ = map;
	};

	url =window.location.origin+":"+window.location.port;
	/**
	* Returns the size of the grid.
	*
	* @return {number} The grid size.
	*/
	MarkerClusterer.prototype.getGridSize = function() {
	return this.gridSize_;
	};


	/**
	* Sets the size of the grid.
	*
	* @param {number} size The grid size.
	*/
	MarkerClusterer.prototype.setGridSize = function(size) {
	this.gridSize_ = size;
	};


	/**
	* Returns the min cluster size.
	*
	* @return {number} The grid size.
	*/
	MarkerClusterer.prototype.getMinClusterSize = function() {
	return this.minClusterSize_;
	};

	/**
	* Sets the min cluster size.
	*
	* @param {number} size The grid size.
	*/
	MarkerClusterer.prototype.setMinClusterSize = function(size) {
	this.minClusterSize_ = size;
	};


	/**
	* Extends a bounds object by the grid size.
	*
	* @param {google.maps.LatLngBounds} bounds The bounds to extend.
	* @return {google.maps.LatLngBounds} The extended bounds.
	*/
	MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
	var projection = this.getProjection();

	// Turn the bounds into latlng.
	var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
	   bounds.getNorthEast().lng());
	var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
	   bounds.getSouthWest().lng());

	// Convert the points to pixels and the extend out by the grid size.
	var trPix = projection.fromLatLngToDivPixel(tr);
	trPix.x += this.gridSize_;
	trPix.y -= this.gridSize_;

	var blPix = projection.fromLatLngToDivPixel(bl);
	blPix.x -= this.gridSize_;
	blPix.y += this.gridSize_;

	// Convert the pixel points back to LatLng
	var ne = projection.fromDivPixelToLatLng(trPix);
	var sw = projection.fromDivPixelToLatLng(blPix);

	// Extend the bounds to contain the new bounds.
	bounds.extend(ne);
	bounds.extend(sw);

	return bounds;
	};


	/**
	* Determins if a marker is contained in a bounds.
	*
	* @param {google.maps.Marker} marker The marker to check.
	* @param {google.maps.LatLngBounds} bounds The bounds to check against.
	* @return {boolean} True if the marker is in the bounds.
	* @private
	*/
	MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
	return bounds.contains(marker.getPosition());
	};


	/**
	* Clears all clusters and markers from the clusterer.
	*/
	MarkerClusterer.prototype.clearMarkers = function() {
	this.resetViewport(true);

	// Set the markers a empty array.
	this.markers_ = [];
	};


	/**
	* Clears all existing clusters and recreates them.
	* @param {boolean} opt_hide To also hide the marker.
	*/
	MarkerClusterer.prototype.resetViewport = function(opt_hide) {
	// Remove all the clusters
	for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
	 cluster.remove();
	}

	// Reset the markers to not be added and to be invisible.
	for (var i = 0, marker; marker = this.markers_[i]; i++) {
	 marker.isAdded = false;
	 if (opt_hide) {
	   marker.setMap(null);
	 }
	}

	this.clusters_ = [];
	};

	/**
	*
	*/
	MarkerClusterer.prototype.repaint = function() {
	var oldClusters = this.clusters_.slice();
	this.clusters_.length = 0;
	this.resetViewport();
	this.redraw();

	// Remove the old clusters.
	// Do it in a timeout so the other clusters have been drawn first.
	window.setTimeout(function() {
	 for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
	   cluster.remove();
	 }
	}, 0);
	};


	/**
	* Redraws the clusters.
	*/
	MarkerClusterer.prototype.redraw = function() {
	this.createClusters_();
	};


	/**
	* Calculates the distance between two latlng locations in km.
	* @see http://www.movable-type.co.uk/scripts/latlong.html
	*
	* @param {google.maps.LatLng} p1 The first lat lng point.
	* @param {google.maps.LatLng} p2 The second lat lng point.
	* @return {number} The distance between the two points in km.
	* @private
	*/
	MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
	if (!p1 || !p2) {
	 return 0;
	}

	var R = 6371; // Radius of the Earth in km
	var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
	var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	 Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
	 Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d;
	};


	/**
	* Add a marker to a cluster, or creates a new cluster.
	*
	* @param {google.maps.Marker} marker The marker to add.
	* @private
	*/
	MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
	var distance = 40000; // Some large number
	var clusterToAddTo = null;
	var pos = marker.getPosition();
	for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
	 var center = cluster.getCenter();
	 if (center) {
	   var d = this.distanceBetweenPoints_(center, marker.getPosition());
	   if (d < distance) {
	     distance = d;
	     clusterToAddTo = cluster;
	   }
	 }
	}

	if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
	 clusterToAddTo.addMarker(marker);
	} else {
	 var cluster = new Cluster(this);
	 cluster.addMarker(marker);
	 this.clusters_.push(cluster);
	}
	};


	/**
	* Creates the clusters.
	*
	* @private
	*/
	MarkerClusterer.prototype.createClusters_ = function() {
	if (!this.ready_) {
	 return;
	}

	// Get our current map view bounds.
	// Create a new bounds object so we don't affect the map.
	var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
	   this.map_.getBounds().getNorthEast());
	var bounds = this.getExtendedBounds(mapBounds);

	for (var i = 0, marker; marker = this.markers_[i]; i++) {
	 if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
	   this.addToClosestCluster_(marker);
	 }
	}
	};


	/**
	* A cluster that contains markers.
	*
	* @param {MarkerClusterer} markerClusterer The markerclusterer that this
	*     cluster is associated with.
	* @constructor
	* @ignore
	*/
	function Cluster(markerClusterer) {
	this.markerClusterer_ = markerClusterer;
	this.map_ = markerClusterer.getMap();
	this.gridSize_ = markerClusterer.getGridSize();
	this.minClusterSize_ = markerClusterer.getMinClusterSize();
	this.averageCenter_ = markerClusterer.isAverageCenter();
	this.center_ = null;
	this.markers_ = [];
	this.bounds_ = null;
	this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
	   markerClusterer.getGridSize());
	}

	/**
	* Determins if a marker is already added to the cluster.
	*
	* @param {google.maps.Marker} marker The marker to check.
	* @return {boolean} True if the marker is already added.
	*/
	Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
	if (this.markers_.indexOf) {
	 return this.markers_.indexOf(marker) != -1;
	} else {
	 for (var i = 0, m; m = this.markers_[i]; i++) {
	   if (m == marker) {
	     return true;
	   }
	 }
	}
	return false;
	};


	/**
	* Add a marker the cluster.
	*
	* @param {google.maps.Marker} marker The marker to add.
	* @return {boolean} True if the marker was added.
	*/
	Cluster.prototype.addMarker = function(marker) {
	if (this.isMarkerAlreadyAdded(marker)) {
	 return false;
	}

	if (!this.center_) {
	 this.center_ = marker.getPosition();
	 this.calculateBounds_();
	} else {
	 if (this.averageCenter_) {
	   var l = this.markers_.length + 1;
	   var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
	   var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
	   this.center_ = new google.maps.LatLng(lat, lng);
	   this.calculateBounds_();
	 }
	}

	marker.isAdded = true;
	this.markers_.push(marker);

	var len = this.markers_.length;
	if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
	 // Min cluster size not reached so show the marker.
	 marker.setMap(this.map_);
	}

	if (len == this.minClusterSize_) {
	 // Hide the markers that were showing.
	 for (var i = 0; i < len; i++) {
	   this.markers_[i].setMap(null);
	 }
	}

	if (len >= this.minClusterSize_) {
	 marker.setMap(null);
	}

	this.updateIcon();
	return true;
	};


	/**
	* Returns the marker clusterer that the cluster is associated with.
	*
	* @return {MarkerClusterer} The associated marker clusterer.
	*/
	Cluster.prototype.getMarkerClusterer = function() {
	return this.markerClusterer_;
	};


	/**
	* Returns the bounds of the cluster.
	*
	* @return {google.maps.LatLngBounds} the cluster bounds.
	*/
	Cluster.prototype.getBounds = function() {
	var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
	var markers = this.getMarkers();
	for (var i = 0, marker; marker = markers[i]; i++) {
	 bounds.extend(marker.getPosition());
	}
	return bounds;
	};


	/**
	* Removes the cluster
	*/
	Cluster.prototype.remove = function() {
	this.clusterIcon_.remove();
	this.markers_.length = 0;
	delete this.markers_;
	};


	/**
	* Returns the center of the cluster.
	*
	* @return {number} The cluster center.
	*/
	Cluster.prototype.getSize = function() {
	return this.markers_.length;
	};


	/**
	* Returns the center of the cluster.
	*
	* @return {Array.<google.maps.Marker>} The cluster center.
	*/
	Cluster.prototype.getMarkers = function() {
	return this.markers_;
	};


	/**
	* Returns the center of the cluster.
	*
	* @return {google.maps.LatLng} The cluster center.
	*/
	Cluster.prototype.getCenter = function() {
	return this.center_;
	};


	/**
	* Calculated the extended bounds of the cluster with the grid.
	*
	* @private
	*/
	Cluster.prototype.calculateBounds_ = function() {
	var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
	this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
	};


	/**
	* Determines if a marker lies in the clusters bounds.
	*
	* @param {google.maps.Marker} marker The marker to check.
	* @return {boolean} True if the marker lies in the bounds.
	*/
	Cluster.prototype.isMarkerInClusterBounds = function(marker) {
	return this.bounds_.contains(marker.getPosition());
	};


	/**
	* Returns the map that the cluster is associated with.
	*
	* @return {google.maps.Map} The map.
	*/
	Cluster.prototype.getMap = function() {
	return this.map_;
	};


	/**
	* Updates the cluster icon
	*/
	Cluster.prototype.updateIcon = function() {
	var zoom = this.map_.getZoom();
	var mz = this.markerClusterer_.getMaxZoom();

	if (zoom > mz) {
	 // The zoom is greater than our max zoom so show all the markers in cluster.
	 for (var i = 0, marker; marker = this.markers_[i]; i++) {
	   marker.setMap(this.map_);
	 }
	 return;
	}

	if (this.markers_.length < this.minClusterSize_) {
	 // Min cluster size not yet reached.
	 this.clusterIcon_.hide();
	 return;
	}

	var numStyles = this.markerClusterer_.getStyles().length;
	var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
	this.clusterIcon_.setCenter(this.center_);
	this.clusterIcon_.setSums(sums);
	this.clusterIcon_.show();
	};


	/**
	* A cluster icon
	*
	* @param {Cluster} cluster The cluster to be associated with.
	* @param {Object} styles An object that has style properties:
	*     'url': (string) The image url.
	*     'height': (number) The image height.
	*     'width': (number) The image width.
	*     'anchor': (Array) The anchor position of the label text.
	*     'textColor': (string) The text color.
	*     'textSize': (number) The text size.
	*     'backgroundPosition: (string) The background postition x, y.
	* @param {number=} opt_padding Optional padding to apply to the cluster icon.
	* @constructor
	* @extends google.maps.OverlayView
	* @ignore
	*/
	function ClusterIcon(cluster, styles, opt_padding) {
	cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

	this.styles_ = styles;
	this.padding_ = opt_padding || 0;
	this.cluster_ = cluster;
	this.center_ = null;
	this.map_ = cluster.getMap();
	this.div_ = null;
	this.sums_ = null;
	this.visible_ = false;

	this.setMap(this.map_);
	}


	/**
	* Triggers the clusterclick event and zoom's if the option is set.
	*/
	ClusterIcon.prototype.triggerClusterClick = function() {
	var markerClusterer = this.cluster_.getMarkerClusterer();

	// Trigger the clusterclick event.
	google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

	if (markerClusterer.isZoomOnClick()) {
	 // Zoom into the cluster.
	 this.map_.fitBounds(this.cluster_.getBounds());
	}
	};


	/**
	* Adding the cluster icon to the dom.
	* @ignore
	*/
	ClusterIcon.prototype.onAdd = function() {
	this.div_ = document.createElement('DIV');
	if (this.visible_) {
	 var pos = this.getPosFromLatLng_(this.center_);
	 this.div_.style.cssText = this.createCss(pos);
	 this.div_.innerHTML = this.sums_.text;
	}

	var panes = this.getPanes();
	panes.overlayMouseTarget.appendChild(this.div_);

	var that = this;
	google.maps.event.addDomListener(this.div_, 'click', function() {
	 that.triggerClusterClick();
	});
	};


	/**
	* Returns the position to place the div dending on the latlng.
	*
	* @param {google.maps.LatLng} latlng The position in latlng.
	* @return {google.maps.Point} The position in pixels.
	* @private
	*/
	ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
	var pos = this.getProjection().fromLatLngToDivPixel(latlng);
	pos.x -= parseInt(this.width_ / 2, 10);
	pos.y -= parseInt(this.height_ / 2, 10);
	return pos;
	};


	/**
	* Draw the icon.
	* @ignore
	*/
	ClusterIcon.prototype.draw = function() {
	if (this.visible_) {
	 var pos = this.getPosFromLatLng_(this.center_);
	 this.div_.style.top = pos.y + 'px';
	 this.div_.style.left = pos.x + 'px';
	}
	};


	/**
	* Hide the icon.
	*/
	ClusterIcon.prototype.hide = function() {
	if (this.div_) {
	 this.div_.style.display = 'none';
	}
	this.visible_ = false;
	};


	/**
	* Position and show the icon.
	*/
	ClusterIcon.prototype.show = function() {
	if (this.div_) {
	 var pos = this.getPosFromLatLng_(this.center_);
	 this.div_.style.cssText = this.createCss(pos);
	 this.div_.style.display = '';
	}
	this.visible_ = true;
	};


	/**
	* Remove the icon from the map
	*/
	ClusterIcon.prototype.remove = function() {
	this.setMap(null);
	};


	/**
	* Implementation of the onRemove interface.
	* @ignore
	*/
	ClusterIcon.prototype.onRemove = function() {
	if (this.div_ && this.div_.parentNode) {
	 this.hide();
	 this.div_.parentNode.removeChild(this.div_);
	 this.div_ = null;
	}
	};


	/**
	* Set the sums of the icon.
	*
	* @param {Object} sums The sums containing:
	*   'text': (string) The text to display in the icon.
	*   'index': (number) The style index of the icon.
	*/
	ClusterIcon.prototype.setSums = function(sums) {
	this.sums_ = sums;
	this.text_ = sums.text;
	this.index_ = sums.index;
	if (this.div_) {
	 this.div_.innerHTML = sums.text;
	}

	this.useStyle();
	};


	/**
	* Sets the icon to the the styles.
	*/
	ClusterIcon.prototype.useStyle = function() {
	var index = Math.max(0, this.sums_.index - 1);
	index = Math.min(this.styles_.length - 1, index);
	var style = this.styles_[index];
	this.url_ = style['url'];
	this.height_ = style['height'];
	this.width_ = style['width'];
	this.textColor_ = style['textColor'];
	this.anchor_ = style['anchor'];
	this.textSize_ = style['textSize'];
	this.backgroundPosition_ = style['backgroundPosition'];
	};


	/**
	* Sets the center of the icon.
	*
	* @param {google.maps.LatLng} center The latlng to set as the center.
	*/
	ClusterIcon.prototype.setCenter = function(center) {
	this.center_ = center;
	};


	/**
	* Create the css text based on the position of the icon.
	*
	* @param {google.maps.Point} pos The position.
	* @return {string} The css style text.
	*/
	ClusterIcon.prototype.createCss = function(pos) {
	var style = [];
	style.push('background-image:url(' + this.url_ + ');');
	var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
	style.push('background-position:' + backgroundPosition + ';');

	if (typeof this.anchor_ === 'object') {
	 if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
	     this.anchor_[0] < this.height_) {
	   style.push('height:' + (this.height_ - this.anchor_[0]) +
	       'px; padding-top:' + this.anchor_[0] + 'px;');
	 } else {
	   style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
	       'px;');
	 }
	 if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
	     this.anchor_[1] < this.width_) {
	   style.push('width:' + (this.width_ - this.anchor_[1]) +
	       'px; padding-left:' + this.anchor_[1] + 'px;');
	 } else {
	   style.push('width:' + this.width_ + 'px; text-align:center;');
	 }
	} else {
	 style.push('height:' + this.height_ + 'px; line-height:' +
	     this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
	}

	var txtColor = this.textColor_ ? this.textColor_ : 'black';
	var txtSize = this.textSize_ ? this.textSize_ : 11;

	style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
	   pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
	   txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
	return style.join('');
	};


	//Export Symbols for Closure
	//If you are not going to compile with closure then you can remove the
	//code below.
	window['MarkerClusterer'] = MarkerClusterer;
	MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
	MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
	MarkerClusterer.prototype['clearMarkers'] =
	 MarkerClusterer.prototype.clearMarkers;
	MarkerClusterer.prototype['fitMapToMarkers'] =
	 MarkerClusterer.prototype.fitMapToMarkers;
	MarkerClusterer.prototype['getCalculator'] =
	 MarkerClusterer.prototype.getCalculator;
	MarkerClusterer.prototype['getGridSize'] =
	 MarkerClusterer.prototype.getGridSize;
	MarkerClusterer.prototype['getExtendedBounds'] =
	 MarkerClusterer.prototype.getExtendedBounds;
	MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
	MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
	MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
	MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
	MarkerClusterer.prototype['getTotalClusters'] =
	 MarkerClusterer.prototype.getTotalClusters;
	MarkerClusterer.prototype['getTotalMarkers'] =
	 MarkerClusterer.prototype.getTotalMarkers;
	MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
	MarkerClusterer.prototype['removeMarker'] =
	 MarkerClusterer.prototype.removeMarker;
	MarkerClusterer.prototype['removeMarkers'] =
	 MarkerClusterer.prototype.removeMarkers;
	MarkerClusterer.prototype['resetViewport'] =
	 MarkerClusterer.prototype.resetViewport;
	MarkerClusterer.prototype['repaint'] =
	 MarkerClusterer.prototype.repaint;
	MarkerClusterer.prototype['setCalculator'] =
	 MarkerClusterer.prototype.setCalculator;
	MarkerClusterer.prototype['setGridSize'] =
	 MarkerClusterer.prototype.setGridSize;
	MarkerClusterer.prototype['setMaxZoom'] =
	 MarkerClusterer.prototype.setMaxZoom;
	MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
	MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

	Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
	Cluster.prototype['getSize'] = Cluster.prototype.getSize;
	Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

	ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
	ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
	ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;

	//////////////////////////end vehicleStatus.js///////////////////////////////////
	
	
	
	
	

;function selectAptAnalyticsURL(){let currentHost=window.location.hostname;if(prodPlatformHosts.indexOf(currentHost)!==-1){return analyticsProdURL;}else if(currentHost==='localhost'||currentHost==='localhost:8000'){return analyticsLocalURL;}else{return analyticsDevURL;}}
function getElementDetails(event){let details={id:event.target.id,class:event.target.className};return details;}
if(typeof userEmail==='undefined'||userEmail==""){userEmail="anand@analyticsvidhya.com";}
(function(){window.sib={equeue:[],client_key:"eoah69gejo3s70eho56z0"};window.sib.email_id=userEmail;window.sendinblue={};for(var j=['track','identify','trackLink','page'],i=0;i<j.length;i++){(function(k){window.sendinblue[k]=function(){var arg=Array.prototype.slice.call(arguments);(window.sib[k]||function(){var t={};t[k]=arg;window.sib.equeue.push(t);})(arg[0],arg[1],arg[2]);};})(j[i]);}var n=document.createElement("script"),i=document.getElementsByTagName("script")[0];n.type="text/javascript",n.id="sendinblue-js",n.async=!0,n.src="https://sibautomation.com/sa.js?key="+window.sib.client_key,i.parentNode.insertBefore(n,i),window.sendinblue.page();})();;let prodPlatformHosts=["www.analyticsvidhya.com","trainings.analyticsvidhya.com","datahack.analyticsvidhya.com","discuss.analyticsvidhya.com","id.analyticsvidhya.com","brahma.analyticsvidhya.com","courses.analyticsvidhya.com","datamin.analyticsvidhya.com","jobsnew.analyticsvidhya.com"];let analyticsProdURL="https://brahma.analyticsvidhya.com/api";let analyticsDevURL="https://brahma.aifest.org/api";let analyticsLocalURL="http://localhost:8000/api";let analyticsBaseURL=selectAptAnalyticsURL();let pageLoadTimestamp=Date.now();function getElementsToBeTracked(){let urlPath='/get_element_ids/';let url=analyticsBaseURL+urlPath;let selectorString='';if(selectorString!==''){$(selectorString).bind('click',recordClickEvent);}else{$(document).bind('click',recordClickEvent);}}
function recordClickEvent(event){let clickedElementDetails=getElementDetails(event);let urlPath='/events';let url=analyticsBaseURL+urlPath;let currentTimestamp=Date.now();let data={clickedElementDetails:clickedElementDetails,userEmail:userEmail,clientSystemTimestamp:new Date(currentTimestamp).toISOString(),currentPageURI:window.location.href,timeElapsed:String((currentTimestamp-pageLoadTimestamp)/1000),eventType:'click'};let dataJSON=JSON.stringify(data);$.ajax({url:url,xhrFields:{withCredentials:true},data:dataJSON,type:"POST",timeout:3000,contentType:'application/json',success:function(result){}});}
function recordPageloadEvent(){let urlPath='/events';let url=analyticsBaseURL+urlPath;let data={clientSystemTimestamp:pageLoadTimestamp,userEmail:userEmail,currentPageURI:window.location.href,eventType:'pageload'};let dataJSON=JSON.stringify(data);$.ajax({url:url,xhrFields:{withCredentials:true},data:dataJSON,type:"POST",timeout:3000,contentType:'application/json',success:function(result){}});}
getElementsToBeTracked();recordPageloadEvent();
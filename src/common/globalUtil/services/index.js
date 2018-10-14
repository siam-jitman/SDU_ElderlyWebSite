/*-- Url Call Server --*/

var PORT = window.location.port == '' ? '' : ':' + window.location.port;
var BASE_URL = window.location.hostname == "localhost" || "127.0.0.1" ? window.location.protocol + '//' + window.location.hostname + ":3000" : window.location.protocol + '//' + window.location.hostname + '' + PORT;
// var URI_SYS = BASE_URL + '/botManager/apis/';
var URI_ELDERLY_WS = BASE_URL + '/service/elderly/';
var URI_SYSTEM_WS = BASE_URL + '/service/system/';
var URI_COMMON_WS = BASE_URL + '/service/common/';

// URI Authen
var URL_AUTH = URI_SYSTEM_WS + 'authen/';

// URI Authen
var URL_CENTENT_COMMON = URI_COMMON_WS + "content/";
var URL_CENTENT_ELDERLY = URI_ELDERLY_WS + "content/";

// Login page
var URL_LOGIN = URL_AUTH + 'login';
var URL_LOGOUT = URL_AUTH + 'logout';

//Content page
var URL_FIND_CONTENT_BI_ID_MEMBER = URL_CENTENT_COMMON + "findContentByIdMember";


export default {
  BASE_URL: BASE_URL,
  URL_LOGIN: URL_LOGIN,
  URL_LOGOUT: URL_LOGOUT,
  CONTENT:{
    URL_FIND_CONTENT_BI_ID_MEMBER : URL_FIND_CONTENT_BI_ID_MEMBER
  }
}

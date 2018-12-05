/*-- Url Call Server --*/

var BASE_URL = "http://tayaitourism.com";
// var URI_SYS = BASE_URL + '/botManager/apis/';
var URI_SERVICE = BASE_URL + "/service/";
var URI_IMAGE = BASE_URL + "/public/image/";
var URI_IMAGE_PROFILE = BASE_URL + "/public/image/profile/content/";
var URI_EBOOK = BASE_URL + "/public/ebook/";
var URI_VIDEO = BASE_URL + "/public/video/";

var URL_FIND_COTENT_BY_ID = URI_SERVICE + "content/findContentById";
var URL_LIST_CONTENT = URI_SERVICE + "content/listContent";
var URL_FIND_CONTENT_VIDEO = URL_FIND_CONTENT_VIDEO + "content/findContentVideo"

export default {
  BASE_URL: BASE_URL,
  URI_IMAGE: URI_IMAGE,
  URI_IMAGE_PROFILE: URI_IMAGE_PROFILE,
  URI_EBOOK: URI_EBOOK,
  URI_VIDEO: URI_VIDEO,
  CONTENT: {
    URL_FIND_COTENT_BY_ID: URL_FIND_COTENT_BY_ID,
    URL_LIST_CONTENT: URL_LIST_CONTENT,
    URL_FIND_CONTENT_VIDEO: URL_FIND_CONTENT_VIDEO

  }
};

import $ from 'jquery';

function getCookie(name) {
  if (!document.cookie) {
    return null;
  }
  for (let cookie of document.cookie.split(';')) {
    cookie = $.trim(cookie);
    if (cookie.substring(0, name.length + 1) === name + '=') {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
}

function sameOrigin(url) {
  let {host, protocol} = document.location;
  let sr_origin = '//' + host;
  let origin = protocol + sr_origin;
  return url === origin || url.slice(0, origin.length + 1) === origin + '/' ||
         url === sr_origin || url.slice(0, sr_origin.length + 1) === sr_origin + '/' ||
         !/^(\/\/|http:|https:).*/.test(url);
}

function safeMethod(method) {
  /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
}

$(document).ajaxSend(function(event, xhr, settings) {
  if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
  }
});

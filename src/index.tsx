import { bitable } from '@base-open/web-api'

function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}

let domain = 'https://base-lottery.replit.app';
let getBaseInfo = bitable.base.getSelection();
getBaseInfo.then((result) => {
  var BaseId = result.baseId;

  let getUserId = bitable.bridge.getUserId();
  getUserId.then((result) => {
    var UserId = result;

    var type = getQueryString("type");
    if (type == "1") {
      window.location.href = domain + '/lottery_setup?userid=' + encodeURIComponent(UserId) + '&baseid=' + BaseId;
    } else {
      window.location.href = domain + '/?userid=' + encodeURIComponent(UserId) + '&baseid=' + BaseId;
    }
  })
})


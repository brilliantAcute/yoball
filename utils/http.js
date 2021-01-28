function SEND(url, method, data, success, fail) {   
  wx.request({
     url: url,
     header: {
       'content-type': 'application/json',
     },
     method: method,
     data: data,
     success(res) {
       success(res);
     },
     fail(res) {
      fail(res);
     }
   });
}

export default {
  SEND
}
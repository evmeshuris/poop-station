export default class LitterInfo {
  static async getInfo() {
    try {
      const response = await fetch(
        `https://litterbot.api.theemm.com/get_info`
        // "url": "https://litterbot.api.theemm.com/get_info",
        // "method": "GET",
        // "timeout": 0,
        // "headers": {
        // "X-API-Key": "0XqYjqekJL60tVjNWbkvG9PXgcxjtEMpxWeLQ3ba"
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return Error(error);
    }
  }
}

// var settings = {
//   "url": "https://litterbot.api.theemm.com/get_info",
//   "method": "GET",
//   "timeout": 0,
//   "headers": {
//     "X-API-Key": "0XqYjqekJL60tVjNWbkvG9PXgcxjtEMpxWeLQ3ba"
//   },
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });

$.ajax({
  url: "https://litterbot.api.theemm.com/get_info",
  data: { signature: authHeader },
  type: "GET",
  beforeSend: function(xhr){xhr.setRequestHeader('X-Test-Header', 'test-value');},
  success: function() { alert('Success!' + authHeader); }
});

// $.ajax({
//   url: URL,
//   type: 'GET',
//   dataType: 'json',
//   headers: {
//       'header1': 'value1',
//       'header2': 'value2'
//   },
//   contentType: 'application/json; charset=utf-8',
//   success: function (result) {
//      // CallBack(result);
//   },
//   error: function (error) {
      
//   }
// });
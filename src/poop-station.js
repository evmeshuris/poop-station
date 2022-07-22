export default class LitterInfo {
  static async getInfo(amount) {
    try {
      const response = await fetch(
        ``
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

var settings = {
  "url": "https://litterbot.api.theemm.com/get_info",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-API-Key": "0XqYjqekJL60tVjNWbkvG9PXgcxjtEMpxWeLQ3ba"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
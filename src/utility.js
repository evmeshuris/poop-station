export class ApiCall {
  static getApi(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}

export class ErrorHandling {
  static handleError(response) {
    if (response instanceof Error) {
      return true;
    } else {
      return false;
    }
  }
}
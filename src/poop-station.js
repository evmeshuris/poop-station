export default class PoopInfo {
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
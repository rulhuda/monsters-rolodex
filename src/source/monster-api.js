import API_ENPOINT from "../config/api-endpoint";

class Source {
  static async getMonsters () {
    try {
      const response = await fetch(API_ENPOINT.GET_MONSTER, {
        method: 'GET',
      });
      
      if (response.ok) {
        const responseJson = await response.json();
        return responseJson;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default Source;
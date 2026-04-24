import axios from "axios";


export class pokeApiFetchAdapter {

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}
export class pokeApiAdapter {

  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    
    const { data } = await this.axios.get<T>(url);
    return data;
  } 
async post (url: string, data: any) {
//    const resp = await fetch(url, {
//      method: 'POST',
//      body: JSON.stringify(data)
//   });
//    const responseData = await resp.json();
//    return responseData;
  }
  async patch (url: string, data: any) {
//    const resp = await fetch(url, {
//      method: 'PATCH',
//      body: JSON.stringify(data)
//    });
//    const responseData = await resp.json();
//    return responseData;
  }
  async delete (url: string) {
//    const resp = await fetch(url, {
//      method: 'DELETE'
//    });
//    const responseData = await resp.json();
//    return responseData;
  }
}
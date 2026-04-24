import axios from "axios";


export interface httpAdapter {
  get<T>(url: string): Promise<T>;
//  post(url: string, data: any): Promise<any>;
//  patch(url: string, data: any): Promise<any>;
//  delete(url: string): Promise<any>;
}

export class pokeApiFetchAdapter implements httpAdapter {

  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log( 'Con fetch')
    return data;
  }
}
export class pokeApiAdapter implements httpAdapter {

  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    
    const { data } = await this.axios.get<T>(url);
    console.log( 'Con axios')
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
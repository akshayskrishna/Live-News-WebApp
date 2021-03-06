import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public baseUrl: any = "https://newsapi.org/v2/";
  public country: any = "country=us";
  public apiKey: any = "&apiKey=99a02cdc402f4fb8996a0eb2e25d8816";
  public proxyurl = "https://cors-anywhere.herokuapp.com/";

  /* Used to call Weather API using Geo-Cordinated collected from the ion-native function

  public wbaseurl: any = "api.openweathermap.org/data/2.5/weather?";
  public wapikey: any = "&appid=e60dc6b1afdbe03e3571a3333d761ba8";

  weathercall() {
    const weatherurl =
      this.wbaseurl + "lat=" + 35 + "&lon=" + 139 + this.wapikey;
    return this.http.get(weatherurl);

    //this.wbaseurl + "lat=" + lat + "&lon=" + long + this.wapikey;
    //api.openweathermap.org/data/2.5/weather?lat=35&lon=75&appid=e60dc6b1afdbe03e3571a3333d761ba8
  }
  */

  constructor(private http: HttpClient) { }

  getData() {
    const url = this.proxyurl + this.baseUrl + "top-headlines?" + this.country + this.apiKey;
    return this.http.get(url);
  }

  getDatabyCategory(category) {
    const url =
      this.baseUrl +
      "top-headlines?" +
      this.country +
      "&category=" +
      category +
      this.apiKey;
    return this.http.get(url);
  }
  getDatabyCategoryToWallStreet() {
    const url =
      this.baseUrl +
      "everything?" +
      "domains=wsj.com,nytimes.com" +
      this.apiKey;
    return this.http.get(url);
  }

  getDataBySearch(search) {
    const url = this.baseUrl + "everything?q=" + search + this.apiKey;
    return this.http.get(url);
  }

  /*
  API for Search queries news - https://newsapi.org/v2/everything?q=technology&apiKey=f48ebc4415f34c0db27d2eb48fb223c6

  API for Wallstreet news - https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=f48ebc4415f34c0db27d2eb48fb223c6

  API for Top Headlines news - http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f48ebc4415f34c0db27d2eb48fb223c6

  API for NY Times Top Shared News - https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=J09RLAfyWqa6sLvPPQehDdvzgWq5mIey

  */
}

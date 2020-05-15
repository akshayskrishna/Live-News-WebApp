import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { NavController } from "@ionic/angular";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data: any = [];
  reply: any = [];
  lati: any;
  longi: any;

  constructor(
    private api: ApiService,
    private iab: InAppBrowser,
    private geo: Geolocation
  ) {}

  ngOnInit() {
    this.mydata();
  }

  /* 
      Main Page - list of 20   
  */

  async mydata() {
    return this.api.getData().subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
    });
  }

  /* 
      In App Browser Function Call   
  */

  InAppB(readmoreUrl) {
    this.iab.create(readmoreUrl, "_blank");
  }

  /*
    Function calls from ion-buttons
  */

  changeToBusiness() {
    this.mydataCatagory("business");
  }
  changeToTechnology() {
    this.mydataCatagory("technology");
  }
  changeToSports() {
    this.mydataCatagory("sports");
  }

  /*
    Function passes data to ServicesAPI ion service page
  */
  async mydataCatagory(category) {
    return this.api.getDatabyCategory(category).subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
    });
  }

  /* 
    Function calls data from WallStreet
    Unique function written cause the API endpoints are different
  */

  changeToWallStreet() {
    this.api.getDatabyCategoryToWallStreet().subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
    });
  }

  changeToInternship() {
    return this.api.getDataBySearch("Jobs Listing").subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
    });
  }

  //Function called when search bar is used
  searchEvent(event) {
    query: String;
    const query = event;
    console.log(query);
    return this.api.getDataBySearch(query).subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
    });
  }
}

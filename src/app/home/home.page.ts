import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  data: any = [];
  title: string = "Home";
  searchquery: string;
  techVar: string = "technology";

  constructor(private api: ApiService, private iab: InAppBrowser) { }

  /* Starts when app launches */

  ngOnInit() {
    this.mydata();
  }

  /*  Main Page - list of 20   */
  async mydata() {
    return this.api.getData().subscribe((data) => {
      this.data = data["articles"];
      //console.log(this.data);
    });
  }

  /* Select Category using ion-select */
  /* Used if-else loop since API endpoints for Technology, business, sports & Wallstreet are different from search query */

  seletCategory($cat) {
    const selectCategory = $cat.target.value;
    this.searchquery == selectCategory;
    if (selectCategory == "technology") {
      if (selectCategory == "business") {
        if (selectCategory == "sports") {
          this.mydataCatagory(selectCategory);
        }
      }
    } else if (selectCategory == "Stocks") {
      this.changeToWallStreet();
      this.title = "Wall Street";
    } else {
      this.searchEvent($cat.target.value);
      //console.log(this.title);
    }
  }

  /* Method called when search bar is invoked */
  searchEvent(event) {
    query: String;
    const query = event;
    //console.log(query);
    return this.api.getDataBySearch(query).subscribe((data) => {
      this.data = data["articles"];
      this.title = query;
      //console.log(this.data);
    });
  }

  /* In App Browser Function Call  */

  InAppB(readmoreUrl) {
    this.iab.create(readmoreUrl, "_blank");
  }

  /* Function calls to bring out queries */

  changeToBusiness() {
    this.mydataCatagory("business");
  }
  changeToTechnology() {
    this.mydataCatagory("technology");
    //this.mydataCatagory("technology");
  }
  changeToSports() {
    this.mydataCatagory("sports");
  }

  /* Method calls API End points for pre-defined categories  */
  async mydataCatagory(category) {
    return this.api.getDatabyCategory(category).subscribe((data) => {
      this.data = data["articles"];
      //console.log(this.data);
    });
  }

  /*  Method calls data from WallStreet Unique function written cause the API endpoints are different from others  */
  changeToWallStreet() {
    this.api.getDatabyCategoryToWallStreet().subscribe((data) => {
      this.data = data["articles"];
      //console.log(this.data);
    });
  }
}



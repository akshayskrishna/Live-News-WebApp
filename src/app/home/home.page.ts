import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { NavController } from '@ionic/angular';
import { PinService, Structure } from '../service/pin.service'

import { Url } from 'url';

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

  public PinTitle: string;
  public Pinurl: Url;
  public PinDesc: string;
  public PinImg: Url;




  constructor(private api: ApiService, private iab: InAppBrowser, private navCtrl: NavController, private pinService: PinService) { }

  /* Starts when app launches */

  ngOnInit() {
    this.mydata();

  }

  /*  Main Page - list of 20   */
  async mydata() {
    return this.api.getData().subscribe((data) => {
      this.data = data["articles"];
      console.log(this.data);
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



  public pinButton(event, item) {
    item: item;
    this.PinTitle = item.title;
    this.PinDesc = item.description;
    this.PinImg = item.urlToImage;
    this.Pinurl = item.url
    // this.savePin(item);



    console.log(item.title);
  }


  savePin(item) {
    this.pinService.addPinItem(item);
    console.log(this.PinTitle);

  }




}

// 
//[routerLink]="'/pin/' + item.title"
/*

            Implementing the right code formatting for ion-select

<ion-content padding>

  <ion-list>
  <ion-item>
    <ion-label>PROJECT</ion-label>
    <ion-select [(ngModel)]="project">
      <ion-option *ngFor="let project of projects" value="{{project}}">{{project}}</ion-option>
    </ion-select>
  </ion-item>
</ion-list>

<button *ngIf="project" ion-button (click)="reset()">clear</button>

</ion-content>


.ts File

export class HomePage {

  projects: any = [];
  project: string;

  constructor() {
    this.projects = ["project 1", "project 2", "project 3", "project 4"];
  }

  reset() {
    this.project = null;
  }
}


*/

/*

              IDEA FOR SPLASH SCREEN
CREATE A PAGE ADD CSS AND JUMP TO MAIN PAGE AFTER 10secs

import { Router } from '@angular/router';

constructor(private router: Router) {}

ngOnInit() {

    setTimeout(() => {
        this.router.navigate(['nextRoute']);
    }, 5000);  //5s

}

*/

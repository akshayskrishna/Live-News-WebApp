import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PinService, Structure } from 'src/app/service/pin.service';
import { HomePage } from '../../home/home.page'






@Component({
  selector: 'app-pin-details',
  templateUrl: './pin-details.page.html',
  styleUrls: ['./pin-details.page.scss'],
})
export class PinDetailsPage implements OnInit {

  // structure: Structure = {
  //   heading: '',
  //   image: '',
  //   content: '',
  //   date: '',

  // }

  pinId = null;
  private todo: string;

  constructor(private route: ActivatedRoute, private nav: NavController, private fireservice: PinService) { }



  ngOnInit() {
    // this.pinId = this.route.snapshot.params['id'];
    // if (this.pinId) {
    //   this.loadData();
    // }
  }

  // loadData() {
  //   this.fireservice.getPinnedwithId(this.pinId).subscribe(res => {
  //     this.structure = res;
  //   });
  // }



}

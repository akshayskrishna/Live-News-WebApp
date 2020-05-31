import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../api.service";
import { HomePage } from '../../home/home.page'
import { HomePageModule } from 'src/app/home/home.module';
import { NavController } from '@ionic/angular';
import { PinService, Structure } from '../../../app/service/pin.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-pin-display',
  templateUrl: './pin-display.page.html',
  styleUrls: ['./pin-display.page.scss'],
})
export class PinDisplayPage implements OnInit {

  struct: Structure = {
    articleUrl: "",
    heading: "",
    description: "",
    imgUrl: "",
  }


  pinId = null;

  constructor(private route: ActivatedRoute, private pin: PinService, private nav: NavController) { }





  ngOnInit() {
    this.pinId = this.route.snapshot.params['id'];
    if (this.pinId) {
      this.loadPinned();
    }
  }

  async loadPinned() {
    this.pin.getPinnedwithId(this.pinId).subscribe(res => { this.struct = res });
  }

}

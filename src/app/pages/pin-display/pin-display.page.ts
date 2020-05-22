import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../api.service";
import { HomePage } from '../../home/home.page'
import { HomePageModule } from 'src/app/home/home.module';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pin-display',
  templateUrl: './pin-display.page.html',
  styleUrls: ['./pin-display.page.scss'],
})
export class PinDisplayPage implements OnInit {



  constructor(private route: ActivatedRoute, private API: ApiService, private hp: HomePage, private nav: NavController) { }

  //title: 



  ngOnInit() {

  }

}

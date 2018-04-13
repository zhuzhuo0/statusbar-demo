import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-inner',
  templateUrl: 'inner.html',
})
export class InnerPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public statusBar: StatusBar
  ) {
  }

  ionViewWillEnter() {
    if (this.platform.is('android')) {
      this.statusBar.overlaysWebView(true);
    }
    if (this.platform.is('ios')) {

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerPage');
  }

}

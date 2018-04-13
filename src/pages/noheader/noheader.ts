import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the NoheaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noheader',
  templateUrl: 'noheader.html',
})
export class NoheaderPage {

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
    console.log('ionViewDidLoad NoheaderPage');
  }

}

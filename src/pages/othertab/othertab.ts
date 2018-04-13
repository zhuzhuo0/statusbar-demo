import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
import { NoheaderPage } from './../noheader/noheader';
import { EnterPage } from './../enter/enter';
import { InnerPage } from './../inner/inner';

/**
 * Generated class for the OthertabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-othertab',
  templateUrl: 'othertab.html',
})
export class OthertabPage {

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public statusBar: StatusBar,
    public app: App
  ) {
  }

  ionViewWillEnter() {
    if (this.platform.is('android')) {
      this.statusBar.overlaysWebView(true);
    }
    if (this.platform.is('ios')) {

    }
  }

  enterPage() {
    this.app.getRootNav().push(EnterPage);
  }

  innerPage(){
    this.app.getRootNav().push(InnerPage);
  }

  noheaderPage() {
    this.app.getRootNav().push(NoheaderPage);
  }

}

import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';
import { NoheaderPage } from './../noheader/noheader';
import { EnterPage } from './../enter/enter';
import { InnerPage } from './../inner/inner';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar,
    public platform: Platform,
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

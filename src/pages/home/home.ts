import { InnerPage } from './../inner/inner';
import { NoheaderPage } from './../noheader/noheader';
import { EnterPage } from './../enter/enter';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  showSearchbar: boolean = false;

  constructor(
    public navCtrl: NavController,
    public statusBar: StatusBar,
    public platform: Platform,
    public app: App,
    public ref: ChangeDetectorRef,
  ) {

  }

  ionViewWillEnter() {
    if (this.platform.is('android')) {
      this.statusBar.overlaysWebView(true);
      this.statusBar.backgroundColorByHexString('#00000000');
    }
    if (this.platform.is('ios')) {

    }
  }

  onScroll($event: any) {
    let scrollTop = $event.scrollTop;
    this.showSearchbar = scrollTop >= 100;
    this.ref.detectChanges();
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

import { Component } from '@angular/core';
import { ToastController, NavController, NavParams,Platform,AlertController  } from 'ionic-angular';
import {Shake} from '@ionic-native/shake';
import {HomePage} from '../home/home';
/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  public img:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private platform:Platform,
  private shake:Shake,
  public alertCtrl: AlertController,
  private toastCtrl:ToastController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  this.img=this.navParams.get('photo');
   // this.img='https://huntervalleyzoo.com.au/images/AnimalsHVZpage/Mammals/bruiser.jpg';
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'successfull',
      subTitle: 'You posted the photo on Facebook!',
      buttons: [
        {
          text:'OK',
          handler:()=>{
            this.gotoHome();
          }
        }
      ]
    });
    alert.present();
  }
  shakePhone(){
    this.platform.ready().then(()=>{
      this.shake.startWatch(40).subscribe(data=>{
        this.showAlert();
        
      })
    })
  }
  presentToast(){
    let toast =this.toastCtrl.create({
      message:'please shake the phone to post',
      duration:5000
    });
    toast.present();
  }

  gotoHome(){
this.navCtrl.setRoot(HomePage);

  }
}

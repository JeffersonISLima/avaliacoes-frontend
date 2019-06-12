import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import  axios from 'axios'; 
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  loading;
  photos: Array<string> = [];

  constructor(
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {   
    this.presentLoading();
    this.randomPhotos();

    setTimeout( () => {
      try {
        this.dismissLoading();
       
      } catch(err) {
        console.error(err);
        alert('Error dismissing loader');
      }
    }, 1000)
  }
  
  randomPhotos() {
    axios.get(`https://picsum.photos/v2/list?page=2&limit=300`)
      .then( ( response ) => {
        this.photos = response.data;
        this.photos =  _.shuffle(this.photos);
    });  
  }  

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }
  
  dismissLoading() {
    if (!_.isNil(this.loading)) {
      this.loading.dismiss();
    }
  }
}

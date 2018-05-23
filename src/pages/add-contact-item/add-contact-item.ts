import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ContactListService } from '../../services/contact-list/contact-list.service';


@IonicPage()
@Component({
  selector: 'page-add-contact-item',
  templateUrl: 'add-contact-item.html',
})
export class AddContactItemPage {
  item: Item = {
    nome: '',
    telefone: '',
    altura: ''

  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private contact: ContactListService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactItemPage');
  }

  addItem(item: Item){
    this.contact.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', { key: ref.key })
    })
  }

}

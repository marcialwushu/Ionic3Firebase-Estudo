import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ContactListService } from '../../services/contact-list/contact-list.service';




@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactList$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private contact: ContactListService

  ) {
    this.contactList$ = this.contact.getAll();

  }




}

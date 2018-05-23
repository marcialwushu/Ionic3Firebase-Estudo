import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../models/item/item.model';

@Injectable()
export class ContactListService {

  private contactListRef = this.db.list<Item>('contact-list');
  private PATH = 'contact-list  ';

  constructor(private db: AngularFireDatabase){

  }

  getContactList(){
    return this.contactListRef;
  }

  addItem(item: Item){
    return this.contactListRef.push(item);
  }

  getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, data: c.payload.val() }))
      })
  }
}

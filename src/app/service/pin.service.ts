import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Url } from 'url';

export interface Structure {
  heading: string;
  description: string;
  imgUrl: string;
  articleUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PinService {

  private newspin: AngularFirestoreCollection;
  private newsList;


  constructor(private db: AngularFirestore) {
    this.newspin = db.collection('pinned');

    this.newsList = this.newspin.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }))

  }
  //end

  getPinned() {
    return this.newsList;
  }

  getPinnedwithId(id) {
    return this.newspin.doc<Structure>(id).valueChanges();
  }

  removePinned(id) {
    return this.newspin.doc(id).delete();
  }
  addPin(structure: Structure) {
    console.log("Pin Saved")
    return this.newspin.add({ ...structure });
  }
  addPinItem(item) {
    const title = item.title;
    return this.newspin.add(title);
  }

}

import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Listshrine1Page } from '../listshrine1/listshrine1'
import { Listshrine2Page } from '../listshrine2/listshrine2'
import { Listshrine3Page } from '../listshrine3/listshrine3'
import { HistoryshrinePage } from '../historyshrine/historyshrine'
import { RulePage } from '../rule/rule'
import { TraditionPage } from '../tradition/tradition'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  
listshrine1Page(){
console.log("second page")
this.navCtrl.push(Listshrine1Page)
}

listshrine2Page(){
console.log("second page")
this.navCtrl.push(Listshrine2Page)
}

listshrine3Page(){
console.log("second page")
this.navCtrl.push(Listshrine3Page)
}

historyshrinePage(){
console.log("second page")
this.navCtrl.push(HistoryshrinePage)
}

rulePage(){
console.log("second page")
this.navCtrl.push(RulePage)
}

traditionPage(){
console.log("second page")
this.navCtrl.push(TraditionPage)
}


}



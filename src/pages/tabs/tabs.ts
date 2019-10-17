import { Component } from '@angular/core';

import { ChooseplacePage } from '../chooseplace/chooseplace';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';
import { ShowlistPage } from '../showlist/showlist';
import { MapsfirebasePage } from '../mapsfirebase/mapsfirebase';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChooseplacePage;
  tab3Root = ShowlistPage;
  tab4Root = MapPage;


  constructor() {

  }
}

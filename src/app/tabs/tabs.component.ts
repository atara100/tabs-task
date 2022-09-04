import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  selectedTab:string='homePage';
  @Output() onTabClick=new EventEmitter<string>();

  ngOnInit(): void {
  }

  selectTab(tab:string){
   this.selectedTab=tab
   this.onTabClick.emit(tab);

  }

}

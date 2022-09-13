import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  constructor() { }

  @Input() card!:Card;

  ngOnInit(): void {
  }

  like():number{
   return this.card.likes+=1;
  }

  disLike():number{
    if(this.card.likes===0){
      return this.card.likes=0;
    }
      return this.card.likes-=1;

  }

}
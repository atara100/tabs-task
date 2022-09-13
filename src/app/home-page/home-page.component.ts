import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient) { }
   API_URL:string="https://picsum.photos/v2/list";
    imagesArray:Card[] = [];
    formData = {url:'example.com', name:'example2'}


  ngOnInit(): void {
  }
  

  loadRandomImage(){
    this.http.get(this.API_URL).subscribe({
     next:(v:any)=>{
      v.forEach((image:any)=>{
        console.log(image);
      this.imagesArray.push(new Card(image.author,image.download_url));
      })     
    },
     error:(e)=>console.log(e),
     complete:()=>console.log('complete')     
    })

  }

}

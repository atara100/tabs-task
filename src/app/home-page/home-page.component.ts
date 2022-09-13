import { Card } from '../models/card.model';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImagesService } from '../services/images.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient, private imageService:ImagesService) { }
  // counter:number=1;
   API_URL:string=`https://picsum.photos/v2/list?page=`;
    imagesArray:Card[] =this.imageService.imagesArray;
    formData = {url:'example.com', name:'example2'}


  ngOnInit(): void {
  }
  

  loadRandomImage(){
    console.log(this.imageService.counter);
    
    this.http.get(this.API_URL+this.imageService.counter).subscribe({
     next:(v:any)=>{
      v.forEach((image:any)=>{
      this.imageService.imagesArray.push(new Card(image.author,image.download_url));
      })  
      this.imageService.counter++;   
      console.log(this.imageService.imagesArray);
      
      
    },
     error:(e)=>console.log(e),
     complete:()=>console.log('complete')     
    })

  }
}

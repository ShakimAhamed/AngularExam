import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.css']
})
export class BookmarkPageComponent implements OnInit{
  bookmarkData:any=[];
  ngOnInit(): void {

    let data:any = localStorage.getItem('bookMarkdata');
    
    this.bookmarkData = data?JSON.parse(data):'';
    
    console.log(this.bookmarkData);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from './local-storage.service';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';
  bookMarkForm!: FormGroup;
  categorys = [{id:1,val:'Category A'},
                {id:2,val:'Category B'},
                {id:3,val:'Category C'},
                {id:4,val:'Category D'},
                {id:5,val:'Category E'}]; 
  default = this.categorys[0].id;
  bookmarkData:any=[];

  Title:string='';
  URL:string='';
  CatName:string='';


  constructor(
    private formbuilder: FormBuilder,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.bookMarkForm = this.formbuilder.group({
      
      Title: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30)])],
      URL: ['', [Validators.required,Validators.pattern(reg)]],
      Category: [this.default, [Validators.required]]
    });

    let data:any = localStorage.getItem('bookMarkdata');
    
    this.bookmarkData = data?JSON.parse(data):'';
    
    console.log(this.bookmarkData);

  }

  myFunc(data: any){
    let dd = this.categorys.filter((a: { id: any; })=> a.id == data)[0].val;
    return dd;
  }
  onSubmit() {
    var bookMarkForm = this.bookMarkForm.value;
    let array: any = [];
    if (localStorage.getItem('bookMarkdata')) {
      
      array = JSON.parse(localStorage.getItem('bookMarkdata')||''); 
    }
    array.push(bookMarkForm);
    localStorage.setItem('bookMarkdata',JSON.stringify(array));
    console.log(array);
    $('#close').click(); 
    this.toastr.success('Success', 'Successfully Save Data!!');
    
  }

  details(val:any){ 
    let obj:any = this.bookmarkData.filter((a: { Category: any; })=> a.Category == val)[0];
    
    if(obj){
      this.Title = obj.Title;
      this.URL = obj.URL;
      this.CatName = this.categorys.filter((a: { id: any; })=> a.id == obj.Category)[0].val;
    }
  }

}

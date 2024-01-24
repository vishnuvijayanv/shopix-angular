import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  allproduct:any=[]
  constructor(private api:ApiService){ }
  ngOnInit(): void {
    this.api.getallproductapi().subscribe({
      next:(res:any)=>{
        this.allproduct=res
        console.log(this.allproduct);
        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}

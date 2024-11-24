import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {


  productRegister!:FormGroup
  product:Product[]=[]

  constructor(private fb:FormBuilder, private service:ServiceService, private rs:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.productRegister=this.fb.group({

    pid:[0],
    pname:[],
    pprice:[],
    pdetails:[],
    pcategory:[]
    })

    this.patchEditValue()
   
  }




  savedata() {
    console.log(this.productRegister.value)

    this.service.saveData(this.productRegister.value).subscribe();
    alert("Save Product"+this.productRegister.value['pname'])

    this.productRegister.reset();
    }

    patchEditValue(){

      this.rs.paramMap.subscribe(
  
        param=>{
  
          let prodser :any= param.get('data')
          let editDetails:Product= JSON.parse(prodser);
          console.log(editDetails)
          alert('------')
          this.productRegister.patchValue(editDetails)
        }
      )
    }
    
}



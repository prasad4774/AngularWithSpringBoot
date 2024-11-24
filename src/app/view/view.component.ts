import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{




  product:Product[]=[]
constructor(private service:ServiceService ,private router:Router)


{

}

  ngOnInit(): void {
    
    this.service.getData().subscribe((data:Product[])=>{
      this.product=data

      
    })
  }


  delete(pid: number) {
    this.service.delete(pid).subscribe()
    
    }
    update(p: any) {
   
      let prodserv:string=JSON.stringify(p);
      console.log(prodserv);
     this.router.navigateByUrl('/update/'+prodserv)
    }
}

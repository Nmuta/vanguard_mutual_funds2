import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from '../fund/fund.model';


@Component({
  selector: 'app-editfund',
  templateUrl: './editfund.component.html',
  styleUrls: ['./editfund.component.scss']
})
export class EditfundComponent implements OnInit {

  fund:Fund = {};

  constructor(private router: Router, 
    private fundService: FundService ,
    private route: ActivatedRoute) { 

    }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.fundService.getFund(myid).subscribe(payload=>{
        console.log("the payload I want to edit is", payload);
        this.fund = payload;
      })
    })
  }

  update(): void {
    this.fundService.updateFund(this.fund).subscribe(data =>{
      if(data){
        this.router.navigateByUrl("/funds");
      }
    })
  }

}

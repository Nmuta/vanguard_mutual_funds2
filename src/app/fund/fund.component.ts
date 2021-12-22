import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../fund.service';
import { Fund } from './fund.model';
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {

  fund:Fund = {};
   

  constructor(private route:ActivatedRoute, 
    private fundService: FundService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      console.log("this is my wildcard 'id' ", myid);
      this.fundService.getFund(myid).subscribe(payload=>{
        this.fund = payload;
      })
    })
  }

  edit() :void {
     this.router.navigateByUrl(`/funds/${this.fund.id}/edit`);
  }

  

}

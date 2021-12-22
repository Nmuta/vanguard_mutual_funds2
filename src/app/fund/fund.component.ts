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
   
  // workingFund = {title: ["asdf", {editing: false}], 
  //                subtitle: ["adsf", {editing: true}]
  //               }

  tempFundList:any[][] = [];

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
        const obj = {...this.fund};
        for(const [key, value] of Object.entries(this.fund)){
           const localarray = [key, value, false];
           this.tempFundList.push(localarray);
        }
      })
    })
  }


  update(): void {
    this.convertTempFundList();

    this.fundService.updateFund(this.fund).subscribe(data =>{
      if(data){
        this.router.navigateByUrl("/funds");
      }
    })
  }

  convertTempFundList(){
    const reconstitutedFund:any = {};
    this.tempFundList.forEach(fund => {
      reconstitutedFund[fund[0]] = fund[1];
    })
    this.fund = reconstitutedFund;
  }

  makeEditble (index: number){
      this.tempFundList[index][2] = true;
  }

  makeStatic (index: number){
    this.tempFundList[index][2] = false;
  }

}

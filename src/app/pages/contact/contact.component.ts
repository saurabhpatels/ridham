import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let playerName: string;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   baseUrl = 'https://app.verify-email.org/api/v1/l2u7Xbvc9FbnJOh7U4XUDDofoYB7s0mJ4hUXGiGCyrYFoablUs/verify/';
   constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get(this.baseUrl + 'abc@gmail.com').subscribe((res: any[]) => {
      console.log(res);
    });
  }


  SendContact() {

  }

}

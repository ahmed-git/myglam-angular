import { Component, OnInit } from '@angular/core';
import { MyGlamService } from 'src/app/my-glam/my-glam.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  myGlamData: any[];

  constructor(private service: MyGlamService) { }

  ngOnInit() {
    this.service.getData().subscribe(values => this.myGlamData = values.data);
  }

}

import { Component, OnInit } from '@angular/core';
import { MyGlamData } from './my-glam-data';
import { MyGlamService } from './my-glam.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-my-glam',
  templateUrl: './my-glam.component.html',
  styleUrls: ['./my-glam.component.css']
})
export class MyGlamComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
    
    }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
 
  position = {
    lat :20.634711,
    lng : -103.382414
  }
  constructor() { }

  ngOnInit(): void {
  }

}

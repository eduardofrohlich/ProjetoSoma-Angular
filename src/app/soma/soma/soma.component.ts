import { Component, OnInit } from '@angular/core';
import { SomaService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css'],
})
export class SomaComponent implements OnInit {
  constructor(private somaService: SomaService) {}
  ngOnInit(): void {}
}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() scale = 1;
  @Input() showImage = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}

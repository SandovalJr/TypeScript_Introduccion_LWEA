import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss'],
})
export class DirectivasComponent implements OnInit {
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  showLoading() {
    //vas a ser el loading pero cambiaras el valor que tiene actualmente
    this.loading = !this.loading;
  }





}

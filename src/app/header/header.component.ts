import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from '@angular/material';


import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }


  ngOnInit() {
  }

  openLoginForm() {
  //  this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
    //  console.log('open');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(LoginComponent, dialogConfig);

}
}

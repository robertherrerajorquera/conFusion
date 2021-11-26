import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }
  loginFormValue: boolean = false;
  ngOnInit() {
  }

  openLoginForm() {
 //   this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
 // console.log(this.dialog);
 this.loginFormValue = true;

  }
}

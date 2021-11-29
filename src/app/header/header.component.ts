import { Component, Input, OnInit, TemplateRef, DoCheck } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalService } from '../services/modal.service';
import { Modal } from '../shared/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(private modalService: ModalService) {}
  // constructor(public dialog: MatDialog ) { }
  modalStatus: Modal = new Modal();

  loginFormValue: boolean = this.modalService.constStatus();

  ngOnInit() {

  }
  // is aggre doCheck for reload var loginFomrValue and show or hide the dialog(or modal).
  ngDoCheck() {
    if(this.modalService.constStatus() === false){
     // console.log('is false');
      this.loginFormValue = false;
    }else{
     // console.log('is true');
      this.loginFormValue = true;
    }
  }

  openLoginForm() {
    //   this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
    // console.log(this.dialog);

    this.modalService.reverseStatus(this.loginFormValue);
    this.loginFormValue = this.modalService.constStatus();

  }
}

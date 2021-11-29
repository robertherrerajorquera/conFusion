import { Component, OnInit } from '@angular/core';
//import { MatDialogRef } from '@angular/material';
import { ModalService } from '../services/modal.service';
import { Modal } from '../shared/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  modalStatus: Modal = new Modal();
  user = { username: '', password: '', remember: false };
  /*
next line is commited, because dialog of material is crashed by the new version of typescript, materilas and more.
*/

  // constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  constructor(private modalService: ModalService) {}
  ngOnInit() {
    console.log('el loginmodal status es: ' + this.modalService.constStatus());
  }

  onSubmit() {
    console.log('User: ', this.user);
    this.modalService.reverseStatus(this.modalService.constStatus());
    console.log(
      'status del modal luedgo del cancel: ' + this.modalService.constStatus()
    );
    //   this.dialogRef.close();
    // this.loginFormValue = false;
    //  console.log( this.loginFormValue);
  }
}

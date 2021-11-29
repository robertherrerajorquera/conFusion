import { Injectable } from '@angular/core';
import { Modal } from '../shared/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  modalData: Modal = new Modal();
  modalStatus = this.modalData.statusButton;

  constStatus(): boolean {
    return this.modalStatus;
  }
  reverseStatus(data: boolean): boolean {
    return this.modalStatus = !data;
  }
}

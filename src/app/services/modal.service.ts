import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    //remove a model with associate id
    this.modals = this.modals.filter((element) => element.id !== id);
  }

  isModalOpen(id: string): boolean {
    //if can't find an element.id = with id you can't access the value visible using ?
    //force to return a boolean type not undefine 1. Boolean or 2. !! -- true remains true , false remain false
    //Boolean(return !!this.modals.find(element => element.id === id)?.visible)
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
    // this.visible = !this.visible;
  }
}

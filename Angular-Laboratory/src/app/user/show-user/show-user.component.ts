import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/user-api.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  //Se le agrega un signa de eclamacion para hacer una asignacion definitiva.
  userList$!: Observable<any[]>;
  documentTypesList$!: Observable<any[]>;
  documentTypesList: any = [];

  //Matriz que servira como lista a la hora de crear un mapa.
  documentTypesMap: Map<number, string> = new Map()



  constructor(private service: UserApiService) { }

  ngOnInit(): void {
    this.userList$ = this.service.getUserList();
    this.documentTypesList$ = this.service.getDocumentTypesList();
    this.refreshDocumentTypesMap();
  }

  //Variables (properties)
  modalTitle: string = '';
  activateAddEditUserComponent: boolean = false;
  user: any;


  modalAdd() {
    this.user = {

      id: 0,
      fisrName: null,
      lastName: null,
      document: null,
      documentTypeId: null


    }
    this.modalTitle = "Add User";
    this.activateAddEditUserComponent = true;
  }

  modalEdit(item: any) {
    this.user = item;
    this.modalTitle = "Edit User";
    this.activateAddEditUserComponent = true;

  }

  delete(item: any) {
    if (confirm(`Are you sure you want to delete user ${item.id}?`)) {
      this.service.deleteUser(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('delete-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block";
        }
        setTimeout(function() {
          if(showDeleteSuccess){
            showDeleteSuccess.style.display = "none"
          }
        }, 4000);
        this.userList$ = this.service.getUserList();
      })

    }
  }

  modalClose() {
    this.activateAddEditUserComponent = false;
    this.userList$ = this.service.getUserList();
  }

  refreshDocumentTypesMap() {
    this.service.getDocumentTypesList().subscribe(data => {
      this.documentTypesList = data;

      for (let i = 0; i < data.length; i++) {
        this.documentTypesMap.set(this.documentTypesList[i].id, this.documentTypesList[i].name);
      }
    })

  }



}
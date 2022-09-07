import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from 'src/app/user-api.service';
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  userList$!: Observable<any[]>;
  documentTypesList$!: Observable<any[]>;

  constructor(private service: UserApiService) { }

  @Input() user: any;
  id: number = 0;
  firsName: string = "";
  lastName: string = "";
  document: number = 0;
  documentTypeId!: number;

  ngOnInit(): void {
    this.id = this.user.id;
    this.firsName = this.user.firsName;
    this.lastName = this.user.lastName;
    this.document = this.user.document;
    this.documentTypeId = this.user.documentTypeId;
    this.userList$ = this.service.getUserList();
    this.documentTypesList$ = this.service.getDocumentTypesList();

  }

  addUser() {

    var user = {
    
      //id: this.id,
      firsName: this.firsName,
      lastName: this.lastName,
      document: this.document,
      documentTypeId: this.documentTypeId

    }
    this.service.addUser(user).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess){
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    } )
  }
  updateUser() {
    var user = {
    
      id: this.id,
      firsName: this.firsName,
      lastName: this.lastName,
      document: this.document,
      documentTypeId: this.documentTypeId

    }
    var id:number = this.id;
    this.service.updateUser(id,user).subscribe(res => {
      var closeModalBtn = document.getElementById('update-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    } )
  }
}

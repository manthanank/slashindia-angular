import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { UserModel } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue !: FormGroup;
  userModelObj : UserModel = new UserModel();
  userData !: any;
  showAdd !:boolean;
  showUpdate !:boolean;
  constructor(private formbuilder: FormBuilder,private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mobile : ['']
    })
    this.getAllUser();
  }
  clickAddUser(){
    this.formValue.reset();
    this.showAdd = true; // disable patch
    this.showUpdate = false;
  }
  postUserDetails(){
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.api.postUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("User Added")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    },
    err=>{
      alert("Something Went wrong")
    })
  }
  getAllUser(){
    this.api.getUser()
    .subscribe(res=>{
      this.userData = res;
    })
  }
  deleteUser(row : any){
    this.api.deleteUser(row.id)
    .subscribe(res=>{
      alert("User Deleted")
      this.getAllUser();
    })
  }
  onEdit(row : any)
  {
    this.showAdd = false;
    this.showUpdate = true;
    this.userModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
  }
  updateUserDetails(){
    this.userModelObj.firstName = this.formValue.value.firstName;
    this.userModelObj.lastName = this.formValue.value.lastName;
    this.userModelObj.email = this.formValue.value.email;
    this.userModelObj.mobile = this.formValue.value.mobile;
    this.api.updateUser(this.userModelObj,this.userModelObj.id)
    .subscribe(res=>{
      alert("Updated")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllUser();
    })
  }
}

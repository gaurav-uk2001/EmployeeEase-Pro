import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = ['Matric', 'Diploma', 'Intermediate', 'Graduate', 'Post Graduate']
  dataSource: any;

  constructor(public fb: FormBuilder, private service: ServiceService, private dialogref: MatDialogRef<AddEditEmpComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      dob: ['',Validators.required],
      gender: ['',Validators.required],
      education: ['',Validators.required],
      company: ['',Validators.required],
      exp: ['',Validators.required],
      package: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }
  onFormSubmit() {
    if (this.empForm.valid) {

      if (this.data) {
        this.service.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee Details Updated Successfully ☺"),
              this.dialogref.close(true)
          },
          error: (err: any) => {
            console.log(err);

          }
        })
      }
      else {

        // console.warn(this.empForm.value);
        this.service.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee Added Successfully ☺"),
              this.dialogref.close(true)
          },
          error: (err: any) => {
            console.log(err);

          }


        })
      }
    }
  }



}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitform = false;
  submitteddata:any = [];
  arrayData = [];
 constructor(private formBuilder: FormBuilder) { }
 UserRegForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
  ngOnInit() {
  }
  get Form() {
     return this.UserRegForm.controls;
     }
  onSubmit() {
    this.submitform = true;
    if (this.UserRegForm.invalid) {
        return;
    }
    this.submitteddata = this.UserRegForm.value;
   this.arrayData.push(this.submitteddata);
 }
 onclick()
 {
   this.UserRegForm.reset({
     'firstName':'',
     'lastName':'',
     'email':'',
     'password':''
   });
 }

}
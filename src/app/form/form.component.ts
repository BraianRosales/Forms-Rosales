import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  addStudent(e: any) {
    e.preventDefault()
    console.log('Estudiante agregado:', this.studentForm.value);
  }


  getErrorMessageName() {
    if (this.name!.hasError('required')) {
      return 'Necesitas ingresar un nombre';
    }

    return this.name!.hasError('minlength') ? 'Debe contener mas de 3 caracteres' : '';
  }

  getErrorMessageLastName() {
    if (this.lastName!.hasError('required')) {
      return 'Necesitas ingresar un apellido';
    }

    return this.lastName!.hasError('minlength') ? 'Debe contener mas de 3 caracteres' : '';
  }

  getErrorMessagePhone() {
    if (this.phone!.hasError('required')) {
      return 'Necesitas ingresar un telefono';
    }

    return this.phone!.hasError('minlength') ? 'Debe contener mas de 3 caracteres' : '';
  }

  getErrorMessageAddress() {
    if (this.address!.hasError('required')) {
      return 'Necesitas ingresar un domicilio';
    }

    return this.address!.hasError('minlength') ? 'Debe contener mas de 3 caracteres' : '';
  }

  get name() {
    return this.studentForm.get('name');
  }

  get lastName() {
    return this.studentForm.get('lastName');
  }

  get phone() {
    return this.studentForm.get('phone');
  }

  get address() {
    return this.studentForm.get('address');
  }
}

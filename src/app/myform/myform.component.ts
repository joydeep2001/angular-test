import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms'

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  contactForm:FormGroup;
  

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      family: this.formBuilder.array([])
    });
     
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if(this.contactForm.valid)
      console.log(this.contactForm.value);
    else  
      console.log("Invalid submission");
  }
  get person() : FormArray {
    return this.contactForm.get("family") as FormArray
  }
  get firstname() : FormControl {
    return this.contactForm.get("firstname") as FormControl;
  }
  newPerson(): FormGroup {
    return this.formBuilder.group({
      type: '',
      age: ''
    })
  }
  addPerson(): void {
    this.person.push(this.newPerson());
  }
  removePerson(i: number) {
    this.person.removeAt(i);
  }

}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  }
//   export class Person {
//     type: string;
//     age: number

//     constructor(type: string, age: number) {
//       this.type = type;
//       this.age = age;
//     }

// }
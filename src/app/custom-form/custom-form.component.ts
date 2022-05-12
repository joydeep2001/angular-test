import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, Form } from '@angular/forms'

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  customForm: FormGroup;

  itemList = [
    {id: 1, name: "bag", status: false, amount: 0 },
    {id: 2, name: "bottle", status: false, amount: 0 },
    {id: 3, name: "keyboard", status: false, amount: 0 },
    {id: 4, name: "mouse", status: false, amount: 0 },
  ]


  constructor(private formBuilder: FormBuilder) {
    this.customForm = this.formBuilder.group({
      name: ['', Validators.required],
      items: this.formBuilder.array([])
    })
   }
   get items() : FormArray {
     return this.customForm.get("items")  as FormArray;
   }
   
   addItems() {
     this.itemList.forEach(item => {
      this.items.push(this.newItem(item.name));
     });
   }
   changeStatus(index: number): void {
     this.itemList[index].status = !this.itemList[index].status;
     //console.log(this.itemList);
   }
   newItem(val: string): FormGroup {
    return this.formBuilder.group({
      status: false,
      amount: [val, Validators.required]
    })
   }
   updateAmount(event: any, index: number): void {
    this.itemList[index].amount = event.target.value;
   }
   onSubmit(): void {
     const output = {
       name: this.customForm.value.name,
       items: this.itemList
     }
     console.log(output);
   }
  ngOnInit(): void {
    
  }

}

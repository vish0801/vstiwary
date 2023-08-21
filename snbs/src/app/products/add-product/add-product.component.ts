import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

class Item {
  name!: string;
  val!: number;
}

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // message: string;
  addForm!: FormGroup;
  submitted = false;
  mandatoryFields = '*Mandatory fields';
  //  imageId: number;
  messageToSendP = 'PRODUCT';


  items : Item[] = [

    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },

  ];

  selectedValue: string = 'One';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
      // imageId: ['', Validators.required],
      // createdByUserId: ['', Validators.required],
    });
  }

  // receiveMessage($event) {
  //   this.imageId = $event;
  //   this.addForm.controls.imageId.setValue(this.imageId);
  // }

  onSubmit() {
    const currentUserId = 1;
    this.submitted = true;
    Object.keys(this.addForm.controls).forEach((key) => {
      // this.addForm.get(key).markAsDirty();
    });

    if (this.addForm.valid) {
      this.productService.create(this.addForm.value).subscribe((data) => {
        this.router.navigate(['product/list-product']);
      });
    }
  }

  get f() {
    return this.addForm.controls;
  }
}



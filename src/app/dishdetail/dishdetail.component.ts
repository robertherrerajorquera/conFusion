import { Component, OnInit, ViewChild } from '@angular/core';
import { Dish, ContactType } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { delay, switchMap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish: Dish = new Dish ;
  dishIds: string[];
  prev: string;
  next: string;
  slider1: number=0;

  dishForm: FormGroup;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective: any;


  formErrors = {
    firstname: '',
    rating: '',
    comment: '',
  };



  validationMessages = {
    firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'FirstName cannot be more than 25 characters long.',
    },
    rating: {
      minlength: 'Rating must be at least 1 ',
      maxlength: 'Last Name cannot be more 5',
    },
    comment: {
      minlength: 'comment must be at least 2 characters long.',
      maxlength: 'comment cannot be more than 100 characters long.',
    },

  };


  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  // console.log('la id obtenida es: '+id)

  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }



  createForm() {
    this.dishForm = this.fb.group({
      firstname: [
        new FormControl(''),
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      rating: [
        new FormControl(''),
        [
          Validators.required,
          Validators.minLength(0),
          Validators.maxLength(5),
        ],
      ],
      comment: [
        new FormControl(''),
        [
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      contacttype: 'None',

    });
    this.dishForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged(); // (re)set validation messages now
  };






  onValueChanged(data?: any) {
    if (!this.dishForm) {
      return;
    }
    const form = this.dishForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  };


  onSubmit() {
    this.dish = this.dishForm.value;
    console.log(this.dish);
    this.dishForm.reset({
      firstname: '',
      rating: '',
      commet: '',
      contacttype: 'None',
    });
    this.feedbackFormDirective.resetForm();
  }


}

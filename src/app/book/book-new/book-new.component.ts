import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit() {

    console.log(this.form.value);
  }

}

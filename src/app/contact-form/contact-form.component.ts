import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-contact-form',
standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/sendemail', this.contactForm.value)
      .subscribe(
        response => console.log('Email sent successfully'),
        error => console.error('Error sending email', error)
      );
  }

}
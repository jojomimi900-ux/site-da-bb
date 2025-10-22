import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    company: '',
    email: '',
    message: ''
  };

  formSubmitted = false;

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.formSubmitted = true;
    
    // Reset form after 5 seconds
    setTimeout(() => {
      this.formSubmitted = false;
      this.formData = {
        name: '',
        company: '',
        email: '',
        message: ''
      };
    }, 5000);
  }
}

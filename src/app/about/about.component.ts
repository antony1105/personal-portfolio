
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
title = 'your app';
  // Define properties and data for the about section
  name: string = 'Mr Ni';
  occupation: string = 'Web Developer';
  bio: string = 'I am a passionate web developer with expertise in Angular, HTML, CSS, and JavaScript. I love creating user-friendly and visually appealing websites.';
onButtonClick() {
  window.location.href = 'https://www.anthonyni.com/projects';
    // Add any logic you want to perform on button click here

}


}
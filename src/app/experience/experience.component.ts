import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
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

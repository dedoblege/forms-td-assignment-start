import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscription = ['Basic', 'Advanced', 'Pro']
  selectedSubscription = 'Advanced'

  @ViewChild('signUpForm', { static: false }) myForm: NgForm
  onSubmit() {
    console.log(this.myForm.value)
  }
}

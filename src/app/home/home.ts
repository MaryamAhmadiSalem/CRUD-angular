import { Component, EventEmitter, Output } from '@angular/core';
import { UserInformation } from '../user-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // addUser = output<UserInformation>();
  @Output() addUser = new EventEmitter<UserInformation>(); 

  user: UserInformation = {Fname: '', Lname: '', studentNumber: 0, course: ''}

  public send(){
    if(!this.user.Fname || !this.user.Lname || !this.user.studentNumber || !this.user.course){
      alert("لطفا همه فیلدها را تکمیل کنید")
      return
    }
    this.addUser.emit({...this.user})

    localStorage.setItem("user" , JSON.stringify(this.user));

    this.user = {Fname: '', Lname: '', studentNumber: 0, course: '' };
  }
}
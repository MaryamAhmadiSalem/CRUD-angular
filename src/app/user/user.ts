import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { UserInformation } from '../user-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyButton } from '../my-button/my-button';


@Component({
  selector: 'app-user',
  standalone: true, 
  imports: [CommonModule , FormsModule , MyButton],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  //to do : this can be with @Input() used
  @Input({ required: true }) users!: UserInformation[];
  @Output() update = new EventEmitter<UserInformation>();
  @Output() delete = new EventEmitter<number>();
  @Output() back = new EventEmitter<void>();

  updateUser(users :UserInformation){
    const Fname = prompt(users.Fname);
    const Lname = prompt(users.Lname);
    const studentNumber = Number(prompt(String(users.studentNumber)));
    const course = prompt(users.course);

    if(Fname && Lname && studentNumber && course){
      this.update.emit({ ...users, Fname, Lname, studentNumber, course });
    }
  }

  deleteUser(){
    this.delete.emit();
  }

  public backToHome(){
    this.back.emit();
  }
  
  deleteUsers(){
    alert("delete user called")
  }
}
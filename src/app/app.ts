import { Component } from '@angular/core';
import { UserService } from './user-service';
import { NgIf } from '@angular/common';
import { UserInformation } from './user-interface';
import { Home } from './home/home';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf , Home , User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users : UserInformation[] = [];
  showUsers : boolean = false;

  constructor(private userService: UserService){
    this.users = this.userService.getUser();
  }
  
  addUserMethod(users : UserInformation){
    this.userService.addUser(users);
    this.users = this.userService.getUser();
    this.showUsers = true ;
  }

  backHome(){
    this.showUsers = false;
  }
  
  updateUser(updateUser : UserInformation , data : any){
    this.userService.updateUser(updateUser , data);
    this.users = this.userService.getUser();
  }

  deleteUser(id : number){
    this.userService.deleteUser(id);
    this.users = this.userService.getUser();
  }
}
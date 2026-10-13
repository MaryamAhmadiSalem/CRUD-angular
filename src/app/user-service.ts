import { Injectable } from '@angular/core';
import { UserInformation } from './user-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'http://localhost:7242/api/Controller';
  constructor(private http: HttpClient){
    this.users=[];
    // console.log("user service is called");
  }
  users : UserInformation[] = [];

  public getUser():UserInformation[]{
    this.users;
    return this.http.get<UserInformation[]>(`${this.apiURL}`);
  }

  public addUser(user : UserInformation){
    user.id = this.users.length + 1 ;
    this.users.push({...user});
    return this.http.post(`${this.apiURL}`, user);
  }

  public updateUser(updateUser : UserInformation , data : any){
    const index = this.users.findIndex(u => u.id === updateUser.id)
    if(index !== -1){
      this.users[index] = ({...updateUser})
    }
    return this.http.put(`${this.apiURL}/${updateUser}`, data);
  }

  public deleteUser(deleteUser : number){
    const selectedUsers = this.users.filter(user => user.selected);
    if(selectedUsers.length == 0){ 
      alert("کاربری را انتخاب نکرده اید");
      return 
    }
    let drop = confirm("آیا از حذف کاربر مطمئن هستید؟")
    if(!drop){
      return
    }
    this.users = this.users.filter(u => u.selected == deleteUser)
    return this.http.delete(`${this.apiURL}/${deleteUser}`);
  }
}
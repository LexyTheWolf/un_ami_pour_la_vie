import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../users-export";

@Injectable({
  providedIn: "root"
})
export class UpdateUserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>("/api/users");
  }
}

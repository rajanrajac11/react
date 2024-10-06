import React from "react";
import { Client, Account, ID } from "appwrite";
import { conf } from "../conf";

class authServices {
  client = new Client();
  account;
  constructor() {
    this.client.setEndpoint(conf.projectUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async Signup({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.account.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite error :: Signup", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite error :: login ", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite error: logout", error);
    }
  }

  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite error :: getCurrentUser ", error);
    }
    return null;
  }
}

const authService = new authServices();
export default authService;

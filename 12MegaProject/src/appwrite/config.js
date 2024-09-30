import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, freaturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          freaturedImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service:: createPost", error);
    }
  }

  async updatePost(slug, { title, content, freaturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          freaturedImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: UpadtePost:: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service:: getPost", error);
      return false;
    }
  }

  async listPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabasetId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: listPosts error", error);
      return false;
    }
  }

  // file upload sercice

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uplodadFile error", error);
    }
  }

  async deleteFile(id) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, id);
      return true;
    } catch (error) {
      console.log("Appwrite service:: deleteFile error", error);
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("");
    }
  }
}

const service = new Service();

export default service;

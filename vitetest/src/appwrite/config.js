import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.projectUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ slug, title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Service error :: createPost : ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.databaseId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Service error :: updateDocument : ", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("Service error :: deletePost : ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.databaseId,
        conf.collectionId,
        queries
      );
    } catch (error) {
      console.log("Service error :: getPosts : ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.databaseId,
        conf.collectionId,
        slug
      );
    } catch (error) {
      console.log("Service error :: getDocument : ", error);
    }
  }

  //file upload services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("Service error :: uploadFile : ", error);
    }
  }

  async deleteFile(fileID) {
    try {
      return await this.bucket.deleteFile(conf.bucketId, fileID);
    } catch (error) {
      console.log("Service error :: deleteFile : ", error);
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.bucket.getFilePreview(conf.bucketId, fileID);
  }

  async downloadFile(fileID) {
    try {
      return this.bucket.getFileDownload(conf.bucketId, fileID);
    } catch (error) {
      console.log("Service error :: downloadFile : ", error);
    }
  }
}

const service = new Service();
export default service;

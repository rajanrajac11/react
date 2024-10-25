import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class DocumentService {
  client = new Client();
  databases;
  buckets;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteProjectUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.buckets = new Storage(this.client);
  }

  async createPost({
    slug,
    title,
    content,
    featuredImage,
    status,
    userId = ID.unique(),
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
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
      console.log("Document Service error :: createDocumnt error : ", error);
      return false;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Document Service error :: updataPost error : ", error);
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Document Service error :: getDocumnt error : ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Document Service error :: getPosts error : ", error);
      return false;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Document Service error :: deletePost error : ", error);
      return false;
    }
  }

  //file upload service
  async uploadFile(file) {
    try {
      return await this.buckets.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Document Service error :: uploadFile error : ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.buckets.getFilePreview(conf.appwriteBucketId, fileId);
  }

  async deleteFile(fileId) {
    try {
      await this.buckets.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Document service error :: deleteFile error : ", error);
    }
  }
}
const documentService = new DocumentService();

export default documentService;

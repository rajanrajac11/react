import React from "react";
import Container from "../Components/container/Container";
import PostForm from "../Components/post-form/PostForm";
function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;

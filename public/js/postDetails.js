console.log("hello");

const commentFormHandler = async (e) => {
  e.preventDefault();

  console.log("inside function");

  const commentContent = document.getElementById("commentContent").value.trim();
  const blogId = document.getElementById("commentPost").dataset.blogId;

  if (commentContent) {
    const response = await fetch("/api/comment/post/", {
      method: "POST",
      body: JSON.stringify({
        blogId,
        commentContent,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/postDetails/" + blogId);
    } else {
      alert("Comment failed to post");
    }
  }
};

document
  .getElementById("postComment")
  .addEventListener("click", commentFormHandler);

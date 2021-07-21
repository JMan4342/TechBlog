console.log("hello");
const commentFormHandler = async (e) => {

  e.preventDefault();

  console.log("inside function");

  const commentContent = document.getElementById("commentContent").value.trim();

  if (commentContent) {

    const response = await fetch("/api/comment/post/", {
      method: "POST",
      body: JSON.stringify({
        commentContent,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Comment failed to post");
    }
  }
}

document.getElementById("postComment").addEventListener("click", commentFormHandler);
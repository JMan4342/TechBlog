console.log("hello");

// Edit personal post
const editFormHandler = async (e) => {

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
      alert("Post failed to edit");
    }
  }
}

// Delete personal post
const deleteFormHandler = async (e) => {
    e.preventDefault();

}

document.getElementById("edit").addEventListener("click", editFormHandler);
document.getElementById("delete").addEventListener("click", deleteFormHandler);
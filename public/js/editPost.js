console.log("hello");

// Edit personal post
const editFormHandler = async (e) => {

  e.preventDefault();

  const title = document.getElementById("editTitle").value.trim();
  const content = document.getElementById("editBlog").value.trim();
  const id = document.getElementById("editBlogPost").dataset.blogId;
  console.log(id)


  if (title && content) {
    const response = await fetch("/api/blog/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Blog failed to update");
    }
  }
}

// Delete personal post
const deleteFormHandler = async (e) => {
    e.preventDefault();
    // const title = document.getElementById("editTitle").value.trim();
    // const content = document.getElementById("editBlog").value.trim();
    const id = document.getElementById("editBlogPost").dataset.blogId;
    console.log(id)
  
  
    // if (title && content) {
      const response = await fetch("/api/blog/" + id,
      {
      method: "DELETE",
      // body: JSON.stringify({
      //   title,
      //   content,
      // }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Blog failed to delete");
    }
  // }
}

document.getElementById("edit").addEventListener("click", editFormHandler);
document.getElementById("delete").addEventListener("click", deleteFormHandler);
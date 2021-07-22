console.log("hello");
const postFormHandler = async (e) => {

  e.preventDefault();

  console.log("inside function");

  const title = document.getElementById("titlePost").value.trim();
  const content = document.getElementById("blogContent").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog/post", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Blog failed to post");
    }
  }
};

document.getElementById("postBlog").addEventListener("click", postFormHandler);
console.log("hello");
const signupFormHandler = async (e) => {
  e.preventDefault();
  console.log("inside function");
  const title = document.getElementById("titlePost").value.trim();
  const content = document.getElementById("blogContent").value.trim();

  if (title && content) {
    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.getElementById("postBlog").addEventListener("click", signupFormHandler);
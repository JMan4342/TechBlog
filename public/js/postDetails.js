console.log("hello");
const signupFormHandler = async (e) => {
  e.preventDefault();
  console.log("inside function");
  const content = document.getElementById("commentContent").value.trim();

    const response = await fetch("/api/blog/", {
      method: "POST",
      body: JSON.stringify({
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


document.getElementById("postComment").addEventListener("click", signupFormHandler);
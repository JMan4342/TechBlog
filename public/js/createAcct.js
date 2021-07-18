console.log("hello");
const signupFormHandler = async (e) => {
    e.preventDefault();
  console.log('inside function');
    const username = document.getElementById("create-username").value.trim();
    const password = document.getElementById("create-password").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
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
  
  document.getElementById("signup").addEventListener("click", signupFormHandler);
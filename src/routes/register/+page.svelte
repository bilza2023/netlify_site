<script>
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const data = { name, email, password };
    fetch('https://skillzaa.cyclic.app/user/register', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // if (!response.ok) {
        //   throw new Error(response.statusText);
        // }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  input[type="text"], input[type="email"], input[type="password"] {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    width: 100%;
    color:black;
    max-width: 20rem;
  }
  button[type="submit"] {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
</style>

<form class="w-3/5 sm:w-4/5 mx-auto bg-gray-600" on:submit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" required>
  </label>
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  <label>
    Password:
    <input type="password" name="password" required>
  </label>
  <button type="submit">Submit</button>
</form>

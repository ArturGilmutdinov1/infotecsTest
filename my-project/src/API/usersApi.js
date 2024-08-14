

export const usersApi = {
   getUsers() {
      return fetch('https://dummyjson.com/users')
         .then((response) => {
            if (!response.ok) {
               throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
         })
         .catch((err) => console.error(`Fetch problem: ${err.message}`));
   },
   filterUsers(key, value) {
      return fetch(`https://dummyjson.com/users/filter?key=${key}&value=${value}`)
         .then(res => res.json())
   },
}
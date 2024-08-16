

export const usersApi = {
   getUsers() {
      return fetch('https://dummyjson.com/users')
         .then((response) => {
            if (!response.ok) {
               throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
         })
         .catch((err) => alert(`Fetch problem: ${err.message}`));
   },

   filterUsers(key, valueMessage) {
      return fetch(`https://dummyjson.com/users/filter?key=${key}&value=${valueMessage}`)
         .then((response) => {
            if (!response.ok) {
               throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
         })
         .catch((err) => alert(`Fetch problem: ${err.message}`));

   },
}
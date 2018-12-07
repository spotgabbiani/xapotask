export const loadFacebookRepositories = async () => {
  try {
    return fetch("https://api.github.com/users/facebook/repos")
        .then((response)=>{
          return response.json();
        });
  } catch (e) {
    console.log("e", e);
  }
};
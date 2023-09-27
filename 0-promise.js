// 0-promise.js

function getResponseFromAPI() {
  // Create and return a new Promise that resolves immediately
  return new Promise((resolve, reject) => {
    resolve('Promise is resolved');
  });
}

export default getResponseFromAPI;

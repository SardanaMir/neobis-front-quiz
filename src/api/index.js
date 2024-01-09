import axios from 'axios';

// const URL = 'https://64c688f80a25021fde91bd95.mockapi.io/articles';
const url = new URL('https://64c688f80a25021fde91bd95.mockapi.io/articles');

const API = axios.create({
  baseURL: url,
  headers: {
    "Content-Type" : 'application/json',
  }
});

export const articleGet = async () =>{
  const res = await API.get()
  return res.data
}

export const filter = async (data) =>{
  url.searchParams.append('categoryID', data);
  const res = await API.get()
  return res.data
}

// url.searchParams.append('categoryID', '2-3');

// fetch(url, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//     return res.json();
//   }
//   // handle error
// }).then(tasks => {
//   console.log(tasks)
//   // mockapi returns only tasks that match `hello` string
// }).catch(error => {
//   console.log(error)
//   // handle error
// })
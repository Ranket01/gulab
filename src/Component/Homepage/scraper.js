const cheerio = require('cheerio');
const axios = require('axios');
const admin = require('firebase-admin');
const serviceAccount = require('../Homepage/gulabvadi-4169a-firebase-adminsdk-sbxgh-c9f309a25b.json');

const url = 'http://localhost:3000/blogs/blogone';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://gulabvadi-4169a-default-rtdb.asia-southeast1.firebasedatabase.app',
});

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const title = $('title').text();
    const content = $('article').text();

    console.log('Title:', title);
    console.log('Content:', content);

    // Store the extracted data in Firebase
    const database = admin.database();
    const ref = database.ref('pages');
    ref.push({
      url,
      title,
      content,
    }, (error) => {
      if (error) {
        console.log('Data could not be saved.', error);
      } else {
        console.log('Data saved successfully.');
      }
    });
  })
  .catch(error => {
    console.log('Error fetching page:', error);
  });

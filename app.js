const http = new easyHttp()

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
  if (err) {
    console.log(err)
  } else {
    console.log(posts)
  }
})

// Create a data
const data = {
  title: 'Custom Post',
  body: 'this is a custom Post',
}

// Create Post
http.post(
  'https://jsonplaceholder.typicode.com/posts',
  data,
  function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      console.log(posts)
    }
  }
)

// Edit a Post
http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  data,
  function (err, posts) {
    if (err) {
      console.log(err)
    } else {
      console.log(posts)
    }
  }
)

// Delete a Post
http.delete(
  'https://jsonplaceholder.typicode.com/posts/101',
  function (err, response) {
    if (err) {
      console.log(err)
    } else {
      console.log(response)
    }
  }
)

window.Seed = (function() {
  const Post = {
    topic: {
      title: 'topic description',
      body: 'Philadelphia police bodycam video shows officers trying to get Walter Wallace Jr. to drop knife before they shoot him',
      author: 'topic author',
      createdOn: 'topic date'
    },
    comments: [
      {
        description: 'Comment description',
        thread: [
          {
            description: 'Comment description'
          },
          {
            description: 'Comment description',
          }
        ]
      },
      {
        description: 'Comment description',
        thread: []
      },
      {
        description: 'Comment description',
        thread: []
      },
    ]
  }

  return { Post }
}())
// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    first_name: "User 1",
    last_name: "User 2",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const posts = [
  {
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    content_type: "image",
    content_url:
      "https://images.theguidex.com/wp-content/uploads/2018/11/get-featured-image-wordpress-780x408.png?strip=all&lossy=1&ssl=1",
    text_content: "Check out this cool image!",
  },
  {
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    content_type: "video",
    content_url: "https://youtu.be/_rAu0WV4YBQ",
    text_content: "Watch this amazing video!",
  },
  {
    user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
    content_type: "text",
    content_url: null,
    text_content: "Just some text post.",
  },
];

module.exports = {
  users,
  posts,
};

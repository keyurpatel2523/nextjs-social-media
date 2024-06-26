import Post from "./Post";

interface PostData {
  id: string;
  user_id: string;
  content_type?: string;
  content_url?: string;
  text_content: string;
  created_at: any;
}

interface PostListProps {
  posts: PostData[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          contentUrl={post.content_url}
          title={post.text_content}
          contentType={post.content_type}
          description={post.text_content}
          postTime={post.created_at}
        />
      ))}
    </div>
  );
};

export default PostList;

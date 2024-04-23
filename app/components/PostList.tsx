import Post from "./Post";

interface PostData {
  id: number;
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  description: string;
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
          imageUrl={post.imageUrl}
          videoUrl={post.videoUrl}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default PostList;

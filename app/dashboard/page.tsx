import SideNav from "@/app/ui/dashboard/sidenav";
import PostList from "../components/PostList";
import NewPost from "../components/middle/NewPost";
import { fetchAllPost } from "../lib/actions";

const Dashboard = async () => {
  const posts = await fetchAllPost();
  return (
    <div className="container mx-auto">
      <NewPost />
      <PostList posts={posts} />
    </div>
  );
};

export default Dashboard;

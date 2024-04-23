import SideNav from "@/app/ui/dashboard/sidenav";
import PostList from "../components/PostList";

const posts = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/600",
    title: "Beautiful Landscape",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    videoUrl:
      "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4",
    title: "Funny Video",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more posts as needed
];

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <PostList posts={posts} />
    </div>
  );
};

export default Dashboard;

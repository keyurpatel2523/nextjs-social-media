"use client";
import React, { useState } from "react";
import Image from "next/image";
//import { useSession } from "next-auth/react";
import { Input } from "../ui/input";
import { BookImage, Video } from "lucide-react";
import { Button } from "../ui/button";
import { lusitana } from "@/app/ui/fonts";
import { Card } from "../ui/card";
import { getCurrentUser } from "@/app/firebase/firebaseAuth";
import { addPost } from "@/app/lib/actions";

type Props = {};

const NewPost = (props: Props) => {
  const [postContent, setPostContent] = useState(""); // State to store the input value

  // Function to handle input change
  const handleInputChange = (event: any) => {
    setPostContent(event.target.value); // Update the state with the input value
  };

  return (
    <div className="py-5 rounded-md">
      <Card className="p-4 bg-white">
        <h1 className={`${lusitana.className} mb-5 text-xl`}>Add Post</h1>
        <div className="flex items-center space-x-5">
          <Image
            src={"/image4.jpg"}
            width={40}
            height={40}
            alt="Image"
            className="rounded-full h-[40px] object-cover object-top"
          />
          <Input
            className="w-full"
            type="text"
            placeholder="Write a Post ..."
            value={postContent} // Bind the input value to the state
            onChange={handleInputChange} // Call the handleInputChange function when the input changes
          />
        </div>
        <div className="flex items-center justify-between mt-4 px-5">
          <div className="flex items-center space-x-2 opacity-60 text-sm cursor-pointer p-1 rounded-md">
            <Video />
            <span>Video</span>
          </div>
          <div className="flex items-center space-x-2 opacity-60 text-sm cursor-pointer p-1 rounded-md">
            <BookImage />
            <span>Image</span>
          </div>
          <Button
            className="px-5"
            onClick={async () => {
              const currentUser = await getCurrentUser();
              if (postContent) {
                const postObj = {
                  user_id: currentUser?.uid,
                  content_type: "text",
                  content_url: "",
                  text_content: postContent,
                };
                addPost(postObj);
              }
            }}
          >
            Post
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NewPost;

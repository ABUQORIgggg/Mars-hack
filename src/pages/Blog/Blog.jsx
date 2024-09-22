import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState({}); // Initialized as an empty object

  const [friends, setFriends] = useState([
    { id: 1, name: "John Doe", avatar: "https://via.placeholder.com/50", description: "Online" },
    { id: 2, name: "Jane Smith", avatar: "https://via.placeholder.com/50", description: "Offline" },
    { id: 3, name: "Emily Davis", avatar: "https://via.placeholder.com/50", description: "Busy" }
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://mars-space-server.onrender.com/api/v1/posts/');
        setPosts(response.data); // Adjust this based on your response structure
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(`https://mars-space-server.onrender.com/api/v1/comments?postId=${postId}`);
      setComments(prevComments => ({
        ...prevComments,
        [postId]: response.data.data || [] // Ensure it defaults to an empty array
      }));
      console.log(response.data)
    } catch (error) {
      console.error(`Error fetching comments for post ${postId}:`, error);
    }
  };  

  useEffect(() => {
    posts.forEach(post => {
      fetchComments(post._id);
    });
  }, [posts]);

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post._id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (postId) => {
    if (!comment.trim()) return; // Make sure the comment is not empty
  
    try {
      // Prepare the comment data
      const commentData = {
        text: comment.trim(), // Comment text
        post: postId,         // Post ID (for which the comment is being made)
        student: "66efd3fab6aba902c2a0ac01",    // The ID of the student (user)
      };
  
      await axios.post('https://mars-space-server.onrender.com/api/v1/comments/create', commentData);
  
      // Fetch the updated comments after submission to refresh the UI
      fetchComments(postId);
      setComment(""); // Clear the input field after submitting
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };
  
  return (
    <div className="flex gap-[8%] px-4 py-6 w-full">
      <div className="max-w-[60%] w-full">
        <h2 className="text-2xl text-blue-800 font-semibold mb-4">Посты</h2>
        
        {posts.length > 0 ? posts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt={post.author}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">{post.text}</p>
            <img
              src={post.image}
              alt={post.text}
              className="w-full h-auto rounded-lg mt-4"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-6 select-none text-gray-500">
                <span 
                  className='flex items-center gap-1 cursor-pointer'
                  onClick={() => handleLike(post._id)}
                >
                  {post.liked ? <FcLike /> : <IoIosHeartEmpty />} {post.likes}
                </span>
                <span className='flex items-center gap-1'>
                  <FaRegCommentDots/> 
                  {/* Use optional chaining or check if comments[post._id] is defined */}
                  {comments[post._id]?.length || 0} Comments
                </span>
              </div>
            </div>

            <div className="mt-4">
              {/* Ensure comments[post._id] is an array before mapping */}
              {comments && comments[post._id] && Array.isArray(comments[post._id]) && comments[post._id].map((comment, index) => (
                <div key={index} className="flex items-start gap-4 mb-2">
                  <img
                    src="https://via.placeholder.com/30"
                    alt={comment.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-orange-600">{comment.author}</p>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                      <span className="text-xs text-orange-600">{comment.time}</span>
                      <BsThreeDots className="text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex gap-2 mt-3'>
              <input 
                placeholder='Оставьте комментарий' 
                className='py-3 max-w-[80%] px-2 w-full bg-base-200 rounded-lg' 
                type="text" 
                value={comment}
                onChange={handleInputChange}
              />
              <button 
                className='w-full max-w-[20%] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 font-semibold text-white rounded-lg disabled:bg-slate-300'
                onClick={() => handleCommentSubmit(post._id)}
                disabled={!comment.trim()}
              >
                Send
              </button>
            </div>
          </div>
        )) : (
          <p>Загрузка постов...</p>
        )}
      </div>

      <div className="w-full max-w-[40%]">
        <h2 className="text-2xl text-blue-800 font-semibold mb-4">Друзья</h2>
        
        {friends.map((friend) => (
          <div key={friend.id} className="bg-white w-full p-4 rounded-lg shadow mb-6 flex items-center">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{friend.name}</p>
              <p className="text-gray-500 text-sm">{friend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

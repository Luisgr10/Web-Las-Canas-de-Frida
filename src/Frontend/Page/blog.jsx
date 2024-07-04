import React, { useState, useEffect } from "react";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/posts');
        if (!response.ok) {
          throw new Error('Error al obtener los posts');
        }
        const data = await response.json();
        setPosts(data); // Asigna los posts obtenidos al estado local
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <div className="d-flex justify-content-center grid gap-3 my-5">
        {posts.map(post => (
          <div key={post.id} className="card" style={{ width: "18rem" }}>
            {post.blog_image && (
              <img src={post.blog_image} className="card-img-top" alt="Blog Image" />
            )}
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


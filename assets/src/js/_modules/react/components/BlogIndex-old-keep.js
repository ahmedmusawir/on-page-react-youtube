import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import WPAPI from 'wpapi';

function BlogIndex() {
  //   Create WPAPI instance and add endpoint to /wp-json
  // const wp = new WPAPI({
  //   endpoint: 'http://localhost:10004/wp-json',
  //   username: 'cgteam',
  //   password: '8gLw rmzE hQhZ av4L 1ljg x119',
  // });

  // const wp = new WPAPI({
  //   endpoint: 'https://digitalsupportstaff.com/wp-json',
  //   username: 'cgteam',
  //   password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  // });

  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       setIsPending(true);
  //       // Fetch posts
  //       const fetchedPosts = await wp.posts().get();

  //       // console.log(fetchedPosts);
  //       setPosts(fetchedPosts);
  //       setIsPending(false);
  //     } catch (e) {
  //       // print error
  //       console.log(e);
  //       return [];
  //     }
  //   }

  //   fetchPosts();
  // }, []);

  // const deletePost = async (id) => {
  //   setIsPending(true);

  //   await wp
  //     .posts()
  //     .id(id)
  //     .delete()
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(posts.filter((post) => post.id !== res.id));
  //       setIsPending(false);
  //     });
  // };

  return (
    <div>
      <section className="list-group">
        {isPending && (
          <div className="text-center">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <article key={post.id} className="list-group-item">
              <div className="mb-2 row">
                <div className="col-sm-10">
                  <Link to={`/post/${post.id}`}>
                    <li className="list-group-item">
                      {post.title.rendered}{' '}
                      <span className="badge badge-primary">
                        Post ID: {post.id}
                      </span>
                    </li>
                  </Link>
                </div>
                <div className="col-sm-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}

export default BlogIndex;

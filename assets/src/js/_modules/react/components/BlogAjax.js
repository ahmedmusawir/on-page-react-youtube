import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import parse from 'react-html-parser';
import $ from 'jquery';

function BlogAjax() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsPending(true);
      await $.ajax({
        url: selflistData.root_url + '/wp-json/wp/v2/posts',
        async: true,
        type: 'GET',
      })
        .done((res) => {
          console.log(res);
          console.log('Ajax with REST Success!');
          setPosts(res);
          setIsPending(false);
        })
        .fail((res) => {
          console.log('Ajax Failed');
          console.log(res);
        });
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <section className='list-group'>
        {isPending && (
          <div className='text-center'>
            <Loader type='ThreeDots' color='red' height={100} width={100} />
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <article key={post.id} className='list-group-item'>
              <div className='mb-2 row'>
                <div className='col-sm-12'>
                  <Link to={`/post/${post.id}`}>
                    <li className='list-group-item'>
                      {parse(post.title.rendered)}{' '}
                      <span className='badge badge-primary'>
                        Post ID: {post.id}
                      </span>
                    </li>
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}

export default BlogAjax;

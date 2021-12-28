import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import Loader from 'react-loader-spinner';
import parser from 'react-html-parser';

function DoWpapiOne() {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const wp = new WPAPI({
    endpoint: 'http://localhost:10004/wp-json',
    username: 'cgteam',
    password: '8gLw rmzE hQhZ av4L 1ljg x119',
  });
  // SETTING CPT ROUTE
  wp.flag = wp.registerRoute('wp/v2', '/flag');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsPending(true);
        // Fetch Search by Text
        const fetchedPosts = await wp.posts().search('moose');
        // const fetchedPosts = await wp.categories().search('app');
        // Fetch Posts by Status
        // const fetchedPosts = await wp
        //   .posts()
        //   .status(['trash', 'pending'])
        //   .get();
        // Fetch Users
        // const fetchedPosts = await wp.users().get();
        // Fetch posts
        // const fetchedPosts = await wp.posts().get();
        // Fetch Category
        // const fetchedPosts = await wp.categories().get();
        // Fetch Pages
        // const fetchedPosts = await wp.pages().get();
        // Fetch Custom Post Types
        // const fetchedPosts = await wp.flag().get();
        // Fetch Posts by Category ID
        // const fetchedPosts = await wp.categories().get();
        // Fetch Posts by Category Slugs
        // const fetchedPosts = await wp.categories().get();

        console.log(fetchedPosts);
        setPosts(fetchedPosts);
        setIsPending(false);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="list-group">
      <section className="list-group">
        {isPending && (
          <div className="text-center">
            <Loader type="Bars" color="red" height={100} width={100} />
          </div>
        )}

        {/* POSTS BY CATEGORY SLUG */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}

        {/* POSTS BY CATEGORY ID */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}

        {/* POSTS ORDERED BY TITLE */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}

        {/* SEARCH POSTS BY TEXT */}
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2 mr-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
            <div className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </div>
          </li>
        ))}

        {/* POSTS BY PUBLISH STATUS */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              STATUS: {post.status}
            </span>
          </li>
        ))} */}

        {/* SETTINGS ONLY */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}

        {/* USERS ONLY */}
        {/* {posts.map((user) => (
          <li key={user.id} className="list-group-item">
            {parser(user.name)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {user.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {user.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              ROLE:{' '}
              {user.roles.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}

        {/* CUSTOM POST TYPES ONLY */}
        {/* {posts.map((cpt) => (
          <li key={cpt.id} className="list-group-item">
            {parser(cpt.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cpt.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cpt.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              TYPE: {cpt.type}
            </span>
          </li>
        ))} */}

        {/* PAGES ONLY */}
        {/* {posts.map((page) => (
          <li key={page.id} className="list-group-item">
            {parser(page.title.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {page.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {page.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              TYPE: {page.type}
            </span>
          </li>
        ))} */}

        {/* CATEGORIES ONLY */}
        {/* {posts.map((cat) => (
          <li key={cat.id} className="list-group-item">
            {parser(cat.name)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {cat.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {cat.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              Taxonomy: {cat.taxonomy}
            </span>
          </li>
        ))} */}

        {/* POSTS ONLY */}
        {/* {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            {parser(post.content.rendered)}{' '}
            <span className="badge badge-warning pill p-2 mr-2">
              SLUG: {post.slug}
            </span>
            <span className="badge badge-success pill p-2">ID: {post.id}</span>
            <span className="badge badge-info pill p-2 ml-2">
              CatID:{' '}
              {post.categories.map((cat) => {
                return cat + ', ';
              })}
            </span>
          </li>
        ))} */}
      </section>
    </div>
  );
}

export default DoWpapiOne;

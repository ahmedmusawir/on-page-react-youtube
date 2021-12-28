import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import BlogAjax from '../components/BlogAjax';

function HomePage() {
  return (
    <Page wide={false} pageTitle='Home Page'>
      <div className='row justify-content-center'>
        <div className='col-sm-12'>
          <Content width='w-100 pt-5' cssClassNames=''>
            <h1>Blog Index</h1>
            <h4>Using jquery Ajax</h4>
          </Content>
          <Content width='w-100 pt-2' cssClassNames=''>
            <BlogAjax />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default HomePage;

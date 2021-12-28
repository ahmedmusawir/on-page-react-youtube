import React from 'react';
import Page from '../components/layouts/Page';
import Content from '../components/layouts/Content';
import BlogAjaxInsert from '../components/BlogAjaxInsert';

function AjaxInsertPage() {
  return (
    <Page wide={false} pageTitle='Home Page'>
      <div className='row justify-content-center'>
        <div className='col-sm-12'>
          <Content width='w-100' cssClassNames='bg-light mt-3 p-4'>
            <h1>JQuery Ajax Insert</h1>
            <h4>Using WP Ajax with React</h4>
          </Content>
          <Content width='w-100' cssClassNames='mt-3'>
            <BlogAjaxInsert />
          </Content>
        </div>
      </div>
    </Page>
  );
}

export default AjaxInsertPage;

import React from 'react';
import * as PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';

import {storybookConfig} from './storybookConfig';
import Page from 'wix-style-react/Page';
import Breadcrumbs from './Breadcrumbs';
import * as s from './PageExample.scss';

import {header, content} from './PageChildren';
import {TESTS_PREFIX} from '../storyCategories';

const PageContainer = props => {
  return (
    <div className={s.pageContainer}>
      {props.children}
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.any
};

storiesOf(`${TESTS_PREFIX}/${storybookConfig.category}`, module)
.add(storybookConfig.storyName, () => (
  <div>
    <h1>Page Tests</h1>
    <h2>1) With Background-Image, Children: Header + Content (Without Tail)</h2>
    <PageContainer>
      <Page
        dataHook="story-page-background-image-header-content"
        children={[header(Breadcrumbs), content(false)]}
        backgroundImageUrl="https://static.wixstatic.com/media/f0548921c53940ec803dfb1c203e96fe.jpg/v1/fill/w_400,h_100/f0548921c53940ec803dfb1c203e96fe.jpg"
        />
    </PageContainer>
    <h2>2) With Gradient, Children: Header + Content (Without Tail)</h2>
    <PageContainer>
      <Page
        dataHook="story-page-gradient-header-content"
        children={[header(Breadcrumbs), content(false)]}
        gradientClassName="background-gradient"
        />
    </PageContainer>
  </div>
));
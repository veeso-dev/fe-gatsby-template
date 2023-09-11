import * as React from 'react';
import { PageProps } from 'gatsby';

import Page from '../js/components/reusable/Page';
import PageWrapper from '../js/components/PageWrapper';

const NotFound: React.FC<PageProps> = ({ location }) => (
  <PageWrapper pathname={location.pathname}>
    <Page.BlankPage></Page.BlankPage>
  </PageWrapper>
);

export default NotFound;

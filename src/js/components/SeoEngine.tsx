import * as React from 'react';
import { Helmet } from 'react-helmet';

import { pageDescription, pageTitle, pageOgSiteName } from '../utils/seo';
import { getNavigatorLanguage } from '../utils/locale';

interface Props {
  path: string;
}

const SeoEngine = (props: Props) => {
  // states
  const [title, setTitle] = React.useState(pageTitle(props.path));
  const [description, setDescription] = React.useState(
    pageDescription(props.path),
  );
  const [ogSiteName, setOgSiteName] = React.useState(
    pageOgSiteName(props.path),
  );

  React.useEffect(() => {
    document.documentElement.lang = getNavigatorLanguage();

    setTitle(pageTitle(props.path));
    setDescription(pageDescription(props.path));
  }, [props.path]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default SeoEngine;

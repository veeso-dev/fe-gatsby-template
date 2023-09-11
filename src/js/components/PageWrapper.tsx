import * as React from 'react';
import { IntlProvider } from 'react-intl';

import TRANSLATIONS, { getNavigatorLanguage } from '../utils/locale';
import {
  hasCookiePreferences,
  isAnalyticsCookiesConsentGiven,
} from '../utils/cookies';
import { initGaConsent } from '../utils/ga';
import CookieBar from './CookieBar';
import SeoEngine from './SeoEngine';
import Footer from './Footer';

import '../../styles.css';

interface Props {
  pathname: string;
  children: JSX.Element | JSX.Element[] | string;
}

const PageWrapper = (props: Props) => {
  const language = getNavigatorLanguage();
  const [hasCookieBar, setHasCookieBar] = React.useState(
    !hasCookiePreferences(),
  );
  // init GA consent
  initGaConsent(false, isAnalyticsCookiesConsentGiven());

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.pathname]);

  const onCookieBarClose = () => {
    setHasCookieBar(false);
  };

  return (
    <IntlProvider locale={language} messages={TRANSLATIONS[language]}>
      <SeoEngine path={props.pathname} />
      <main>{props.children}</main>
      <Footer />
      {hasCookieBar && <CookieBar onClose={onCookieBarClose} />}
    </IntlProvider>
  );
};

export default PageWrapper;

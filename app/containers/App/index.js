/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FlexSection from 'components/FlexSection';
import NavBar from 'components/NavBar';

import HomePage from 'containers/HomePage/Loadable';
import FoodSiteDetailPage from 'containers/FoodSiteDetailPage';
import LocationTablePage from 'containers/LocationTablePage';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import FlexItem from '../../components/FlexItem';

export default function App() {
  return (
    <FlexSection>
      <FlexItem shrink>
        <NavBar />
      </FlexItem>
      <FlexItem grow>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/locations" component={LocationTablePage} />
          <Route
            exact
            path="/foodSite/:uniqId"
            component={FoodSiteDetailPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </FlexItem>
      <GlobalStyle />
    </FlexSection>
  );
}

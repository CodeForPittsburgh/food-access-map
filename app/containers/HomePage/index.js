/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Map from '../../components/Map';

export default function HomePage() {
  return (
    <div style={{ height: '100%' }}>
      <Map />
    </div>
  );
}

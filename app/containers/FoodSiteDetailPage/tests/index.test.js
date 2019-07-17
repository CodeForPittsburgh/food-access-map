import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import FoodSiteDetailPage from '../index';

const renderer = new ShallowRenderer();

const fakeId = {
  params: {
    uniqId: 123,
  },
};

describe('<FoodSiteDetailPage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<FoodSiteDetailPage match={fakeId} />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

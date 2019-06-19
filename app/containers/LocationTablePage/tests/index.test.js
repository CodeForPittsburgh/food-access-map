import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import LocationTablePage from '../index';

const renderer = new ShallowRenderer();

describe('<LocationTablePage />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<LocationTablePage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});

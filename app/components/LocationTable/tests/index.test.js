/**
 *
 * Tests for LocationTable
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import LocationTable from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

configure({ adapter: new Adapter() });
describe('<LocationTable />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <LocationTable />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  // TODO update this test for better mocking once api function is in place
  it('should load the data from the back end', () => {
    const wrapper = shallow(<LocationTable />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'setState');
    instance.loadLocationsFromServer();
    expect(spy).toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <LocationTable />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

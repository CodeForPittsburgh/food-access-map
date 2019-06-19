/**
 *
 * Tests for Map
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

import Map from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

configure({ adapter: new Adapter() });
describe('<Map />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Map />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call set state when there are changes', () => {
    const wrapper = shallow(<Map />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'setState');
    instance.handleSelection({ target: { value: 'Millvale' } });
    expect(spy).toHaveBeenCalledWith({
      viewport: {
        width: 400,
        height: 400,
        latitude: 40.4801,
        longitude: -79.9784,
        zoom: 12,
      },
      selectedTown: 'Millvale',
    });
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Map />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

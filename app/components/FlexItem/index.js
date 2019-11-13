/**
 *
 * FlexItem
 *
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexItem = styled.section`
  -webkit-flex: ${props => (props.grow ? 1 : 0)}
    ${props => (props.shrink ? 1 : 0)} auto;
  -ms-flex: ${props => (props.grow ? 1 : 0)} ${props => (props.shrink ? 1 : 0)}
    auto;
  flex: ${props => (props.grow ? 1 : 0)} ${props => (props.shrink ? 1 : 0)} auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
`;

FlexItem.propTypes = {
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
};

export default FlexItem;

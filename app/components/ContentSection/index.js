import styled from 'styled-components';

const ContentSection = styled.section`
  -webkit-flex: ${props => (props.grow ? 1 : 0)}
    ${props => (props.shrink ? 1 : 0)} auto;
  -ms-flex: ${props => (props.grow ? 1 : 0)} ${props => (props.shrink ? 1 : 0)}
    auto;
  flex: ${props => (props.grow ? 1 : 0)} ${props => (props.shrink ? 1 : 0)} auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
`;

export default ContentSection;

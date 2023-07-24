import { Component } from 'react';
import {
  SectionContainer,
  SectionTitle,
} from './StyledComponents/Section.styled';
class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContainer>
    );
  }
}
export default Section;

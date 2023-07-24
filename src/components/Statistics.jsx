import { Component } from 'react';
import { StatisticsList } from './StyledComponents/Statistics.styled';
class Statistics extends Component {
  render() {
    return (
      <StatisticsList>
        {Object.keys(this.props).map(option => (
          <li key={option}>
            <p>
              {option}: {this.props[option]}
            </p>
          </li>
        ))}
      </StatisticsList>
    );
  }
}

export default Statistics;

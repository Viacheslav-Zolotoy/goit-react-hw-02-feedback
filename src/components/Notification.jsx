import { Component } from 'react';
import { NotificationText } from './StyledComponents/Notification.styled';
class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotificationText>{message}</NotificationText>;
  }
}
export default Notification;

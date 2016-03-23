import React, { Component, PropTypes } from 'react';
import { container } from 'adrenaline';
import ListItem from './ListItem';

class UserItem extends Component {
  static propTypes = {
    viewer: PropTypes.object,
  }

  render() {
    return <ListItem user={this.props.viewer} {...this.props} />;
  }
}

export default container({
  variables: (props) => {
    return {
      user: props.viewer,
    }
  },
  query: `{
    viewer {
      id,
      ${ListItem.getFragment('viewer')}
    }
  }`,
})(UserItem);

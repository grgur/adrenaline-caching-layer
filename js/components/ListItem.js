import React, { Component, PropTypes } from 'react';
import { presenter } from 'adrenaline';

class List extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  static defaultProps = {
    user: {
      widgets: {
        edges: []
      }
    }
  };

  // props item id
  render() {
    const { user, isFetching } = this.props;
    return (
      <div>
        <h1>Widget list</h1>
        <ul>
          {
            isFetching ? <div>Loading...</div> : null
          }
          {user.widgets.edges.map(edge =>
            <li key={edge.node.id}>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

const ListComponent = presenter({
  fragments: {
    viewer: `
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
})(List);

export default ListComponent;

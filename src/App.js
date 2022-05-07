import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { fetchUsers } from './Actions/Actions';
function App({ users, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users
        ? users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })
        : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
// Redux Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

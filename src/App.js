import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { fetchUsers } from './Actions/Actions';
function App({ isLoading, users, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {isLoading
        ? '...Loading'
        : users
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
    isLoading: state.isLoading,
  };
};
// Redux Map Dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

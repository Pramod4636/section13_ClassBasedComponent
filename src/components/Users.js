import { useState } from 'react';
import User from './User';
import { Component } from 'react';
import classes from './Users.module.css';



class Users extends Component {
  constructor(){
    super();
    this.state = {showUsers : true , moreState : 'Test'} 
 
  } 

    usersList() { 
     return (
    <ul>
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  )}

  toggleUsersHandler()
  {
      this.setState( (curState) => { return {showUsers : !curState.showUsers}});
    
  }
  render(){
     return (
    <div className={classes.users}>
      <button onClick={this.toggleUsersHandler.bind(this)}>
        {this.state.showUsers ? 'Hide' : 'Show'} Users
      </button>
      {this.state.showUsers && this.usersList.bind(this)}
    </div>
  );
  }

}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

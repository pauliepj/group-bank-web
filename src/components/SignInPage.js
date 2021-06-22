import React from 'react';

import SignIn from './SignIn';

function SignInPage (props){
   
   
    return(

        <div>
            <br/><br/>
            <SignIn setUsers={props.setUsers} users={props.users} setCurrentUser={props.setCurrentUser}/>
            <br/><br/>
        </div>
    );
}
export default SignInPage;

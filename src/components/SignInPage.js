import React from 'react';

import SignIn from './SignIn';

function SignInPage (props){
   
   
    return(

        <div>
            <SignIn setUsers={props.setUsers} users={props.users} setCurrentUser={props.setCurrentUser}/>
        </div>
    );
}
export default SignInPage;

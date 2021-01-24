import React from 'react'


const Profile =(props) =>{
    {props.handleName(props.name)}
    return(
        <>
        <div class="fullName">
            <p>{props.name}</p>
        </div>
        <div class="bio">
            <p>{props.bio}</p>
        </div>
        <div class="profession">
            <p>{props.profession}</p>
        </div>
        
        </>
    )
}


Profile.defaultProps={
    name:'loading'
}

Profile.propTypes ={
    name : propTypes.string
}

export default Profile
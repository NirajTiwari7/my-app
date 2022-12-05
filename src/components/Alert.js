import React from "react";
import PropTypes from 'prop-types'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        // bahut log [props.alert &&] (community prefer karta hai)use karta hai kyu ki agar props.alert null nahi hai toh do this matlab baki code ko run kardo agar props.alert alert null hai toh baki sara code ko run mat karo
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong> {capitalize(props.alert.type)} </strong>: {props.alert.msg}
            
        </div>
    );
}

export default Alert;

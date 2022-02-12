import React from 'react';

const Button = (props)=>{
    console.log(props);
    return (
        <button type={props.type}
                        className={props.className}>
                       {props.text}
                    </button>
    )

}

export default Button;
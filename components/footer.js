import React from 'react'

export default function Footer(props){
    let count = 0;
    if (props.stands.length !== 0){
        count = props.stands.length;
    };
    return (
        <footer className="bg-green-500 h-15 text-left p-5">{ count } Locations World Wide</footer>
    )
};
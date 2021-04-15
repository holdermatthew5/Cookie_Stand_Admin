import React from 'react'

function Footer(props){
    let count = 0
    if (props.reports.length !== 0){
        count = props.reports.length;
    };
    return (
        <footer className="bg-green-500 h-15 text-left p-5">{ count } Locations World Wide</footer>
    )
};
export default Footer;
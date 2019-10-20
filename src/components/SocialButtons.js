import React from "react";

const handleBtnClick = (action) => {
    let type = 'website', 
        base = '',
        link = '';
    switch (action) {
        case 'github':
            base = "https://github.com";
            link = `${base}/minayousseif`;
            break;
        case 'email':
            type = action;
            base = "@gmail.com";
            link = `mina.yousseif${base}`;
            break;
        case 'linkedin':
            base = "https://www.linkedin.com/in"
            link = `${base}/myousseif`;
            break;
        case 'aws':
            const d  = "2017-12-01";
            const ci = "AWS00354123"; 
            const qString  = `badge.aspx?i=2&t=c&d=${d}&ci=${ci}`;
            base   = "https://www.certmetrics.com/amazon/public/"
            link = `${base}${qString}`;
            break;
        default:
            break;
    }
    if (link) {
        if (type === 'website') {
            window.open(link, '_blank'); 
        } else if (type === 'email') {
            window.location = `mailto:${link}`;
        }
    }
    return false;
}

const SocialButtons = () => {
    return (
        <ul className="list-inline social-buttons">
            <li className="list-inline-item">
                <button onClick={() => handleBtnClick('github')}>
                    <i className="fab fa-github"></i>
                </button>
            </li>
            <li className="list-inline-item">
                <button onClick={() => handleBtnClick('email')}>
                    <i className="fa fa-envelope"></i>
                </button>
            </li>
            <li className="list-inline-item">
                <button onClick={() => handleBtnClick('linkedin')}>
                    <i className="fab fa-linkedin-in"></i>
                </button>
            </li>
            <li className="list-inline-item">
                <button onClick={() => handleBtnClick('aws')}>
                    <i className="fab fa-aws"></i>
                </button>
            </li>
        </ul>
    );
};

export default SocialButtons;

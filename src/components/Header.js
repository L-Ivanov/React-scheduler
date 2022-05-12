import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from "react-router-dom";
//title and onAdd are props of Header
const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    // const onClick = ()=>{
    //     console.log('Click')
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && (<Button color={showAdd? 'red':'green'} text={showAdd? 'Close':'Add'}
                     onClick={onAdd}/>)}
        </header>
    )
}
Header.defaultProps = {
    title: "Scheduler",
}
Header.propTypes = {
    title: PropTypes.string.isRequired
    //31:00
}
//CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
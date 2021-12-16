import React, { Component, Fragment } from 'react'
import Nav from '../Nav/Nav'
import {userContext} from '../../context/userContext'


class Header extends Component {
    render() {
        return (
            <header>
                <Nav/>
                <userContext.Consumer>
                    {
                        value => <>
                            <h3>Bienvenido {value.user} </h3>
                            <button onClick={value.logout}>Logout</button>
                        </> 
                    // value => value.user.name ?                    
                    //     <Fragment>
                    //     <h3>Bienvenido {value.user.name} </h3>
                    //     </Fragment>
                    //     : ""
                    }
                </userContext.Consumer>              
            </header>
        )
    }
}

export default Header

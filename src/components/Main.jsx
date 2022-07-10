import React from 'react'
import {Link} from 'react-router-dom'
import Image from './ulya.jpg'

function Main() {

        const styles = {
                backgroundImage: `url(${Image})`,
                height: window.innerHeight - 100,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: `calc(100vw + 48px)`,
                margin: -24,
                padding: 24
        };
        return <div id="Buttons" className="center pages" style={styles} >
                 <Link className="btn waves-effect light-blue darken-3 buttons" to="/sights">&nbsp;&nbsp;&nbsp;&nbsp;Услуги косметологии&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                 <Link className="btn waves-effect light-blue darken-3 buttons" to="/history">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Цены&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </div>;
}

export {Main}

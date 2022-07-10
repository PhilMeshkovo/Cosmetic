import React from 'react'
import {Link} from 'react-router-dom'
import SpringImage from './beauty.jpeg'
import PondImage from './ulya.jpg'

function Sights() {

    const styles = {
        height: 800,
        margin: -24,
        padding: 24
    };

    return <div id='sight' className='body pages' style={styles}>
        <h3 align='center'><img className="materialboxed" src={SpringImage} alt="Мешковский родник" width="250"
                                height="200" align='left'/> УСЛУГИ КОСМЕТОЛОГИИ <img className="materialboxed" src={PondImage}
                                                                        alt="Pond" width="250" height="200"
                                                                        align='right'/></h3>
        <p align="center" className="flow-text"><strong>УСЛУГИ косметологии:<br/>
            1 Пилинг;<br/>
            2 Ультразвуковая чистка;<br/>
            3 Комбинированная чистка;<br/>
            4 Уходовые процедуры по проблеме кожи;<br/>
            5 Массаж по Асхабадзе;<br/>
            6 Дарсонвализация;<br/>
            7 Биоревитализация;<br/>
            8 Мезотерапия;<br/>
            9 Фракционная мезотерапия;<br/>
            10 Ботулинотерапия;<br/>
            11 Подбор домашнего ухода по типу кожи и проблеме кожи.<br/>
            Консультация бесплатная.<br/>
            <br/><br/><br/><br/><br/></strong></p>
        <Link className="btn waves-effect light-blue darken-3 buttons-main" to="/">На главную страницу</Link>
    </div>
}

export {Sights}

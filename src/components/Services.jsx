import React from 'react'
import {Link} from 'react-router-dom'

function Services() {

    const styles = {
        height: 800,
        margin: -24,
        padding: 24
    };

    return <div id='sight' className='body pages' style={styles}>
        <a className='red darken-2 phone white-text' href={`tel:  +7 968 538 87 52`}><i
            className="medium material-icons">phone</i>+7 968 538 87 52&nbsp;&nbsp;</a>
        <br/><br/><br/>
        <h3 align='center'>УСЛУГИ КОСМЕТОЛОГИИ</h3>
        <p align="center" className="flow-text"><strong>
            1. Пилинг<br/>
            2. Ультразвуковая чистка<br/>
            3. Комбинированная чистка<br/>
            4. Уходовые процедуры по проблеме кожи<br/>
            5. Массаж по Асхабадзе<br/>
            6. Дарсонвализация<br/>
            7. Биоревитализация<br/>
            8. Мезотерапия<br/>
            9. Фракционная мезотерапия<br/>
            10. Ботулинотерапия<br/>
            11. Подбор домашнего ухода по типу кожи и проблеме кожи<br/>
            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</strong></p>
        <Link className="btn waves-effect light-blue darken-1 buttons-main" to="/">На главную страницу</Link>
    </div>
}

export {Services}

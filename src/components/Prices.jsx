import React from 'react'
import {Link} from 'react-router-dom'

function Prices() {

    const styles = {
        height: 800,
        margin: -24,
        padding: 24
    };

    return <div className='body pages' style={styles}>
        <a className='red darken-2 phone white-text' href={`tel:  +7 968 538 87 52`}><i
            className="medium material-icons">phone</i>+7 968 538 87 52&nbsp;&nbsp;</a>
        <br/><br/><br/>
        <h3 align="center">ЦЕНЫ</h3>
        <p align="center" className="flow-text"><strong> Чистка Аттравматическая -2000р;<br/>
            Чистка Мануальная/Механическая -2500р<br/>
            Чистка спины -3000р<br/>
            Комбинированная чистка с УЗИ -3000<br/>
            Уход по типу кожи -2000р<br/>
            Экспресс Уход-800р<br/>
            Химический пилинг 25+/45+ -2000р.разовый, если курс -1800р<br/>
            Миндальный пилинг -2000р<br/>
            Курс -1800р<br/>
            Биоревитализация от 3000-5000т<br/>
            Мезотерапия от 3000-5000<br/>
            Фракционная мезотерапия от 2500-4000<br/>
            Лечение Акне и постакне<br/>
            Уходовые программы<br/>
            Лечение и профилактика выпадения волос от 2000<br/>
            Ботулинотерапия от 4000<br/>
            (180 р. За Ед.)<br/>
            Контурная пластика губ от 6000<br/>
            Массаж лица по Асхабадзе -1000<br/>
            Дарсонвализация от 500<br/>

            Наращивание ресниц:<br/>
            классическое -1500<br/>
            2D -1800<br/>
            3D -2000<br/>
            4D -2500<br/>
            Снятие чужой работы -300<br/>
            Антицеллюлитное обёртывание от 1500<br/><br/><br/></strong></p>

        <Link className="btn waves-effect light-blue darken-1 buttons-main" to="/">На главную страницу</Link>
    </div>
}

export {Prices}

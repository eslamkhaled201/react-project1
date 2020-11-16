import React from 'react';
import './cardlist-style.css';
import {Crad} from '../card/card-component';

export const CardList =(props) => {
    return (
    <div className="card-list">
        {props.monsters.map(monster => <Crad key={monster.id} monster={monster}/>)}
        </div>
    );
}
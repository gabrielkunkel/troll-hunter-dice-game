import React from 'react';

export const MonsterFrame = ({monster, game}) => {

    return (
        <div>
            <img src={monster.img} onClick={() => game.fight(monster.id)} alt={monster.name} />
            <i>{monster.name}</i>
        </div>
    )
}
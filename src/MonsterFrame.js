import React from 'react';

export const MonsterFrame = ({monster, fight}) => {

    return (
        <div>
            <img src={monster.img} onClick={() => fight(monster.id)} alt={monster.name} />
            <i>{monster.name}</i>
        </div>
    )
}
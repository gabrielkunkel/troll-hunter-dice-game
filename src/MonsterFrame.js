import React from 'react';

export const MonsterFrame = ({monster, fight}) => {

    return (
        <div>
            <img src={require(`/${monster.img}`)} className="img-fluid monster-img" onClick={() => fight(monster.id)} alt={monster.name} />
            <div className="caption center-block">{monster.name}</div>
        </div>
    )
}
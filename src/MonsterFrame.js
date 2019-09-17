import React from 'react';

export const MonsterFrame = ({monster, fight}) => {

    // <img src={require('/images/image-name.png')} />

    return (
        <div>
            <img src={require(`/${monster.img}`)} onClick={() => fight(monster.id)} alt={monster.name} />
            <i>{monster.name}</i>
        </div>
    )
}
import React from 'react';
import { MonsterFrame } from './MonsterFrame';
import { render } from '@testing-library/react';


test('fighting onClick', () => {

    // Arrange
    const myMonster = {
        id: 0,
        name: 'fakeMonsterName',
        img: 'monster.jpg',
    }
    const fight = jest.fn();

    const {getByAltText} = render(<MonsterFrame key={myMonster.id} monster={myMonster} fight={fight} />);
    const monsterImageNode = getByAltText(/fakeMonsterName/i);

    // Act
    monsterImageNode.click();

    // Assert
    expect(fight).toHaveBeenCalledTimes(1);
    expect(fight).toHaveBeenCalledWith(myMonster.id);

});
import React from 'react';
import { Icon, Button } from 'antd';
import './index.css';

export const GameHeader = () => {
    
    const createGame = () => {
        
    }

    return (
        <div className="gameHeaderWrapper">
            <span style={{fontSize: 24}}>Game List:</span>
            <Button type="primary" onClick={createGame}>Create New Game</Button>
        </div>
    );
}
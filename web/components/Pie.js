import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';

const data = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
];

export default function Pie() {
    return (
        <div>
            <V.VictoryPie
            //   colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={data}
                theme={V.VictoryTheme.material}
            />
        </div>
    )
}

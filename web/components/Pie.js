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
            <svg style={{visibility: 'hidden', position: 'absolute'}}>
                <defs>
                    <linearGradient id="gradient1"
                        x1="0%" y1="0%" x2="0%" y2="100%"
                    >
                        <stop offset="0%" stopColor="orange" />
                        <stop offset="100%" stopColor="red" />
                    </linearGradient>
                    <linearGradient id="gradient2"
                        x1="0%" y1="0%" x2="0%" y2="100%"
                    >
                        <stop offset="0%" stopColor="yellow" />
                        <stop offset="100%" stopColor="orange" />
                    </linearGradient>
                    <linearGradient id="gradient3"
                        x1="0%" y1="0%" x2="0%" y2="100%"
                    >
                        <stop offset="0%" stopColor="yellow" />
                        <stop offset="100%" stopColor="yellowGreen" />
                    </linearGradient>
                    <linearGradient id="gradient4"
                        x1="0%" y1="0%" x2="0%" y2="100%"
                    >
                        <stop offset="0%" stopColor="yellowGreen" />
                        <stop offset="100%" stopColor="green" />
                    </linearGradient>
                </defs>
            </svg>
            <V.VictoryPie
                //   colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
                data={data}
                // theme={V.VictoryTheme.material}
                animate={{ duration: 500 }}
                responsive={true}
                // labels={(datum) => {datum.y / 125}}
                colorScale={[
                    "url(#gradient1)",
                    "url(#gradient2)",
                    "url(#gradient3)",
                    "url(#gradient4)",
                ]}
            />
        </div>
    )
}

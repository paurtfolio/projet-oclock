/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel,
} from 'victory';

import sport from 'src/assets/images/trackers/icone-sport.svg';

const StatSport = () => (
  <li className="statistic statistic__sport">
    <img src={sport} alt="food" className="statistics__rounded-img" />
    <VictoryChart
      width={700}
      height={380}
      theme={VictoryTheme.material}
      maxDomain={{ y: 10 }}
      minDomain={{ y: 0 }}
      domainPadding={{ x: 18 }}
    >
      <VictoryLabel
        x={310}
        y={370}
        text="Jours"
        style={[
          { fill: '#3D5499', fontSize: 24 },
        ]}
      />
      <VictoryLabel
        x={12}
        y={140}
        text="Calories"
        angle={-90}
        textAnchor="end"
        style={[
          { fill: '#3D5499', fontSize: 24 },
        ]}
      />
      <VictoryAxis
        style={{
          axis: { stroke: '#3D5499' },
        }}
        tickFormat={(t) => `${Math.round(t)}`}
        tickLabelComponent={(
          <VictoryLabel
            style={
          { fill: '#3D5499' }
        }
          />
        )}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: '#3D5499' },
        }}
        tickLabelComponent={(
          <VictoryLabel
            style={
          { fill: '#3D5499' }
        }
          />
        )}
      />
      <VictoryLine
        interpolation="natural"
        labels={({ datum }) => datum.y}
        // labelComponent={<VictoryLabel renderInPortal dy={-20} />}
        style={{
          data: { stroke: '#E74350' },
          parent: { border: '1px solid #ccc' },
          labels: { fontSize: 12, fill: '#E74350' },
        }}
        data={[
          { x: 1, y: 9 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
          { x: 6, y: 9 },
          { x: 7, y: 7 },
        ]}

      />
    </VictoryChart>
  </li>
);

export default StatSport;

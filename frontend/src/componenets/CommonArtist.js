import React from 'react';
import { PieChart , Pie, ResponsiveContainer } from 'recharts';

const CommonArtist = (props) => {


    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const label = ({cx, cy, midAngle, innerRadius, outerRadius, value, index}) => {
      const RADIAN = Math.PI / 180;
      // eslint-disable-next-line
      const radius = 25 + innerRadius + (outerRadius - innerRadius);
      // eslint-disable-next-line
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      // eslint-disable-next-line
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill={getRandomColor()}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {props.artists[index].artist} ({value})
        </text>
      );
    }
    
    return(
        <ResponsiveContainer>
            <PieChart width = "500px" height = "500px">
            <Pie 
                data={props.artists} 
                dataKey="count" 
                nameKey="artist" 
                cx="50%" 
                cy="35%" 
                outerRadius={100}  
                fill="#8884d8"
                label={label}
            />
            </PieChart>
        </ResponsiveContainer>
    )

}
export default CommonArtist;
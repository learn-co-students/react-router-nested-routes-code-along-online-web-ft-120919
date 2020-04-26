import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';


export default class Home extends Component {

    handleDragStart = e => {
        console.log('start drag')
        e.target.setAttrs({
        //   shadowOffset: {
        //     x: 15,
        //     y: 15
        //   },
        //   scaleX: 1.1,
        //   scaleY: 1.1
        });
      };

    handleDragEnd = e => {
        console.log('end drag')
        console.log(e.target)
        if (e.target._lastPos.x === 410 && e.target._lastPos.y === 150) {
            console.log('you did it!')
        }
        // e.target.to({
        
        // });
      };
    
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Ionic" fontSize={15} />
          
          <Text x={370} y={20} text="Negative ion" fontSize={15} />
          <Text x={50} y={20} text="Positive ion" fontSize={15} />

          <Circle x={400} y={100} radius={50} stroke='black' strokeWidth='2' />
          <Circle  x={400} y={100} radius={10} fill="green"  />
          <Circle draggable x={350} y={90} radius={5} fill="black"  />
          <Circle draggable x={350} y={110} radius={5} fill="black"  />
          <Circle draggable x={450} y={90} radius={5} fill="black"  />
          <Circle draggable x={450} y={110} radius={5} fill="black"  />
          <Circle draggable x={410} y={50} radius={5} fill="black"  />
          <Circle draggable x={390} y={50} radius={5} fill="black"  />
          <Circle draggable x={390} y={150} radius={5} fill="black"  />
          <Circle  x={410} y={150} radius={5} fill='white' stroke='black' strokeWidth='1' 
          lineJoin='round' lineCap='round' tension='0.5' shadowBlur={10}
          listening={this.onDrop}/>

          <Circle  x={100} y={100} radius={20} stroke="black" />
          <Circle  x={100} y={100} radius={8} fill="blue" />


          <Circle draggable x={100} y={80} radius={5} fill="black" 
          onDragStart={this.handleDragStart}
          onDragEnd={this.handleDragEnd} />
          {/* <Line
            x={20}
            y={200}
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            stroke="black"
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
          /> */}
        </Layer>
      </Stage>
    );
  }
}


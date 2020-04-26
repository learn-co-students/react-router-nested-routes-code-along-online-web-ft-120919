import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Image, Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

const Atoms = () => {
    return (
        <Stage>

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
        lineJoin='round' lineCap='round' tension='0.5' shadowBlur={10}/>
        
        <Circle  x={100} y={100} radius={20} stroke="black" />
        <Circle  x={100} y={100} radius={8} fill="blue" />
        <Circle draggable x={100} y={80} radius={5} fill="black"  />
        </Stage>
        )
    } 

export default Atoms
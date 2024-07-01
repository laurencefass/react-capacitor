import React, { useRef, useState, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useGesture } from '@use-gesture/react';
import parkScene from '../../assets/park-scene.jpg'; // Adjust the import path as necessary
import './styles.scss';

export const BackgroundImageZoom: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useGesture(
        {
            onPinch: ({ offset: [d], memo = scale }) => {
                setScale(memo * (1 + d / 200)); // Adjust 200 to change sensitivity
                return memo;
            },
            onDrag: ({ offset: [x, y] }) => {
                setOffset({ x, y });
            }
        },
        {
            target: containerRef,
            eventOptions: { passive: false },
            pinch: { scaleBounds: { min: 0.5, max: 5 }, rubberband: true },
            drag: { bounds: { top: -100, bottom: 100, left: -100, right: 100 }, rubberband: true }
        }
    );

    return (
        <div
            ref={containerRef}
            className="zoom-container"
            style={{
                backgroundImage: `url(${parkScene})`,
                transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`
            }}
        />
    );
};

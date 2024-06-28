'use client'

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './styles.scss';
import 'leaflet/dist/leaflet.css';

const icon = L.icon({ iconUrl: "/images/leaflet/marker-icon.png" });

export function BasicMap() {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Basic Leaflet Map with Marker</IonTitle>
            </IonToolbar>
        </IonHeader>
        {/* <IonContent fullscreen> */}
        <h1>Leaflet map</h1>
        <MapContainer
            center={[51.505, -0.09]}
            zoom={15}
            dragging={true} // Ensure dragging is enabled
            touchZoom={true} // Ensure touch zoom is enabled
            doubleClickZoom={true} // Ensure double click zoom is enabled
            scrollWheelZoom={true} // Ensure scroll wheel zoom is enabled
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker icon={icon} position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        {/* </IonContent> */}
    </IonPage>
};
import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import './styles.scss';

interface HeroComponentProps {
    height?: string;
    children?: React.ReactNode;
}

export const Hero: React.FC<HeroComponentProps> = ({ height = "50vh", children }) => {
    return (
        <IonGrid className="ion-text-center">
            <IonRow>
                <IonCol size="12">
                    <div style={{ height: height }} className="hero">{children}</div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

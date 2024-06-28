import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Page.css';
import { useEffect } from 'react';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  useEffect(() => {
    console.log("Page.useEffect");
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>This page-name is dynamically generated</h1>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;

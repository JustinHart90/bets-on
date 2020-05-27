import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, homeSharp, homeOutline, playOutline, playSharp, timeOutline, timeSharp, refreshCircleOutline, refreshCircleSharp, listOutline, listSharp, listCircleOutline, listCircleSharp } from 'ionicons/icons';
import './css/Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Lobby',
    url: '/Lobby',
    iosIcon: listCircleOutline,
    mdIcon: listCircleSharp
  },
  {
    title: 'Live',
    url: '/Live',
    iosIcon: playOutline,
    mdIcon: playSharp
  },
  {
    title: 'Upcoming',
    url: '/Upcoming',
    iosIcon: timeOutline,
    mdIcon: timeSharp
  },
  {
    title: 'Recent',
    url: '/Recent',
    iosIcon: refreshCircleOutline,
    mdIcon: refreshCircleSharp
  }
];

const labels = ['Friends', 'Family', 'Work', 'NFL', 'NBA', 'NHL', 'MLB', 'NCAA', 'NCAAW'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

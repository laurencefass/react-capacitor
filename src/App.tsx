import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Menu from './components/Menu';
import Page from './pages/Page/index';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import "./global.scss";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* swiper styles */
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import { Camera } from './pages/Camera';
import { Profile } from './pages/Profile';
import { BasicMap } from './pages/Map';
import { Todo } from './pages/Todo';
import { NotFound } from './pages/NotFound';

import { persistor, store } from './store'
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import { Box } from './pages/cube3d';

setupIonicReact();

const App: React.FC = () => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/home" />
              </Route>
              <Route path="/folder/:name" exact={true}>
                <Page />
              </Route>
              <Route path="/home" exact={true}>
                <Home />
              </Route>
              <Route path="/basicmap" exact={true}>
                <BasicMap />
              </Route>
              <Route path="/camera" exact={true}>
                <Camera />
              </Route>
              <Route path="/profile" exact={true}>
                <Profile />
              </Route>
              <Route path="/todo" exact={true}>
                <Todo />
              </Route>
              <Route path="/cube3d" exact={true}>
                <Box />
              </Route>
              <Route component={NotFound} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </PersistGate>
  </Provider>
};

export default App;

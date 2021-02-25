import state from './Redux/Redux';
import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';



rerenderEntireTree(state);

reportWebVitals();

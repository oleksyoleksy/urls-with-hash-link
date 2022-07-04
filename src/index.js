import Scrollbar from 'smooth-scrollbar';
import { AnchorPlugin } from './anchor-plugin';

Scrollbar.use(AnchorPlugin);

Scrollbar.init(document.querySelector('#my-scrollbar'), {
  alwaysShowTracks: true
});

import '@scss/style.scss';
import { callAPI } from '@utils/utils';
import { createItemMethod } from '@utils/utils';
import { createItemLink } from '@utils/utils';
import { scrollObserver } from '@utils/utils';
import { copyToClipboard } from '@utils/utils';
import { scrollUp } from '@utils/utils';

// Fetch data
callAPI('https://methods-js-default-rtdb.europe-west1.firebasedatabase.app/string.json').then((data) => { renderItem(data); });

// Render sections, links. Add IntersectionObserver
const renderItem = (data) => {
  createItemLink(data);
  createItemMethod(data);
  scrollObserver();
};

// Copy code to clipboard
copyToClipboard();
// Scroll to up page
scrollUp();
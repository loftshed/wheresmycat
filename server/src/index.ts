import { Elysia } from 'elysia';
import { FINDMY_FILES, SERVICE_ACCOUNT_KEY_PATH } from './constants/constants';
import { updateLog } from './utils/logger';
import chokidar from 'chokidar';
import { format } from 'date-fns';
import admin from 'firebase-admin';

const [itemsPath /*, devicesPath */] = FINDMY_FILES;
const watcher = chokidar.watch(itemsPath, { persistent: true });

const firebase = admin.initializeApp({
  credential: admin.credential.cert(require(SERVICE_ACCOUNT_KEY_PATH)),
});

watcher.on('change', () => {
  const timeStamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log(`[${timeStamp}]: Checked for new data`);
  updateLog().catch((error) => console.error('Error updating log:', error));
  try {
    firebase.messaging().send({} as admin.messaging.Message);
  } catch (error) {
    console.error('Error sending message:', error);
  }
});

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);

console.log(`wheresmycat 🐈‍⬛ is running at ${app.server?.hostname}:${app.server?.port}`);
// console.log(firebase);

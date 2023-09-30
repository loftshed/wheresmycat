import { Elysia } from 'elysia';
import { FINDMY_FILES } from './constants/constants';
import { updateLog } from './utils/logger';
import chokidar from 'chokidar';
import { format } from 'date-fns';

const [itemsPath /*, devicesPath */] = FINDMY_FILES;
const watcher = chokidar.watch(itemsPath, { persistent: true });

watcher.on('change', () => {
  const timeStamp = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log(`[${timeStamp}]: Checked for new data`);
  updateLog().catch((error) => console.error('Error updating log:', error));
});

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

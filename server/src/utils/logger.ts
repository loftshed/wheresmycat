import type { ItemInfoArray, DeviceInfoArray, ItemInfo, DeviceInfo } from '../types/types';
import { FINDMY_FILES } from '../constants/constants';
import { LogEntry } from '../types/types';
import format from 'date-fns/format';

export async function updateLog(): Promise<void> {
  try {
    const [itemsPath /*, devicesPath */] = FINDMY_FILES;
    const items: ItemInfoArray = await Bun.file(itemsPath).json();
    const [newEntry] = items.map(createEntry);

    const filename = createFilename(newEntry);
    const logFile = Bun.file(filename);
    let log: LogEntry[];

    if (await logFile.exists()) {
      log = await logFile.json();
      const entryExists = log.find((entry) => entry.timestamp === newEntry.timestamp);
      if (entryExists) {
        return;
      }
      console.log(newEntry);
      log.push(newEntry);
    } else {
      log = [newEntry];
    }

    await Bun.write(filename, JSON.stringify(log));
  } catch (error) {
    console.error('Error getting latest log:', error);
    throw error;
  }
}

function createEntry(item: ItemInfo): LogEntry {
  const { address, name, role, location } = item;
  const { latitude, longitude, timeStamp } = location;
  const date = new Date(timeStamp);
  return {
    address: address,
    name,
    emoji: role.emoji,
    latitude,
    longitude,
    date: format(date, 'yyyy-MM-dd'),
    time: format(date, 'HH:mm:ss'),
    timestamp: timeStamp,
  };
}

function createFilename(entry: LogEntry): string {
  const cwd = process.cwd();
  const sanitizedEntryName = entry.name.replace(/\s/g, '_').replace(/[^a-z0-9_]/gi, '');
  return `${cwd}/log/${entry.date}-${sanitizedEntryName}.json`;
}

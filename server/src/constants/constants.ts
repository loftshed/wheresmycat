import os from 'os';

export const FINDMY_FILES = [
  `${os.homedir()}/Library/Caches/com.apple.findmy.fmipcore/Items.data`,
  `${os.homedir()}/Library/Caches/com.apple.findmy.fmipcore/Devices.data`,
];

export const SERVICE_ACCOUNT_KEY_PATH: string = '../config/serviceAccountKey.json';

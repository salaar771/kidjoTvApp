import { User } from './user';
import { kid } from './kid';
import { language } from './language';
export class Refresh {
    deviceId: string;
    Date: Date;
    videoUrl: string;
    videoImageUrl: string;
    folderImageUrl: string;
    User: User[];
    kids: kid[];
    lang: language[];

}
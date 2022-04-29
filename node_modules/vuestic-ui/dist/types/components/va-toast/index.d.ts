import { NotificationOptions } from './types';
import { App } from 'vue';
declare class Notification {
    app: App;
    constructor(app: App);
    init(options: NotificationOptions): string | null;
    close(id: string): void;
    closeAll(): void;
}
export default Notification;

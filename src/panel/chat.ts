import { EggInfo, EggMessage } from '../common/types';

/* eslint-disable @typescript-eslint/naming-convention */
const Pusher = window.Pusher;

Pusher.logToConsole = true;

let channel: any;

export function initPusher(accessToken: string, eggInfo: EggInfo) {
    const pusherInstance = new Pusher('67182cd9ab165065d788', {
        cluster: 'ap1',
        channelAuthorization: {
            endpoint: 'https://tamagitchi.vercel.app/api/pusher/auth',
            transport: 'ajax',
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
            params: {
                eggInfo: JSON.stringify(eggInfo),
            },
        },
    });

    channel = pusherInstance.subscribe('presence-ogp-room');

    channel.bind('pusher:subscription_error', (error: any) => {
        console.log(error);
    });
    return channel;
}

export function sendPushMessage(data: EggMessage) {
    channel?.trigger('client-new-message', data);
}

export function rageQuit() {
    channel?.disconnect();
}

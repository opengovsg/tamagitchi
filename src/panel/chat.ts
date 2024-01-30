/* eslint-disable @typescript-eslint/naming-convention */
const Pusher = window.Pusher;

Pusher.logToConsole = true;

let channel: any;

export function initPusher(accessToken: string) {
    console.log(accessToken);
    const pusherInstance = new Pusher('67182cd9ab165065d788', {
        cluster: 'ap1',
        channelAuthorization: {
            endpoint: 'https://tamagitchi.vercel.app/api/pusher/auth',
            transport: 'ajax',
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        },
    });

    channel = pusherInstance.subscribe('presence-ogp-room');
    channel.bind('pusher:subscription_error', (error: any) => {
        console.log(error);
    });

    channel.bind('client-new-message', function (data: any) {
        console.log('new message', data.message);
    });

    channel.bind('pusher:member_added', (member: any) => {
        // For example
        console.log(member);
    });
}

export function sendPushMessage(message: string) {
    channel.trigger('client-new-message', {
        message,
    });
}

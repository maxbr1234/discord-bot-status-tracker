(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const moment = require('moment');
    const {
        DB
    } = require("quickmongo");
    const {
        MessageEmbed,
        MessageButton,
        MessageActionRow,
        Intents,
        Permissions,
        MessageSelectMenu
    } = require('discord.js')
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        player: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });
    const {
        Player,
        QueueRepeatMode
    } = require("discord-player")
    s4d.player = new Player(s4d.client)
    await s4d.client.login(process.env.TOKEN).catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    s4d.client.on('ready', async () => {

        while (s4d.client && s4d.client.token) {
            await delay(50);
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'streaming') {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('889600319129010186').send({
                    embeds: [{
                        title: 'Report',
                        color: '#999999',
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot: Streaming',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841899186298911/icons_stream.png'
                        }
                    }],
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'offline') {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('889600319129010186').send({
                    embeds: [{
                        title: 'Report',
                        color: '#999999',
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot: Offline',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898582310912/icons_offline.png'
                        }
                    }],
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'online') {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('889600319129010186').send({
                    embeds: [{
                        title: 'Report',
                        color: '#999999',
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot: Online',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898305495120/icons_online.png'
                        }
                    }],
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'idle') {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('889600319129010186').send({
                    embeds: [{
                        title: 'Report',
                        color: '#999999',
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot: Idle',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841898888499260/icons_idle.png'
                        }
                    }],
                });
                await delay(Number(90) * 1000);
            }
            if (((((s4d.client.guilds.cache.get('839219672301436990')).members.cache.get('877977398262513726') || await (s4d.client.guilds.cache.get('839219672301436990')).members.fetch('877977398262513726'))).presence.status) == 'dnd') {
                await delay(Number(90) * 1000);
                s4d.client.channels.cache.get('889600319129010186').send({
                    embeds: [{
                        title: 'Report',
                        color: '#999999',
                        image: {
                            url: null
                        },
                        description: 'Status of the Discord Bot: Do Not Disturb',
                        footer: {
                            text: null
                        },
                        thumbnail: {
                            url: 'https://cdn.discordapp.com/attachments/848483779865739344/889841899354062878/icons_busy.png'
                        }
                    }],
                });
                await delay(Number(90) * 1000);
            }

            console.log('ran')
        }

    });

    return s4d;
})();
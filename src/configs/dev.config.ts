import { IConfig } from "../types/configtypes";

const devConfig: IConfig = {
    token: process.env.TOKEN!,

    // Use info (Wont show debug logs), or Debug (Shows EVERYTHING)
    logLevel: "debug",

    suggestionsChannelId: "967622032252633088",
    welcomeChannelId: "967622032252633088",
    announcementsChannelId: "967622032252633088",
    warnChannelId: "960568357692776582",
    announcementsRoleId: "960568356744884258",
    guildId: "369598637623345165",
    logChannelId: "967622032252633088",
    rolesChannelId: "967622032252633088",
    reactionMessages: [
        {
            title: "Languages",
            reactions: {
                JavaScript: {
                    emoji: "<:js:960813493135757352>",
                    name: "JavaScript",
                },
                TypeScript: {
                    emoji: "<:ts:960813517982822410>",
                    name: "TypeScript",
                },
                /*Python: {
                    emoji: "<:py:960813603492081694>",
                    name: "960816353110024232",
                },
                C: {
                    emoji: "<:clang:960813561284788244>",
                    name: "960816289671155732",
                },
                "C++": {
                    emoji: "<:cpp:960813535649210379>",
                    name: "960816260147478538",
                },
                "C#": {
                    emoji: "<:cs:960815222921244712>",
                    name: "960816310806265876",
                },
                Java: {
                    emoji: "<:java:960813579530043412>",
                    name: "960816335196160040",
                },
                Go: {
                    emoji: "<:go:960813668721889320>",
                    name: "960816400283361340",
                },
                Rust: {
                    emoji: "<:rust:960813646567583786>",
                    name: "960816373255258133",
                },
                PHP: {
                    emoji: "<:php:960813688502226974>",
                    name: "960816427756040212",
                },
                Lua: {
                    emoji: "<:lua:967665289078661130>",
                    name: "967665492607254548",
                },
                Ruby: {
                    emoji: "<:ruby:967665230211600424>",
                    name: "967665450198634546",
                },
                Kotlin: {
                    emoji: "<:kotlin:967665403604107334>",
                    name: "967665472424259604",
                } */
            },
        },
        {
            title: "Pings",
            reactions: {
                Announcements: {
                    emoji: "📢",
                    name: "Announcement ping",
                },
                Events: {
                    emoji: "🗓️",
                    name: "Event ping",
                },
            },
        },
    ],
    badges: {
        DISCORD_EMPLOYEE: "<:discord_staff:585598614521511948>",
        PARTNERED_SERVER_OWNER: "<:discord_partner:585598614685089792>",
        HYPESQUAD_EVENTS: "<:discord_hypesquad:971698541313556491> ",
        BUGHUNTER_LEVEL_1: "<:discord_bughunterlv1:971698294743007253>",
        BUGHUNTER_LEVEL_2: "<:discord_bughunterlv2:971698415438274570> ",
        HOUSE_BRAVERY: "<:bravery:889966063100493914>",
        HOUSE_BRILLIANCE: "<:brilliance:889966063377317908>",
        HOUSE_BALANCE: "<:balance:889966062962094090>",
        EARLY_SUPPORTER: "<:discord_earlysupporter:971698655495082004>",
        EARLY_VERIFIED_BOT_DEVELOPER: "<:verified:710970919736311942>",
        DISCORD_CERTIFIED_MODERATOR: "<:certified_moderator:971699462072303656>"
    },
    memberRoleId: "960568356728090648",
};

export default devConfig;

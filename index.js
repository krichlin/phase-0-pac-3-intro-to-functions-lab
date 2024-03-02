function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase(string));
}

function logWhisper(string) {
    console.log(string.toLowerCase(string));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase(string)) {
        return ("I can't hear you!");
    }

    if (string === string.toUpperCase(string)) {
        return ("YES INDEED!");
    }

    if (string === "Let's have dinner together!") {
        return ("I would love to!");
    }
}
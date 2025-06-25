// ==VickiScript==
// @name Clip That
// @id clip.that
// @description Simulate pressing F8 when "clip that" (or similar) is heard
// @utterance Clip that
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

const listeningFor = [
    'crypt dot',
    'quit',
    'clip',
    'quit that',
    'clip that'
];

for (const phrase of listeningFor) {
    $vs.listen(phrase, handleCommand);
}

async function handleCommand(req, res) {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");

    // Respond to the user with nothing
    res.say(' ').send();
}

// ==VickiScript==
// @name Clip That
// @id clip.that
// @description Simulate pressing F8 when "clip that" (or similar) is heard
// @utterance Clip that
// @icon /res/icons/script_native.png
// @permission native
// ==/VickiScript==

$vs.listen('crypt dot', async (req, res) => {
    await handleCommand(req, res);
});

$vs.listen('quit', async (req, res) => {
    await handleCommand(req, res);
});

$vs.listen('clip', async (req, res) => {
    await handleCommand(req, res);
});

$vs.listen('quit that', async (req, res) => {
    await handleCommand(req, res);
});

$vs.listen('clip that', async (req, res) => {
    await handleCommand(req, res);
});

async function handleCommand(req, res) {
    $vs.native.assertAvailable();

    // Simulate pressing F8 key
    await $vs.native.keyboard.click("{F8}");

    // Respond to the user with nothing
    res.say(' ').send();
}

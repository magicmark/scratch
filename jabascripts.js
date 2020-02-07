/**
 * async delay ms
 * usage: await delay(4000)
 */
function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

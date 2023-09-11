#!npx tsx
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

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

main().catch((e) => {
    console.error(e);
    // or if you want colorized output, to keep chained causal stack traces, you need util.inspect
    console.error(chalk.red(util.inspect(e)));
	process.exit(1);
});

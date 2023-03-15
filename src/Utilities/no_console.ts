const viteEnv = import.meta.env.VITE_BUILD_MODE

export default function no_console() {
    ///////////Hide Console Logs///////////
    if (viteEnv === 'prod') {
        console.log = function () { };
        console.table = function () { };
    }
    ///////////Hide Console Logs///////////
}
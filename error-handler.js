process.on('uncaughtException', (err) => {
    console.log('\n========== BOT ERROR ==========');
    console.log('Error:', err && err.message ? err.message : err);
    if (err && err.stack) console.log(err.stack);
    console.log('===============================\n');
});

process.on('unhandledRejection', (reason) => {
    console.log('\n====== UNHANDLED REJECTION ======');
    if (reason && reason.message) console.log('Error:', reason.message);
    else console.log('Reason:', reason);
    if (reason && reason.stack) console.log(reason.stack);
    console.log('=================================\n');
})

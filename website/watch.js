var childProcess = require('child_process');
var processCounter = 0
function runScript(scriptPath, callback) {

    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;

    var process = childProcess.fork(scriptPath);

    // listen for errors as they may prevent the exit event from firing
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    // execute the callback once the process has finished running
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

var rebuild = function () {
    runScript('./src/generate.js', function (err) {
        if (err) console.error(err);
        console.log('./src/generate.js completed');
        processCounter = 0
    });
}

var watch = require('node-watch');

watch('./src', {recursive: true}, function (evt, name) {
    if (processCounter === 0) {
        processCounter = 1
        rebuild()
    }
});
rebuild()
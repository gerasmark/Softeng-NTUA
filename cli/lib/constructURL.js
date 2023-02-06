module.exports = function (scope, param1, param2, param3, param4, format) {
    let base = 'https://localhost:9103/intelliq_api';

    if (scope === '/resetq/') {
        base = base + scope + param1 + '?format=' + format;
    }

    else if (scope === '/questionnaire/') {
        base = base + scope + param1 + '?format=' + format;
    }

    else if (scope === '/question/') {
        base = base + scope + param1 + '/' + param2 + '?format=' + format;
    }

    else if (scope === '/doanswer/') {
        base = base + scope + param1 + '/' + param2 + '/' + param3 + '/' + param4 + '?format=' + format;
    }

    else if (scope === '/getsessionanswers/') {
        base = base + scope + param1 + '/' + param2 + '?format=' + format;
    }

    else if (scope === '/getquestionanswers/') {
        base = base + scope + param1 + '/' + param2 + '?format=' + format;
    }

    else if (scope === '/healthcheck/' || '/resetall/') {
        base = base + '/admin' + scope;
    }

    return base;
}
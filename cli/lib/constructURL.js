module.exports = function (scope, a, b, c, d) {
    let base = 'http://localhost:9103/intelliq_api';

    if (scope === '/resetq/') {
        base = base + scope + a;
    }

    else if (scope === '/questionnaire/') {
        base = base + scope + a + '?format=' + b;
    }

    else if (scope === '/questionnaire_upd/') {
        base = base + scope + a;
    }

    else if (scope === '/question/') {
        base = base + scope + a + '/' + b + '?format=' + c;
    }

    else if (scope === '/doanswer/') {
        base = base + scope + a + '/' + b + '/' + c + '/' + d;
    }

    else if (scope === '/getsessionanswers/') {
        base = base + scope + a + '/' + b + '?format=' + c;
    }

    else if (scope === '/getquestionanswers/') {
        base = base + scope + a + '/' + b + '?format=' + c;
    }

    else if (scope === '/healthcheck/' || '/resetall/') {
        base = base + '/admin' + scope;
    }

    return base;
}
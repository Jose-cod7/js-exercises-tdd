const fetcher = require("./fetcher");

const getRepos = function(repoName) {
    return fetcher(repoName).then(function(response) {
        return response.map(function(rep) {
            //console.log(rep.name);
            return rep.name;
        });
    });
};

module.exports = getRepos;

// line 3 (test.js file) exclude line 1 of js.file async-2. excluye el file fetcher.js. solo testea la función.
// line 7 ((test.js file) exclude the call of the fetcher in line 4 of the file async 2 and replace with the promese response give back the mockResolvedValue.
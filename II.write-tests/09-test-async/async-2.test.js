const getRepos = require("./async-2");
const fetcher = require("./fetcher");
jest.mock("./fetcher");

test("gets a list of repositories names (with mock)", function() {
    // arrange
    fetcher.mockResolvedValue([{ name: "js-exercises" }]);
    var url = "https://api.github.com/users/kabaros/repos";

    // act
    return getRepos(url).then(function(result) {
        // assert
        console.log(result);
        expect(result).toContain("js-exercises");
        expect(fetcher).toHaveBeenCalledTimes(1);
        expect(fetcher).toHaveBeenCalledWith(url);
    });
});

test("a more deterministic test", function() {});
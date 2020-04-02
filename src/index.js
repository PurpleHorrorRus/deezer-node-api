const got = require("got");
const querystring = require("querystring");

class Deezer {
    request = async params => {
        params.url = `https://api.deezer.com/${params.url}`;
        params.url = params.url.toLowerCase();
        return await got(params.url, { allowGetBody: true, json: true }).json();
    };

    _request = async (url, options) => {
        const query = querystring.encode(options);
        return await this.request({ url: `${url}?${query}` });
    };

    getTrack = async id => await this.request({ url: `track/${id}` });
    getAlbum = async id => await this.request({ url: `album/${id}` });
    getArtist = async id => await this.request({ url: `artist/${id}` });

    findTracks = async options => await this._request("search", options);
    findAlbums = async options => await this._request("search/albums", options);
    findArtist = async options => await this._request("search/artist", options);
};

module.exports = Deezer;
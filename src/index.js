const fetch = require("node-fetch");
const querystring = require("querystring");

class Deezer {
    request = async (url, _params) => {
        url = `https://api.deezer.com/${url}`;
        url = url.toLowerCase();

        if (_params !== null) 
            url += "?" + querystring.encode(_params);

        const res = await fetch(url, { method: "GET" });
        return res.json();
    };

    getTrack = async id => await this.request(`track/${id}`);
    getAlbum = async id => await this.request(`album/${id}`);
    getArtist = async id => await this.request(`artist/${id}`);

    findTracks = async options => await this.request("search", options);
    findAlbums = async options => await this.request("search/album", options);
    findArtists = async options => await this.request("search/artist", options);
};

module.exports = Deezer;
import axios from "axios";
import { API_DATA } from "@utils/Constants.utils";

//service api de genius , il y a plus d'information par rapport à lastfm les paroles par exemple
export default async function GetSongs(songName) {
    const searchUrl = API_DATA.CORS_ANYWHERE_URL + API_DATA.BASE_URL_LYRIC;
    try {
        const options = {
            apiKey: API_DATA.API_KEY_MUSIC,
            optimizeQuery: true
        }

        let { apiKey, authHeader = false } = options;
        const reqUrl = `${searchUrl}${encodeURIComponent(songName)}`;
        const headers = {
            Authorization: API_DATA.AUTHORIZATION_API + ' ' + apiKey
        };

        let { data } = await axios.get(
            authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
            authHeader && { headers }
        );
        if (data.response.hits.length === 0) return null;

        const results = data.response.hits.map((val) => {
            const { full_title, song_art_image_url, id, url, artist_names, release_date_for_display } = val.result;
            //objet à retourner afin d'utiliser toujours le meme nom des champs 
            return { id: id, artist: artist_names, title: full_title, image: song_art_image_url, lyric_url: url, release_date: release_date_for_display }
        });

        return results;
    } catch (e) {
        return [];
    }

}

//service sur lastFm pas de paroles dans la plataforme 
export async function GetSongLastFm(songName) {

    const url = API_DATA.BASE_URL_SONG + API_DATA.SONG_SEARCH + songName + API_DATA.API_KEY_SONG + API_DATA.FORMAT_REQUEST
    return await axios.get(url).then((values) => {
        if (values.data.results) {
            const results = values.data.results.trackmatches.track.map((val) => {
                let id = Math.random();
                const { artist, name } = val;
                return { id: id, artist, title: name };
            });
            return results
        }
    }).catch(() => {
        return [];
    })
}
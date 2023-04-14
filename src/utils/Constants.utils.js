//gestion de l'Api
export const API_DATA = {
    //on utilise process.env pour avoir les token key et urls read only
    BASE_URL_LYRIC: process.env.REACT_APP_GENIUS_URL,
    BASE_URL_SONG: process.env.REACT_APP_LASTFM_URL,
    SONG_SEARCH: "?method=track.search&track=",
    FORMAT_REQUEST: "&format=json",
    API_KEY_MUSIC: process.env.REACT_APP_TOKEN_API_GENIUS,
    API_KEY_SONG: "&api_key=" + process.env.REACT_APP_TOKEN_API_LASTFM_OPTION1,
    AUTHORIZATION_API: "Bearer",
    CORS_ANYWHERE_URL: process.env.REACT_APP_CORS_ANYWHERE_URL,
    LYRIC_SECTION_HTML: 'div[class="lyrics"]',
    LYRIC_SECTION_HTML_CONTAINER: 'div[class^="Lyrics__Container"]',
    API_KEY_GIF: process.env.REACT_APP_TOKEN_GIPHY
}

//gestion des messages
export const MSG_SEARCH_SONG = "Rechercher titre";
export const MSG_SONG_DETAIL = "Titre trouvé"
export const MSG_GIF_SEARCH = "Gifs trouvées pour "
export const MSG_FREQUENT_WORDS = "Les mots plus frequentes"
export const MSG_FREQUENT_WORDS_COUNT = " fois utilisé";
export const MSG_SEARCH_SONG_TEXT2 = "Saisir un texte pour rechercher la chanson"
export const MSG_LYRIC_NOT_AVAILABLE = "La Parole n'est pas disponible "
export const APP_NAME = "SongifyApp5"
export const APP_MENU_NAMES = ['Recherche de titres', 'Titres favoris'];
export const MSG_TITLE_TRACK_LABEL = "Parole"
//path des url's
export const URL_TRACK_DETAIL = "/track-detail";
export const URL_INITIAL_PAGE = "/"
//parameters
export const NUM_FREQUENT_WORDS = 10;
export const NUM_CHATACTERS_FREQUENT_WORDS = 5;
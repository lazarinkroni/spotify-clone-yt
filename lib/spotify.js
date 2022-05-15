import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'ugc-image-upload',
  'user-follow-modify',
  'playlist-modify-private',
  'playlist-modify-public',
  'user-library-modify',
  'playlist-read-collaborative',
  'user-read-currently-playing',
  'user-follow-read',
  'user-follow-read',
  'user-read-playback-state',
  'playlist-read-private',
  'user-read-recently-played',
  'user-top-read',
  'user-read-email',
  'user-library-read',
  'user-read-private',
  'app-remote-control',
  'streaming',
  'user-modify-playback-state',
].join(',')

const params = {
  scope: scopes,
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi

export { LOGIN_URL }

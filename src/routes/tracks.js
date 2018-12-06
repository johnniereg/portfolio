import React, { Component } from 'react';

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      albumCharts: []
    };
  }

  componentDidMount() {
    this.getRecentTracks();
    this.getWeeklyTopAlbums();
  }

  getRecentTracks() {
    let targetUrl =
      'https://morning-brushlands-94806.herokuapp.com/api/lastfm/recent-tracks';

    fetch(targetUrl)
      .then(function(response) {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ tracks: jsonData.recenttracks.track });
      });
  }

  getWeeklyTopAlbums() {
    let targetUrl =
      'https://morning-brushlands-94806.herokuapp.com/api/lastfm/weekly-album-chart';

    fetch(targetUrl)
      .then(function(response) {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ albumCharts: jsonData.weeklyalbumchart.album });
      });
  }

  render() {
    let tracks = this.state.tracks;
    let albumChart = this.state.albumCharts;

    let lastTwentyFiveTracks = tracks.filter((track, index) => {
      return index < 25;
    });

    let topTenAlbums = albumChart.filter((album, index) => {
      return index < 10;
    });

    return (
      <div className="Tracks">
        <header>
          <h1 className="nameplate">Listening Habits</h1>
        </header>

        <main className="listening-habits-container">
          <div className="tracks-container">
            <h2>Recently Played</h2>
            {lastTwentyFiveTracks.map(function(track, index) {
              return (
                <p key={index}>
                  "{track.name}" by {track.artist.name}
                </p>
              );
            })}
          </div>

          <div className="album-chart-container">
            <h2>Weekly Album Chart</h2>
            {topTenAlbums.map((album, index) => {
              return (
                <p key={index}>
                  "{album.name}" by {album.artist[Object.keys(album.artist)[0]]}
                </p>
              );
            })}
          </div>
        </main>

        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/user/johnniereg?si=fd1IAHgbT_GYayAfQ5a--w"
          >
            <p>Follow me on Spotify</p>
          </a>
        </footer>
      </div>
    );
  }
}

export default Tracks;

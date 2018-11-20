import React, { Component } from 'react';

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
  }

  componentDidMount() {
    fetch(
      'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=johnniereg&api_key=30ddf0e6d5fcc07ad9eb72f57214dbbd&format=json&extended=1&limit=200http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=johnniereg&api_key=30ddf0e6d5fcc07ad9eb72f57214dbbd&format=json&extended=1&limit=200&from=1514764800'
    )
      .then(function(response) {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ tracks: jsonData.recenttracks.track });
      });
  }

  render() {
    let tracks = this.state.tracks;
    console.log(tracks);

    return (
      <div className="About">
        <header className="Tracks-header">Tracks</header>
        <div className="tracks-container">
          {tracks.map(function(track, index) {
            return (
              <div key={index}>
                "{track.name}" by {track.artist.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tracks;
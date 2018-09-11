import React, { Component } from "react";

import Main from "./components/Main";
import Filter from "./components/Filter";
import Error from "./components/Error.js";

import "./App.css";
import { Button } from "reactstrap";
import dinosaur from "./dinosaur.png";
import mammoth from "./mammoth.png";
import track from "./track.png";
import moon from "./moon.png";
import sun from "./sun.png";

class App extends Component {
  state = {
    dark: false,
    type: "",
    markers: [],
    icons: {
      dinosaur: {
        url: { dinosaur }
      },
      mammoth: {
        url: { mammoth }
      },
      track: {
        url: { track }
      },
      moon: {
        url: { moon }
      },
      sun: {
        url: { sun }
      }
    },
    dinosaurFinds: [
      {
        title: "Cleveland-Lloyd Dinosaur Quarry",
        location: { lat: 39.323, lng: -110.6879 },
        description:
          "Where more than 12,000 individual bones and one dinosaur egg was discovered",
        type: "dinosaur"
      },
      {
        title: "Ghost Ranch Quarry",
        location: { lat: 36.3137, lng: -106.482 },
        description:
          "Thousands of Coelophysis follils were discovered by Edwin Colbert",
        type: "dinosaur"
      },
      {
        title: "La Brea Tar Pits",
        location: { lat: 34.0638, lng: -118.3554 },
        description: "Tar pits where Saber Tooth Tigers were discovered",
        type: "dinosaur"
      },
      {
        title: "The Academy of Natural Science",
        location: { lat: 39.9571, lng: -75.1712 },
        description:
          "Home to the first reasonably complete dinosaur the world would ever know, Hadrosaurus foulkii",
        type: "dinosaur"
      }
    ],
    mammothFinds: [
      {
        title: "Waco Mammoth National Monument",
        location: { lat: 31.6067, lng: -97.176 },
        description:
          "Second greatest concentration of mammoth remains in the world",
        type: "mammoth"
      },
      {
        title: "Mammoth Site at Hot Springs",
        location: { lat: 43.4248, lng: -103.4833 },
        description:
          "The site of the greatest concentration of mammoth remains in the world",
        type: "mammoth"
      },
      {
        title: "Bristle Mammoth",
        location: { lat: 42.278, lng: -83.7382 },
        description: "The Bristle mammoth skull completely intact with tusks",
        type: "mammoth"
      },
      {
        title: "Children's Discovery Museum of San Jose",
        location: { lat: 37.3268, lng: -121.8925 },
        description:
          "See bones from Lupe the female mammoth discovered near by",
        type: "mammoth"
      }
    ],
    trackFinds: [
      {
        title: "Dinosaur Valley State Park",
        location: { lat: 32.2534, lng: -97.8097 },
        description: "One of the most prolific dinosaur track sites ever found",
        type: "track"
      },
      {
        title: "Dinosaur Footprints Reserve",
        location: { lat: 42.2417, lng: -72.6234 },
        description: "A treasure trove of over 130 dinosaur tracks",
        type: "track"
      },
      {
        title: "Dinosaur Ridge",
        location: { lat: 39.6942, lng: -105.2 },
        description:
          "Mostly known for over 300 theropod tracks, Dinosaur Ridge is also home to fossilized bones that poke through the rock",
        type: "track"
      }
    ],
    discoveriesDisplayed: [],
    styles: [
      {
        featureType: "water",
        stylers: [{ color: "#4d71a3" }]
      }
    ],
    err: false
  };

  componentDidMount() {
    this.setState({
      discoveriesDisplayed: [
        ...this.state.dinosaurFinds,
        ...this.state.mammothFinds,
        ...this.state.trackFinds
      ]
    });
    this.setState({ type: "Prehistoric Finds" });
    this.renderMap();
  }

  render() {
    if (!this.state.err) {
      return (
        <div className="container-fluid">
          <Button id="appColor" onClick={this.changeColor}>
            {this.state.dark === false ? "Dark" : "Day"}
          </Button>
          <header className="App-header">
            <h1 className="App-title">Early USA</h1>
          </header>
          <Filter
            updateDiscoveriesDisplayed={this.updateDiscoveriesDisplayed}
            type={this.state.type}
          />
          <Main
            discoveriesDisplayed={this.state.discoveriesDisplayed}
            mode={this.state.dark}
            styles={this.state.styles}
          />
          <footer className="App-footer">
            <h1 className="App-title">Early USA</h1>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <Button id="appColor" onClick={this.changeColor}>
            {this.state.dark === false ? "Night" : "Day"}
          </Button>
          <header className="App-header">
            <h1 className="App-title">Early USA</h1>
          </header>
          <Filter
            updateDiscoveriesDisplayed={this.updateDiscoveriesDisplayed}
            type={this.state.type}
          />
          <Error />
          <footer className="App-footer">
            <h1 className="App-title">Early USA</h1>
          </footer>
        </div>
      );
    }
  }

  changeColor = () => {
    this.setState(
      prevState => ({
        dark: !prevState.dark
      }),
      () => {
        // Here I "cheated" - !this.state.dark = day - but the top style is the night style
        // Since this happens before state change, I set it up backwards...
        if (this.state.dark) {
          //Night style
          document.documentElement.style.setProperty("--appHeader", "#443355");
          document.documentElement.style.setProperty("--appButton", "#999999");
          document.documentElement.style.setProperty(
            "--mainBackground",
            "#333333"
          );
          document.documentElement.style.setProperty("--appBackground", "#000");
          document.documentElement.style.setProperty("--font", "#eeeedd");
          document.documentElement.style.setProperty(
            "--sectionBackground",
            "#333333"
          );
        } else {
          //Day style
          document.documentElement.style.setProperty("--appHeader", "#95cd85");
          document.documentElement.style.setProperty("--appButton", "#4ec5ff");
          document.documentElement.style.setProperty(
            "--mainBackground",
            "#cabc76"
          );
          document.documentElement.style.setProperty(
            "--appBackground",
            "#eeeedd"
          );
          document.documentElement.style.setProperty("--font", "#000");
          document.documentElement.style.setProperty(
            "--sectionBackground",
            "#fff"
          );
        }
        console.log(this.state.dark, this.state.styles);
        this.setStyle();
      }
    );
  };

  setStyle = () => {
    if (this.state.dark === true) {
      this.setState(
        {
          styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#242f3e" }]
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }]
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }]
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }]
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }]
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }]
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }]
            }
          ]
        },
        () => {
          this.initMap();
          console.log(this.state.styles, "init Map Here");
        }
      );
    } else {
      this.setState(
        {
          styles: [
            {
              featureType: "water",
              stylers: [{ color: "#4d71a3" }]
            }
          ]
        },
        () => {
          this.initMap();
          console.log(this.state.styles, "init Map Here");
        }
      );
    }
  };

  updateDiscoveriesDisplayed = type => {
    console.log(type);

    switch (type) {
      case "all":
        console.log(type);
        this.setState({ type: "Prehistoric Finds" });
        this.setState({
          discoveriesDisplayed: [
            ...this.state.dinosaurFinds,
            ...this.state.mammothFinds,
            ...this.state.trackFinds
          ]
        });
        this.state.markers.map(marker => marker.setVisible(true));
        break;
      case "dinosaur":
        this.setState({ type: "Dinosaur Finds" });
        this.setState({
          discoveriesDisplayed: [...this.state.dinosaurFinds]
        });
        this.filterMarkers(type);
        break;
      case "mammoth":
        this.setState({ type: "Mammoth Finds" });
        this.setState({
          discoveriesDisplayed: [...this.state.mammothFinds]
        });
        this.filterMarkers(type);
        break;
      case "track":
        this.setState({ type: "Dinosaur Tracks" });
        this.setState({
          discoveriesDisplayed: [...this.state.trackFinds]
        });
        this.filterMarkers(type);
        break;
      default:
        break;
    }
  };

  filterMarkers(type) {
    this.state.markers.map(marker => marker.setVisible(true));
    let filteredArray = this.state.markers.filter(
      marker => marker.type !== type
    );
    filteredArray.map(marker => marker.setVisible(false));
  }

  renderMap = () => {
    this.loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9E-iirQBHlr38ShLLAW_AYZiupfNpipA&v=3&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    if (window.google) {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.8293, lng: -98.5795 },
        zoom: 4,
        styles: this.state.styles
      });

      let bounds = new window.google.maps.LatLngBounds();

      let markers = this.state.discoveriesDisplayed.map((find, i) => {
        let marker = new window.google.maps.Marker({
          map: map,
          position: { lat: find.location.lat, lng: find.location.lng },
          title: find.title,
          derscription: find.description,
          animation: window.google.maps.Animation.DROP,
          id: i,
          type: find.type
          //icon: find.type === "dinosaur" ? this.state.icons.dinosaur.url ? find.type === "mammoth" ? this.state.icons.mammoth.url : this.state.icons.mammoth.url
        });

        bounds.extend(marker.position);

        let infoWindow = new window.google.maps.InfoWindow({
          maxWidth: 250,
          content:
            "<div>" +
            "<h5>" +
            find.title +
            "</h5>" +
            "<p>" +
            find.description +
            "</p>" +
            "</div>"
        });

        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });

        marker.setAnimation(window.google.maps.Animation.DROP);

        return marker;
      });

      map.fitBounds(bounds);
      this.setState({ markers });
    } else {
      this.setState({ err: true });
    }
  };

  loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }

  // addIcons() {
  //   this.state.markers.map(marker => marker.setIcon([marker.type].icons.url));
  // }

  // addIcons() {
  //   this.state.markers.map(marker => {
  //     if (marker.type === "dinosaur") {
  //       marker.setIcon(dinosaur)
  //     } else if (marker.type === "mammoth") {
  //       marker.setIcon(mammoth)
  //     } else {
  //       marker.setIcon(track)
  //     }
  //   });
  // }
}

export default App;

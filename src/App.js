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
        query: "Cleveland-Lloyd Dinosaur Quarry",
        location: { lat: 39.323, lng: -110.6879 },
        description:
          "Where more than 12,000 individual bones and one dinosaur egg was discovered",
        type: "dinosaur"
      },
      {
        title: "Ghost Ranch Quarry",
        query: "Ghost Ranch",
        location: { lat: 36.3137, lng: -106.482 },
        description:
          "Thousands of Coelophysis follils were discovered by Edwin Colbert",
        type: "dinosaur"
      },
      {
        title: "La Brea Tar Pits",
        query: "La Brea Tar Pits",
        location: { lat: 34.0638, lng: -118.3554 },
        description: "Tar pits where Saber Tooth Tigers were discovered",
        type: "dinosaur"
      },
      {
        title: "The Academy of Natural Science",
        query: "Academy of Natural Sciences of Drexel University",
        location: { lat: 39.9571, lng: -75.1712 },
        description:
          "Home to the first reasonably complete dinosaur the world would ever know, Hadrosaurus foulkii",
        type: "dinosaur"
      }
    ],
    mammothFinds: [
      {
        title: "Waco Mammoth National Monument",
        query: "Waco Mammoth National Monument",
        location: { lat: 31.6067, lng: -97.176 },
        description:
          "Second greatest concentration of mammoth remains in the world",
        type: "mammoth"
      },
      {
        title: "Mammoth Site at Hot Springs",
        query: "Mammoth Site, Hot Springs",
        location: { lat: 43.4248, lng: -103.4833 },
        description:
          "The site of the greatest concentration of mammoth remains in the world",
        type: "mammoth"
      },
      {
        title: "Bristle Mammoth",
        query: "Pleistocene fossils in Michigan",
        location: { lat: 42.278, lng: -83.7382 },
        description: "The Bristle mammoth skull completely intact with tusks",
        type: "mammoth"
      },
      {
        title: "Children's Discovery Museum of San Jose",
        query: "Children's Discovery Museum of San Jose",
        location: { lat: 37.3268, lng: -121.8925 },
        description:
          "See bones from Lupe the female mammoth discovered near by",
        type: "mammoth"
      }
    ],
    trackFinds: [
      {
        title: "Dinosaur Valley State Park",
        query: "Dinosaur Valley State Park",
        location: { lat: 32.2534, lng: -97.8097 },
        description: "One of the most prolific dinosaur track sites ever found",
        type: "track"
      },
      {
        title: "Dinosaur Footprints Reserve",
        query: "Dinosaur Footprints Reservation",
        location: { lat: 42.2417, lng: -72.6234 },
        description: "A treasure trove of over 130 dinosaur tracks",
        type: "track"
      },
      {
        title: "Dinosaur Ridge",
        query: "Dinosaur Ridge",
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
    err: false,
    map: {},
    infoWindows: []
  };

  //When component mounts, set critical states and render map
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

  //This is the where the app is rendered
  //If map fails to load it displays a message saying so
  render() {
    this.addAnimations();
    this.addIcons();
    if (!this.state.err) {
      return (
        <div className="container-fluid app-wrap">
          <Button id="app-color" onClick={this.changeColor}>
            {this.state.dark === false ? "Night" : "Day"}
          </Button>
          <header className="app-header">
            <h1 className="app-title">Prehistoric US</h1>
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
          <footer className="app-footer">
            <p className="footer-title">
              Copyright (c) 2017{" "}
              <a href="/">
                <strong>Prehistoric US</strong>
              </a>{" "}
              All Rights Reserved.
            </p>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="container-fluid app-wrap">
          <Button id="app-color" onClick={this.changeColor}>
            {this.state.dark === false ? "Night" : "Day"}
          </Button>
          <header className="app-header">
            <h1 className="app-title">Prehistoric US</h1>
          </header>
          <Filter
            updateDiscoveriesDisplayed={this.updateDiscoveriesDisplayed}
            type={this.state.type}
          />
          <Error />
          <footer className="app-footer">
            <p className="footer-title">
              Copyright (c) 2017{" "}
              <a href="/">
                <strong>Prehistoric US</strong>
              </a>{" "}
              All Rights Reserved.
            </p>
          </footer>
        </div>
      );
    }
  }

  //When Night or Day button pressed, change colors of theme and map
  changeColor = () => {
    this.setState(
      prevState => ({
        dark: !prevState.dark
      }),
      () => {
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
        this.setStyle();
      }
    );
  };

  //Function that changes style of map depending on the state of dark
  //Style lifted directly from https://developers.google.com/maps/documentation/javascript/styling
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
        }
      );
    }
  };

  //Function taht filters discoveries displayed depending on state of type set by filter type
  //If filter type matches discovery type the marker is displayed
  //If all discoveries are selected all discoveries are displayed
  updateDiscoveriesDisplayed = type => {
    switch (type) {
      case "all":
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

  //Filter function that takes in filter type and filters markers accordingly
  //Maps through marker array, set all markers to visible, then make ones that don't equal type invisible
  filterMarkers(type) {
    this.state.markers.map(marker => marker.setVisible(true));
    let filteredArray = this.state.markers.filter(
      marker => marker.type !== type
    );
    filteredArray.map(marker => marker.setVisible(false));
  }

  //Render map
  renderMap = () => {
    this.loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9E-iirQBHlr38ShLLAW_AYZiupfNpipA&v=3&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  //Load map with markers and set infoWindows to open when markers are clicked
  //Map discoveries displayed and build markers
  //Use discoveries displayed properties and info to populate infowindows by default
  //Add listener to markers. When marker clicked, open info window
  initMap = () => {
    if (window.google) {
      let map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 39.8293, lng: -98.5795 },
        zoom: 4,
        styles: this.state.styles
      });
      this.setState({ map });

      let bounds = new window.google.maps.LatLngBounds();

      let markers = this.state.discoveriesDisplayed.map((find, i) => {
        let marker = new window.google.maps.Marker({
          map: map,
          position: { lat: find.location.lat, lng: find.location.lng },
          query: find.query,
          title: find.title,
          derscription: find.description,
          animation: window.google.maps.Animation.DROP,
          id: i,
          type: find.type
          //icon: find.type === "dinosaur" ? this.state.icons.dinosaur.url ? find.type === "mammoth" ? this.state.icons.mammoth.url : this.state.icons.mammoth.url
        });

        bounds.extend(marker.position);

        let infoWindow = new window.google.maps.InfoWindow({
          title: find.title,
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

        this.state.infoWindows.push(infoWindow);

        marker.addListener("click", function() {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          infoWindow.open(map, marker);
          setTimeout(
            marker.setAnimation(window.google.maps.Animation.null),
            6000
          );
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

  //loads script for Google Maps API
  loadScript(url) {
    let index = window.document.getElementsByTagName("script")[0];
    let script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }

  //add listener to list item, when clicked animates marker with same title and opens its infoWindow
  //populates infoWindow using data fetched from Wikipedia API
  //animates marker respective to list item when clicked
  addAnimations() {
    let listItems = document.querySelectorAll(".list-item");

    for (let x = 0; x < listItems.length; x++) {
      let infoWindows = this.state.infoWindows;
      let map = this.state.map;
      let markers = this.state.markers;
      let query = "";
      let url = "https://en.wikipedia.org/api/rest_v1/page/summary/";
      listItems[x].addEventListener("click", function() {
        markers.map(marker => {
          if (marker.title === this.title) {
            query = marker.query;
            url += query;
            console.log(url);
            fetch(url)
              .then(response => response.json())
              .then(response => {
                infoWindows[x].setContent(
                  "<h6>" +
                    response.displaytitle +
                    "</h6>" +
                    "<p>Thanks to Wikipedia.com</p>"
                );
                url = "https://en.wikipedia.org/api/rest_v1/page/summary/";
                query = "";
                console.log(response.description);
              })
              .catch(err => {
                console.log(err);
                infoWindows[x].setContent("<h6>" + marker.title + "</h6>");
              });
            marker.setAnimation(window.google.maps.Animation.BOUNCE);

            infoWindows[x].open(map, marker);
          }
          setTimeout(
            marker.setAnimation(window.google.maps.Animation.null),
            6000
          );
          return marker;
        });
      });
    }
  }

  addIcons() {
    this.state.markers.map(marker => {
      if (marker.type === "dinosaur") {
        marker.setIcon(dinosaur);
      } else if (marker.type === "mammoth") {
        marker.setIcon(mammoth);
      } else {
        marker.setIcon(track);
      }
    });
  }
}

export default App;

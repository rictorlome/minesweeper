# Minesweeper

![Demo Image](https://github.com/rictorlome/minesweeper/blob/master/minesweeper_screenshot.png)

### [DEMO LINK](https://rictorlome.github.io/minesweeper/)

## Description

This is an implementation of Minesweeper using the React.js library. I made this for extra practice with JavaScript class interactions, choosing the correct event listeners, and designing simple React component hierarchies.

The most difficult problem I encountered was to set the smiley face's "surprised look" during mouse-down on an unexplored tile. Since the ``` <Tile />``` components do not know about the ```<Smiley />``` component, I had to build out a 'clicking' slice of state in the ```<Game />``` component. Then, the two functions which set this slice of state were passed down as props to the ```<Tile />``` components:
```javascript
setClicking() {
  this.setState({clicking: true})
}
unsetClicking() {
  this.setState({clicking: false, started: true})
}
```

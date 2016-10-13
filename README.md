# hyperborder - extension for HyperTerm
adds a gradient border to the hyperterm editor

![](http://i.giphy.com/3o6Zt193fnu5j0Coow.gif)

## Installation
add it to plugins in your `~/.hyperterm.js` configuration

````
module.exports = {
  ...
  plugins: ['hyperborder']
  ...
}
````
then just restart your HyperTerm app or go to the menu 'Plugins / Update All Now'

## Configuration
### Set Border Colors And Width
It is now possible to change the gradient colors and the border width.

Just add the following to your `.hyperterm.js`:

```javascript
module.exports = {
  config: {
    ...
      hyperBorder: {
        borderColors: ['#ff2400', '#e81d1d', '#e8b71d',' #e3e81d', '#1de840', '#1ddde8', '#2b1de8', '#dd00f3', '#dd00f3'],
        borderWidth: '8px'
      }
    ...
  }
}
```

### Set Border Colors To Random Colors

In addition, you can set any color value to `'random'` (string value):

```javascript
module.exports = {
  config: {
    ...
      hyperBorder: {
        borderColors: ['random','random'],
        borderWidth: '8px'
      }
    ...
  }
}
```

Then every newly opened HyperTerm window will have a different colored border.

### Animate Border Colors
You like some animations? Than try this:

```javascript
module.exports = {
  config: {
    ...
    hyperBorder: {
      animate: true,
      deg: '124deg',
      backgroundSize: '800% 1800%',
      time: '8s'
      ...
    }
    ...
  }
}
```

### Example
```javascript
module.exports = {
  config: {
    ...
    hyperBorder: {
      borderColors: [`#ff2400`, `#e81d1d`, `#e8b71d`,` #e3e81d`, `#1de840`, `#1ddde8`, `#2b1de8`, `#dd00f3`, `#dd00f3`],
      borderWidth: '3px',
      animate: true,
      deg: '124deg',
      backgroundSize: '800% 1800%',
      time: '8s',
      ...
    }
    ...
  }
}
```

## download HyperTerm here
https://hyperterm.org/

## using
https://github.com/webmatze/hyperborder

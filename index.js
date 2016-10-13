const randomColor = ()  => '#'+Math.floor(Math.random()*16777215).toString(16);
const getColor = (input) => input.toLowerCase() === 'random' ? randomColor() : input;

const getBorderColors = (colors = 'random') => {
  colors = [].concat(colors) // ensure colors is an array
             .map(getColor);  // before mapping

  // hack to repeat color for a single color border and still use 'linear-gradient'
  return colors.length < 2 ? colors.concat(colors[0]) : colors;
}

module.exports.decorateConfig = (config) => {
  var configObj = Object.assign({
    animate: false,
    borderWidth: '4px',
    borderColors: ['#fc1da7', '#fba506']
  }, config.hyperBorder);
  var { borderColors, borderWidth, deg, backgroundSize, time } = configObj;
  var colors = getBorderColors(borderColors).join(',');
  var animateStyles = `
    background-size: ${backgroundSize};
    animation: AnimationName ${time} ease infinite;
  `
  return Object.assign({}, config, {
    css: `
      html {
        height: 100%;
        background: linear-gradient(${ configObj.animate ? deg : '180deg' }, ${colors});
        ${ configObj.animate ? animateStyles : '' }
        border-radius: ${borderWidth};
      }
      @keyframes AnimationName {
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
      }
      body {
        position: absolute;
        top: ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
        border-radius: ${borderWidth};
      }
      ${config.css || ''}
      #mount {
      }
      .hyperterm_main {
        top: ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
        border-width: 0px;
      }
      .hyperterm_main .header_header {
        top: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
      }
      .hyperterm_main .tabs_list {
        border-bottom-color: ${config.borderColor};
        border-top-left-radius: ${borderWidth};
        border-top-right-radius: ${borderWidth};
      }
      .hyperterm_main .tab_tab:last-child {
        border-top-right-radius: ${borderWidth}
      }
      .hyperterm_main .terms_terms {
        border-radius: 0 0 ${borderWidth} ${borderWidth};
        bottom: ${borderWidth};
        left: ${borderWidth};
        right: ${borderWidth};
      }
      .hyperterm_main .terms_term {
        margin-top: ${borderWidth};
      }
    `
  });
}

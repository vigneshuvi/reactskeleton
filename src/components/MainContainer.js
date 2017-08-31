import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGridLayout, {Responsive, WidthProvider} from 'react-grid-layout'
import { withStyles } from 'material-ui/styles';

import  FCPanel from './FCPanel';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  cardA : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },
  cardB : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },
  cardC : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },

};

class MainContainer extends Component {


  render() {
    const { page } = this.props
    const classes = this.props.classes;
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <div className={classes.root}>
        <h1>{page.path}</h1>
        <ResponsiveReactGridLayout breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} rowHeight={30} width={1200} isResizable={true}>

          <div className={classes.cardA} key="a" data-grid={{x: 0, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Profile"}/></div>
          <div className={classes.cardB} key="b" data-grid={{x: 4, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Feeds"}/></div>
          <div className={classes.cardC} key="c" data-grid={{x: 8, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Timeline"}/></div>
        </ResponsiveReactGridLayout>
      </div>

    );
  }
}


MainContainer.propTypes = {
    page:  PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

// No need to connect()!
export default withStyles(styles)(MainContainer);
import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import AddPrescriptions from '../addPrescriptions/AddPrescriptions';
import ViewAllergies from '../viewAllergies/ViewAllergies';
import ViewPrescribedAntibiotics from '../viewPrescribedAntibiotics/ViewPrescribedAntibiotics';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabRoot: {
    minWidth: '33.33%',
  },
});

class Home extends Component {
  static contextTypes = {
    router: PropTypes.object,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Add Prescriptions" className={classes.tabRoot} />
            <Tab label="View Allergies" className={classes.tabRoot} />
            <Tab label="View Prescribed Antibiotics" className={classes.tabRoot} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <AddPrescriptions />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ViewAllergies />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ViewPrescribedAntibiotics />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  };
}

function mapStateToProps() {
  return {

  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {})
)(Home);

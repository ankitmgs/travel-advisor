import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './style.js';

const Header = () => {
  const classes = useStyles();
  return (
      <>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
              Travel-log App
            </Typography>
            <Box display="flex">
              <Typography variant='h6' className={classes.title}>
                Explore New Places
              </Typography>
              {/* autocomplte is used for search places in google maps */}
              {/* <Autocomplete> */}
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  {/* Predesign Input Box */}
                  <InputBase placeholder='Search Places' classes={{root: classes.inputRoot, input: classes.inputInput}} />
                </div>
              {/* </Autocomplete> */}
            </Box>
          </Toolbar>
        </AppBar>
      </>
    )
}

export default Header

import { Dialog, DialogTitle,DialogContent, makeStyles, Typography } from '@material-ui/core';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import React from 'react';


const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    backgroundColor:'#bbc8d5',
      padding: theme.spacing(20),
      position: 'absolute',
      top: theme.spacing(10),
    
  },
  dialogTitle: {

      textDecorationColor :'green'
  }
}))

export default function Popup(props) {

  const { title, children, openPopup, setOpenPopup} = props;
  const classes = useStyles();
if (title === "أنتهى التقييم" ){
  return (
      <Dialog style={{backgroundColor:'#bbc8d5', textAlign: 'center',
      alignItems: 'center',}} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
          <DialogTitle className={classes.dialogTitle}>
              <div style={{ display: 'flex', backgroundColor:'#bbc8d5' }}>
                  <Typography variant="h4" component="div" style={{ flexGrow: 1, textDecorationColor:green }}>
                      {title}
                  </Typography>
              </div>
          </DialogTitle>
          {/* <DialogContent dividers>
              {children}    
          </DialogContent> */}
          <Link to = "/" style={{width: '140px',
  height: '40px', textDecoration: 'none', color: 'rgb(241, 241, 246)', backgroundColor: '#657789',
  textAlign: 'center',
  alignItems: 'center',
  marginLeft: '10%',
  marginTop: '10%',
  borderRadius:'20px',
  }}>
          <h3> إغلاق </h3>
          </Link>
      </Dialog>
  )}
  else{ if (title === "خطأ" ){
    return (
      <Dialog style={{backgroundColor:'#bbc8d5' }} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
          <DialogTitle className={classes.dialogTitle}>
              <div style={{ display: 'flex', backgroundColor:'#bbc8d5', }}>
                  <Typography variant="h2" component="div" style={{ flexGrow: 1, color:'rgb(123, 42, 42)'}}>
                      {title}
                  </Typography>             
              </div>
          </DialogTitle>
      </Dialog>
      )}else{
        return (
            <Dialog style={{backgroundColor:'#bbc8d5' }} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex', backgroundColor:'#bbc8d5', }}>
                        <Typography variant="h2" component="div" style={{ flexGrow: 1, color:'green'}}>
                            {title}
                        </Typography>             
                    </div>
                </DialogTitle>
            </Dialog>
        )
      }
  }
}
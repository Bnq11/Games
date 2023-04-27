
import { Dialog, DialogTitle,DialogContent, makeStyles, Typography } from '@material-ui/core';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import React from 'react';


const useStyles = makeStyles(theme => ({
  dialogWrapper: {
    backgroundColor:'whait',
      paddingLeft:  theme.spacing(80),
      paddingRight:  theme.spacing(100),
      paddingTop:  theme.spacing(50),
      paddingBottom:  theme.spacing(50),
      position: 'absolute',
    
  },
  dialogTitle: {

      textDecorationColor :'green'
  }
}))

export default function Popup(props) {

  const { title, children, openPopup,} = props;
  const classes = useStyles();
if (title === "انتهى التقييم" ){
  return (
      <Dialog style={{backgroundColor:'whait',}} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
          <DialogTitle className={classes.dialogTitle}>
              <div style={{ display: 'flex', backgroundColor:'white' ,width:'190px',marginLeft:'30%'}}>
                  <Typography variant="h4" component="div" style={{ flexGrow: 1, textDecorationColor:green }}>
                      {title}
                  </Typography>
              </div>
          </DialogTitle>
          <DialogContent dividers>
              {children}    
          </DialogContent>
        <Link to = "/" style={{
    width: '110px',
    height: '40px', 
    borderRadius: '20px', 
    textDecoration: 'none',
    color: 'rgb(241, 241, 246)',
    backgroundColor: '#657789',
    alignItems: 'center',
    marginLeft: '40%',
    marginTop:'50px',
     display:'flex',
     justifyContent: 'center',
  }}>
         <center>   <h3> إغلاق </h3></center>
          </Link>
      </Dialog>
  )}
  else{ if (title === "خطأ" ){
    return (
      <Dialog style={{backgroundColor:'whait'   }} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
          <DialogTitle className={classes.dialogTitle}>
              <div style={{ display: 'flex', backgroundColor:'whait',marginLeft:'60%'}}>
                  <Typography variant="h2" component="div" style={{ flexGrow: 1, color:'rgb(123, 42, 42)'}}>
                      {title}
                  </Typography>             
              </div>
          </DialogTitle>
      </Dialog>
      )}else{
        return (
            <Dialog style={{backgroundColor:'whait'  }} open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex', backgroundColor:'whait', marginLeft:'60%'}}>
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
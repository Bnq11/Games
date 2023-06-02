import React from 'react';

import { FaTimes } from 'react-icons/fa';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';

// the commented part is used as close button incase you wanted to change the design
function Videopopup({ title, children, openPopup, handleClose}) {
    return (
      <Dialog style={{textAlign:"center",margin:"auto",backgroundColor:'whait', width:"auto",height:"auto",position: 'absolute', }} open={openPopup} maxWidth="md">
          <DialogTitle >
              <div style={{ display: 'flex', backgroundColor:'white' }}>
                  <Typography variant="h4" component="div" style={{ flexGrow: 1,}} >
                      الفيديو التوضيحى
                  </Typography>
                  <FaTimes
                    className="close-tag black"
                    onClick={handleClose}
                    />
              </div>
          </DialogTitle>
          <DialogContent style={{margin:"20px"}}>
              {children}
            {/* <div className='video-button'>
                <button className="btnt2" onClick={handleClose}>اغلاق</button>
            </div>  */}
          </DialogContent>
      </Dialog>
  )
}

export default Videopopup
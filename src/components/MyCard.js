import { Card ,CardContent ,Typography, Button,CardActions, Grid, DialogContent, DialogContentText, DialogActions, Dialog, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react'
import { getMatchDetail } from '../api/Api';
const MyCard = ({match}) => {
    const [detail,setDetail] = useState({});

    const [open,setOpen] = useState(false);
    const handleClick = (id) =>{
        getMatchDetail(id)
        .then((data)=>{console.log(data)
            setDetail(data);
            handleOpen();
        })
        .catch((error)=> console.log(error));
    };

    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:15}}>
                <CardContent>
                    <Grid container justify="center">
                        <Grid item >
                            <Typography variant="h5">{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ width: 85}} src={require("../img/vs.png")} alt="" />
                          <Typography style={{paddingBottom:3}} color="primary">VS</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">{match["team-2"]}</Typography>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                   <Grid container  justify="center">
                   <Button onClick={()=>{
                       handleClick(match.unique_id);
                   }} item variant="contained" color="primary">Scorecard</Button>
                    <Button style={{marginLeft:5}} item variant="contained" color="primary">Start Time{new Date (match.dateTimeGMT).toLocaleString()}</Button>
                   </Grid>
                </CardActions>
            </Card>
        );
    }

    const handleClose=()=>{
        setOpen(false);

    }
    const handleOpen=()=>{
        setOpen(true);
    }
    const getDialog=()=>
    {
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert--dialog-title">{"Match Detail.."}</DialogTitle>
           <DialogContent>
               <DialogContentText id="alert-dialog-description">
                   <Typography>
                       {detail.stat}
                   </Typography>
                   <Typography>
                       Match <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                           {detail.matchStarted?"started":"still not started"}{" "}</span>
                   </Typography>
                   <Typography>
                       Score <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                           {detail.score}</span>
                   </Typography>
               </DialogContentText>
           </DialogContent>
           <DialogActions></DialogActions>
        </Dialog>
    }
    return getMatchCart();
}

export default MyCard;
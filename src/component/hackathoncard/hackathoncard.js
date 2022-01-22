import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import {TextField} from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
    root: {
        color: '#325288 !important',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "15px",
        margin:5,
        width:"100%",
        textTransform:"none",
        border:"1px solid #325288"
    },
}))(Button);




const useStyles = makeStyles({
    root: {
        width: "350px",
        Height:"300px",
        backgroundColor:"white",
        margin:10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    paper: {
        position: 'absolute',
        width: 300,
        display:"flex",
        flexDirection:"column",

        backgroundColor: "#FAEEE7",
        border: '2px solid #000',
        boxShadow: "#FAEEE7",
        padding: 10,
    },
});

export default function Hackathoncard(props) {
    const [roomName, setRoomName] = React.useState("");
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render


    console.log(props)
    return (
        <Card className={`${classes.root} `}>
            <div>
                <img src={require('./card_default.jpg')} style={{
                    width: '100%',
                }}/>
            </div>

            <CardContent>
                <Typography variant="h5"  component="h2" >
                    {props.hackathon.hackName}
                </Typography>
                <Typography variant="h5" component="h2">
                    Start Date
                </Typography>
                <Typography variant="h5" component="h2" color="textSecondary">
                    {props.hackathon.hackStart.toDate().toDateString()}
                </Typography>
                <Typography variant="h5" component="h2">
                    Last Date
                </Typography>
                <Typography variant="h5" component="h2" color="textSecondary">
                    {props.hackathon.hackEnd.toDate().toDateString()}
                </Typography>
            </CardContent>

            <CardActions>
                <ColorButton size="small" className="bg-success w-75 mx-auto" style={{
                    borderRadius: '50px',
                }}>
                    {
                        props.hackathon.organiser_email_id == props.user.email ? 
                        <>
                         <span className="text-light" style={{
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        You are Host
                        </span>
                        </>:<>
                        <span className="text-light" style={{
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        Participate Now
                        </span>
                        </>

                    }
                   
                </ColorButton>
            </CardActions>


        </Card>
    );
}

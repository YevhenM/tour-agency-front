import {Link, useLocation} from "react-router-dom";
import {ITour} from "../../interfaces/ITour";
import usersStore from "../../store/usersStore"
import "./Card.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


interface ICardProps {
    tour: ITour,
    isAuth: boolean
    addToCart(id:number): any    
}

const useStyles = makeStyles({
    root: {
    //   maxWidth: 380,
    },
    media: {
      height: 250,
    },
    });

export default function CardTour(props: ICardProps) {
    const {pathname} = useLocation()    
    const baseUrl:string = pathname.replace(/\/$/, "")
    
    const {tour: {imageUrl, price, title, description, id}, isAuth, addToCart} = props;

    const classes = useStyles();

    return (
        <Card className={ classes.root }>
            <Link to={`${baseUrl}/id/${id}`}>
            {/* <p>{pathname}</p>     */}
            <CardMedia
                // component="img"
                className = { classes.media }
                image = { imageUrl }
                title = { title }
                 />
            </Link>

            <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >
                <div style={{height: "100px"}}>
                    { title }
                </div>    
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom={true}>
                    { description.slice(0, (description.indexOf(".") < 97) ? (description.indexOf(".") + 1) : 97) + "..." }
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" align="right">
                     
                   $ { price } 
                    
                </Typography>
            </CardContent>
            
            <CardActions>            
                <Button size="small" color="primary" href={`${baseUrl}/id/${id}`}>
                    Learn More
                </Button>
            </CardActions>
        </Card>          

    );
}

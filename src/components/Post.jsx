import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Post = () => {
    return (
            <Card sx={{marginTop: "20px"}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="John"
                    subheader="September 26, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://images.pexels.com/photos/4305836/pexels-photo-4305836.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite color='error' />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Post;
import react from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1,2,3,4,5,6,7,8,9]

const App =() => {
  const classes = useStyles();


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Album of Photos</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            {/* <Grid container justifyContent="center" spacing={2}>
              <Grid item lg={6}> */}
                <Typography
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  My Album
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  // padding="0 2rem"
                  color="textSecondary"
                  paragraph="true"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy . text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </Typography>
              {/* </Grid>
            </Grid> */}
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random" 
                title='Image Title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
                </Card>
                </Grid>
            ))}
            
          </Grid>

        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'></Typography>
      </footer>
    </>
  );
}


export default App;

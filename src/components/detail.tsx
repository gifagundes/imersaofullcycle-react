import { useEffect, useState } from "react";

import { CardActions, Button, CardContent, Card, Typography, Grid, Container } from '@material-ui/core';
import { Post } from "../interfaces/post";
import { useParams } from "react-router-dom";
import { capitalizeFirstLowercaseRest } from "../App";

type Props = {
  
}

export const Detail = () => {

  const [post, setPost] = useState<Post>();
  let { id } = useParams();
  
  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPost(data) );
  }, []);
  
  return (
    <Container maxWidth="md">
      <br />
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {capitalizeFirstLowercaseRest(post?.title || '')}
              </Typography>
              <p>{post?.body}</p>
              
              <Button size="small" variant="outlined" color="default" href="/posts" >Back</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
    </Container>
  );
}
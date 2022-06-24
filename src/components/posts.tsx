import { useEffect, useState } from "react";

import { Button, CardContent, Card, Typography, Grid, Container } from '@material-ui/core';
import { Post } from "../interfaces/post";
import { Link, Router } from "react-router-dom";
import { capitalizeFirstLowercaseRest } from "../App";

type Props = {
  
}

export const Posts = () => {

  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data) );
  }, []);
  
  return (
    <Container maxWidth="md">
      <br />
      <Grid container spacing={4}>
      { posts.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {capitalizeFirstLowercaseRest(item.title)}
                </Typography>

                <Button size="small" variant="contained" color="primary" href={"/detail/" + item.id} >See more</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
    </Container>
  );
}
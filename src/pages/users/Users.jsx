import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import sleep from "sleep-promise";
import Header from "../../layout/dashboardNav/Header";

export default function Users({ onClick ,onLogout }) {
  const navigate = useNavigate();

  const [authored, setIsAuthored] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://www.melivecode.com/api/auth/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "ok") {
          setIsAuthored(true);
        } else {
          navigate("/");
        }
      });
  });
  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <Header onClickLight={onClick} onLogoutHeader={onLogout}>
      {authored && (
        <Grid
          container
          rowSpacing={6}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          columns={{ xs: 3, sm: 3, md: 12 }}
        >
          {users.map((user) => {
            return (
              <Grid item xs={2} key={user.id}>
                <Card sx={{ maxWidth: 345 }} style={{ padding: 6 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={user.avatar}
                      alt={user.fname}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.fname}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.lname}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Header>
  );
}
<Stack spacing={1}>
  {/* For variant="text", adjust the height via font-size */}
  <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
  {/* For other variants, adjust the size with `width` and `height` */}
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="rectangular" width={210} height={60} />
  <Skeleton variant="rounded" width={210} height={60} />
</Stack>;

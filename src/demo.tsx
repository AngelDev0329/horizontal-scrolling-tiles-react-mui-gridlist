import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const images = [
  {
    thumbnail: {
      uri: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      name: "animals"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      name: "city"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      name: "city"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      name: "city"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      name: "nature"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      name: "cats"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      name: "cats"
    }
  },
  {
    thumbnail: {
      uri: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      name: "cats"
    }
  }
];

export default function StandardImageList() {
  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)"
      }}
      cols={3}
    >
      {images.map((image, index) => (
        <ImageListItem key={index}>
          <img src={image.thumbnail.uri} />
          <ImageListItemBar title={image.thumbnail.name} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

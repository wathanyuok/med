import * as React from "react";
import { Box, ImageList, ImageListItem, CardMedia } from "@mui/material";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/pink-dna.png", label: "รูป 1" },
  { id: 2, src: "/images/heart-beat.png", label: "รูป 2" },
  { id: 3, src: "/images/article.png", label: "รูป 3" },
];

function ProductGallery() {
  const [selected, setSelected] = React.useState(images[0]);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* รูปใหญ่ */}
      <Box sx={{ flex: 1, mb: 2 }}>
        <CardMedia
          component="img"
          image={selected.src}
          alt={selected.label}
          sx={{
            width: "100%",
            height: "430px",
            borderRadius: 2,
            objectFit: "cover",
            bgcolor: "#F2F8FD", 
          }}
        />
      </Box>

      {/* Thumbnails */}
      <ImageList cols={3} rowHeight={120} gap={8}>
        {images.map((item) => (
          <ImageListItem
            key={item.id}
            onClick={() => setSelected(item)}
            sx={{ cursor: "pointer" }}
          >
            <Image
              height={100}
              width={100}
              src={item.src}
              alt={item.label}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border:
                  selected.id === item.id
                    ? "1px solid #1976d2"
                    : "1px solid transparent",
                borderRadius: "8px",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.background =
                  "#F2F8FD"; 
                (e.currentTarget as HTMLImageElement).style.content =
                  '"🚫"';
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
export default ProductGallery;
"use client";

import * as React from "react";
import { Box, ImageList, ImageListItem, CardMedia } from "@mui/material";
import Image from "next/image";

export interface GalleryImage {
  id: number;
  src: string;
  label: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  initialSelectedId?: number;
}

function ProductGallery({ images, initialSelectedId }: ProductGalleryProps) {
  const initialImage =
    images.find((img) => img.id === initialSelectedId) || images[0];

  const [selected, setSelected] = React.useState<GalleryImage>(initialImage);

  if (!images || images.length === 0) {
    return <Box sx={{ textAlign: "center", p: 4 }}>ไม่มีรูปภาพ</Box>;
  }

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
                    ? "2px solid #1976d2"
                    : "1px solid transparent ",
                borderRadius: "8px",
                opacity: selected.id === item.id ? 1 : 0.5,
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.background =
                  "#F2F8FD";
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ProductGallery;
import { Box, Card, CardMedia, Typography, Pagination } from "@mui/material";
import { useEffect, useState } from "react";

export default function GalleryComponent() {
  interface Photo {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }

  const baseUrl = "https://picsum.photos/v2/list";
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const photosPerPage = 20;

  useEffect(() => {
    console.log("fetching photos from", baseUrl);
    fetch(baseUrl+`?page=${page}&limit=${photosPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    console.log("Page changed to:", newPage);
    setPage(newPage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          mt: 4,
          width: "75%",
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(200px, 1fr))",
          gridTemplateRows: "repeat(4, minmax(200px, 1fr))",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              textAlign: "center",
              gridColumn: "span 5",
            }}
          >
            <Typography variant="h6" component="p">
              Loading photos...
            </Typography>
          </Box>
        ) : (
          photos.map((photo) => (
            <Card
              key={photo.id}
              sx={{ maxWidth: 345, m: 2, bgcolor: "bg-gray-950" }}
              title={photo.author}
            >
              <CardMedia
                component="img"
                width={photo.width}
                height={photo.height}
                image={photo.download_url}
                alt={photo.author}
              />
            </Card>
          ))
        )}
      </Box>
      {loading ? null : (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Pagination
            page={page}
            shape="rounded"
            sx={{ mt: 2, alignText: "center" }}
            count={10}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
}

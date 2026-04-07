import { Box, Card, CardMedia,  Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function GalleryComponent() {


  interface Photo {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }

  const url = 'https://picsum.photos/v2/list';
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    console.log('fetching photos from', url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
        console.log('fetched', data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (

      <Box sx={{ mt: 4, width: '50%', display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 1, justifyContent: 'center' }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
            <Typography variant="h6" component="p">
              Loading photos...
            </Typography>
          </Box>
        ) : (
        photos.map(photo => (
          <Card key={photo.id} sx={{ maxWidth: 345, m: 2 }} title={photo.author}>
            <CardMedia
              component="img"
              width={photo.width}
              height={photo.height}
              image={photo.download_url}
              alt={photo.author}
            />
          </Card>
        )))}
      </Box>
  )
}
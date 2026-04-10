import { Box,  Typography } from "@mui/material";
import { use, useEffect } from "react";

export default function About() {

  useEffect(() => {
    document.title = "About - Reference Image Website";
  }, []);

  const textareaBackgroundColor = "#060e23";
  const textColor = "#ffffff";
  const borderColor = "#094179";
  const textAreaWidth = "75%";
    
  return (
    <Box sx={{ p: 3, alignContent: "center", display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          width: "75%",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#094179",
          padding: 1,
          borderRadius: 1,
          mb: 2
        }}
      >
        <Typography variant="h3" component="h2" sx={{ textAlign: "center" }}>
          "About"
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "75%", flexDirection: "column", alignItems: "center", bgcolor: textareaBackgroundColor, p: 1, color: textColor, border: `1px solid ${borderColor}`, boxShadow: `0 4px 8px 0 ${borderColor}`, fontSize: "1.2rem", borderRadius: 1 }}>
        <Typography variant="h6" component="p" sx={{ textAlign: "center", mt: 2, width: textAreaWidth }}>
          This website is a reference image website built using React and Material-UI. It is designed to provide users with a collection of high-quality images for various purposes, such as design inspiration, educational resources, or simply for enjoyment. The gallery features a wide range of images, including landscapes, portraits, abstract art, and more. Users can browse through the gallery, view individual images in detail, and even download them for personal use. The website is continuously updated with new images to ensure a fresh and diverse collection for users to explore.
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center", mt: 2, width: textAreaWidth }}>
          The website is built with a focus on user experience, featuring a clean and intuitive interface that allows users to easily navigate through the gallery and find the images they are looking for. The use of Material-UI ensures that the website is responsive and visually appealing across different devices and screen sizes. Whether you are a designer looking for inspiration, a student seeking reference images for a project, or simply someone who appreciates beautiful imagery, this website aims to provide a valuable resource for all your image needs.
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center", mt: 2, width: textAreaWidth }}>
          created a reference image website as a way to actively maintain and improve my web development skills through consistent, hands-on practice. Rather than letting my knowledge become stagnant, I wanted a project that would evolve over time and push me to revisit core concepts like layout design, responsive interfaces, and efficient asset management. By focusing on images as the primary content, I was able to explore techniques for optimizing load times, organizing media libraries, and building clean, user-friendly navigation systems.
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center", mt: 2, width: textAreaWidth }}>
          The project also gave me the opportunity to experiment with both front-end and back-end development. On the front end, I refined my skills in structuring pages, styling components, and ensuring accessibility across devices. On the back end, I worked on handling data, organizing image metadata, and potentially integrating APIs or databases to make the site more dynamic. This balance allowed me to strengthen my full-stack abilities while reinforcing best practices in performance and scalability.
        </Typography>
        <Typography variant="h6" component="p" sx={{ textAlign: "center", mt: 2, width: textAreaWidth }}>
          Beyond technical growth, the website serves as a personal benchmark for my progress. Each update reflects something new I’ve learned, whether it’s a design improvement, a performance optimization, or a new feature. It also acts as a portfolio piece that demonstrates my ability to build and maintain a functional project over time. Overall, creating this reference image website has been a practical and motivating way to continuously sharpen my web development skills.
        </Typography>
      </Box>  
    </Box>
  );
}
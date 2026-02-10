import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { Layout } from "./root";

export default [
    index("routes/home.tsx"),
    route("about","routes/about.tsx"),
    route("gallery", "routes/gallery.tsx", [
        route(":imageId", "routes/imageDetails.tsx"),
    ]),
] satisfies RouteConfig;


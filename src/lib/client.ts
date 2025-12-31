import { treaty } from "@elysiajs/eden";
// 1. Import ONLY the type. Do not import the value 'app'.
import type { App } from "../app/api/[[...slugs]]/route";

const domain = "http://localhost:3000"; // Use env vars in production

// 2. Initialize treaty with the Generic Type <App> and the URL string.
// Do not pass the 'app' value here, or your client build will break.
export const client = treaty<App>(domain).api;

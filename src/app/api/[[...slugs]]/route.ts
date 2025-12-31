import { Elysia, t } from "elysia";

// 1. Export the type specifically for the client to use
export const app = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello Nextjs")
  .post("/user", ({ body }) => body, {
    // 2. Use 't' from Elysia for schema validation
    body: t.Object({
      name: t.String(),
    }),
  });

// 3. Export the type of the app
export type App = typeof app;

export const GET = app.fetch;
export const POST = app.fetch;

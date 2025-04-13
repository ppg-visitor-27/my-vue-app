import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Get the GitHub repository name
const repoName = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
  : "";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? repoName : "/",
  plugins: [vue()],
});

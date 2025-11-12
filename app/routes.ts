import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/home.tsx"),
    route("quiz/:categorySlug/:quizSlug", "routes/quiz.tsx"),
    route("result/:categorySlug/:quizSlug", "routes/result.tsx"),
    route("*", "routes/[...404].tsx"),
] satisfies RouteConfig

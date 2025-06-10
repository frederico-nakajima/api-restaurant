import { Router } from "express"
import { tablesRoutes } from "./tables-routes"
import { productsRoutes } from "./products-routes"
import { tablesSessionsRoutes } from "./tables-sessions-routes"
import { ordersRoutes } from "./orders-routers"

const routes = Router()

routes.use("/products", productsRoutes)
routes.use("/tables", tablesRoutes)
routes.use("/tables-sessions", tablesSessionsRoutes)
routes.use("/orders", ordersRoutes)

export { routes}
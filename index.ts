// npm i koa koa-router koa-logger koa-json -S
// npm i @types/koa @types/koa-router @types/koa-logger @types/koa-json 
import Koa from "koa";
import Router, {RouterContext} from "koa-router";
import logger from "koa-logger";
import json from "koa-json";

const app = new Koa();
import {router as articles} from "./routes/articles";

// const welcomeAPI = async (ctx: RouterContext, next: any) => {
//  ctx.body = {
//  message: "Welcome to the blog API!"
//  };
//  await next();
// }


app.use(logger());
app.use(json());
// app.use(router.routes());
app.use(articles.routes());
app.listen(10888);

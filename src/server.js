const Fastify = require("fastify");
const app = Fastify({logger: true});
// app.register(require("./routes/flags"));

app.get("/health", async () => {
    return {status: "ok"};
});

app.listen({port: 3000});

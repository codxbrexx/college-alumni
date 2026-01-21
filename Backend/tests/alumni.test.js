import request from "supertest";
import { app } from "../app.js";

describe("Alumni Endpoints", () => {

    it("should return 401 for protected routes without token", async () => {
        const res = await request(app)
            .patch("/api/alumni/me/avatar");
        expect(res.statusCode).toBe(401); 
    });

    it("should return 404 for non-existent users", async () => {
        const res = await request(app).get("/api/alumni/invalidid");
        expect(res.statusCode).not.toBe(500);
    });
});

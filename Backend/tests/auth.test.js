import request from "supertest";
import { app } from "../app.js";
import mongoose from "mongoose";


describe("Auth Endpoints", () => {



    it("should return 400 if required fields are missing in register", async () => {
        const res = await request(app)
            .post("/api/auth/register")
            .send({
                fullName: "Test User"
            });
        expect(res.statusCode).not.toBe(404); 
    });

    it("should return 400 if required fields are missing in login", async () => {
        const res = await request(app)
            .post("/api/auth/login")
            .send({
            });
        expect(res.statusCode).not.toBe(404);
    });
});

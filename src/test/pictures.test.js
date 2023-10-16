import supertest from "supertest";
import {logger} from "../application/logging.js";
import { web } from "../application/web";
import { createTestUser, getTestUser, removeTestUser } from "../utils/user-util.js";
import { createTestPicture, getTestPicture, removeTestPicture } from "../utils/picture-util.js";

describe("POST /api/users/:userId/uploads/picture", () => {

    beforeAll(async() => {
        await createTestUser();
    });

    afterAll(async() => {
        await removeTestPicture();
        await removeTestUser();
    })

    it("should can create new images", async () => {

        const user = await getTestUser();
        const result = await supertest(web)
        .post("/api/users/" + user.username + "/uploads/picture")
        .set("Authorization", "test")
        .set("Content-Type", "multipart/form-data")
        .attach("uploadPicture", __dirname + "\\orangutan.jpg")

        logger.info(result.body)

        expect(result.status).toBe(200);
    });
    
    it("should can not create new images if image format is not allowed", async () => {

        const user = await getTestUser();
        const result = await supertest(web)
        .post("/api/users/" + user.username + "/uploads/picture")
        .set("Authorization", "test")
        .attach("uploadPicture", __dirname + "\\file.txt")

        logger.info(result.body)

        expect(result.status).toBe(415);
    });
});

describe("GET /api/users/:userId/picture", () => {

    beforeAll(async() => {
        await createTestUser();
        await createTestPicture();
    })

    afterAll(async() => {
        await removeTestPicture();
        await removeTestUser();
    })

    it("should get user image", async () => {
        const user = await getTestUser();
        const result = await supertest(web)
        .get("/api/users/" + user.username + "/picture")
        .set("Authorization", "test")
        
        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.text).toEqual("{\"data\":{\"image\":{\"name\":\"D:\\\\contact-management-api\\\\src\\\\service\\\\uploaded\\\\orangutan.jpg\",\"username\":\"test\"}}}")
    })

    
})

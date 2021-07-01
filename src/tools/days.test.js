import { createDaysOfWeek } from "./daysName.tools";

describe ("daysName module", () => {
    describe("createDaysOfWeek", () => {
        it("should return an array", () => {
            expect(createDaysOfWeek()).toBeInstanceOf(Array);
        });
         it("should contain 7 elements", () => {
             expect(createDaysOfWeek().length).toEqual(7);
         })
         it("should have unique elements", () => {
             expect(Array.from(new Set(createDaysOfWeek())).length).toEqual(7);
         })
    })

});


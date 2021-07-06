import { createDaysOfWeek, createLongMonthNames } from "./date.tools";

describe ("daysName module", () => {
    describe("createDaysOfWeek", () => {
        it("should return an array", () => {
            expect(createDaysOfWeek()).toBeInstanceOf(Array);
        });
         it("should contain 7 elements", () => {
             expect(createDaysOfWeek().length).toEqual(7);
         });
         it("should have unique elements", () => {
             expect(Array.from(new Set(createDaysOfWeek())).length).toEqual(7);
         });
    });
});

describe ("year module", () => {
    describe("createLongMonthNames", () => {
        it("should be a function", () => {
            expect(createLongMonthNames).toBeInstanceOf(Function);
        });
        it("should return an array", () => {
            expect(createLongMonthNames()).toBeInstanceOf(Array);
        });
        it("return value should have 12 elements", () => {
            expect(createLongMonthNames().length).toEqual(12);
        })
    })

})


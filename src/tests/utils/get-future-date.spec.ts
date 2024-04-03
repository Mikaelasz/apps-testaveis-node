import { test, expect } from "vitest";
import { getFutureDate } from "./get-future-date";



test('increases date with one year', () =>{
    expect(getFutureDate('2024-04-03').getFullYear()).toEqual(2025)
})
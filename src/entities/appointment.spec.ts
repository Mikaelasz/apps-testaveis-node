import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../tests/utils/get-future-date";

test("create and appointment", () => {
  const startsAt = getFutureDate("2024-04-03");
  const endsAt = getFutureDate("2024-04-04");


  const appointment = new Appointment({
    customer: "John Doe",
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("John Doe");
});

test("cannot create an appointment with end date before start date", () => {
  const startsAt = getFutureDate("2024-04-03");
  const endsAt = getFutureDate("2024-04-02");

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt: new Date(),
      endsAt: new Date(),
    });
  }).toThrow();
});

test("cannot create an appointment with start date before now", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: "John Doe",
      startsAt: new Date(),
      endsAt: new Date(),
    });
  }).toThrow();
});

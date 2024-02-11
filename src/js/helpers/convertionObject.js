import * as L from '../constants/length';

export const lengthConvertion = {
  [L.MILLIMETERS]: {
    [L.CENTIMETERS]: value => value / 10,
    [L.METERS]: value => value / 1000,
    [L.MILLIMETERS]: value => value,
    [L.DECIMETERS]: value => value / 100,
  },
  [L.CENTIMETERS]: {
    [L.CENTIMETERS]: value => value,
    [L.METERS]: value => value / 100,
    [L.MILLIMETERS]: value => value * 10,
    [L.DECIMETERS]: value => value / 10,
  },
  [L.METERS]: {
    [L.CENTIMETERS]: value => value * 100,
    [L.METERS]: value => value,
    [L.MILLIMETERS]: value => value * 1000,
    [L.DECIMETERS]: value => value * 10,
  },
  [L.DECIMETERS]: {
    [L.CENTIMETERS]: value => value * 10,
    [L.METERS]: value => value / 10,
    [L.MILLIMETERS]: value => value * 100,
    [L.DECIMETERS]: value => value,
  },
};
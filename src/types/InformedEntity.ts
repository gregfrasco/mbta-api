/**
 * Object representing a particular part of the system affected by an alert
 */
export class InformedEntity {
  /**
   * Unique id of a trip
   */
  trip: string;

  /**
   * Unique id of a stop
   */
  stop: string;

  /**
   * | Value | Name          | Example    |
   * |-------|---------------|------------|
   * | `0`   | Light Rail    | Green Line |
   * | `1`   | Heavy Rail    | Red Line   |
   * | `2`   | Commuter Rail |            |
   * | `3`   | Bus           |            |
   * | `4`   | Ferry         |            |
   * 
   */
  route_type: string;

  /**
   * Unique id of a route
   */
  route: string;

  /**
   * Unique id of a facility
   */
  facility: string;

  /**
   * Direction in which trip is traveling: `0` or `1`.
   * 
   * The meaning of `direction_id` varies based on the route. You can programmatically get the direction names from `/routes` `/data/{index}/attributes/direction_names` or `/routes/{id}` `/data/attributes/direction_names`.
   * 
   * 
   */
  direction_id: string;

}
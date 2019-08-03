/**
 * Path a vehicle travels during service. See [GTFS 'routes.txt](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt) for the base specification.

 */
export class RouteResource {
  /**
   * | Value | Name          | Example    |
|-------|---------------|------------|
| '0'   | Light Rail    | Green Line |
| '1'   | Heavy Rail    | Red Line   |
| '2'   | Commuter Rail |            |
| '3'   | Bus           |            |
| '4'   | Ferry         |            |

   */
  type: number;

  /**
   * A legible color to use for text drawn against a background of the route's 'color' attribute. See [GTFS 'routes.txt' 'route_text_color'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt).

   */
  text_color: string;

  /**
   * Routes sort in ascending order
   */
  sort_order: number;

  /**
   * This will often be a short, abstract identifier like "32", "100X", or "Green" that riders use to identify a route, but which doesn't give any indication of what places the route serves. See [GTFS 'routes.txt' 'route_short_name'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt).

   */
  short_name: string;

  /**
   * The full name of a route. This name is generally more descriptive than the 'short_name' and will often include the route's destination or stop. See [GTFS 'routes.txt' 'route_long_name'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt).

   */
  long_name: string;

  /**
   * Specifies the fare type of the route, which can differ from the service category.

   */
  fare_class: string;

  /**
   * Details about stops, schedule, and/or service.  See
[GTFS 'routes.txt' 'route_desc'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt).

   */
  description: string;

  /**
   * A color that corresponds to the route, such as the line color on a map." See [GTFS 'routes.txt' 'route_color'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt).

   */
  color: string;

}
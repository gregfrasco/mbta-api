/**
 * Shape representing the stops to which a particular trip can go. Trips grouped under the same route can have different shapes, and thus different stops. See [GTFS 'shapes.txt'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#shapestxt)

 */
export class ShapeResource {
  /**
   * Representation of how important a shape is when choosing one for display. Higher number is higher priority.  Negative priority is not important enough to show as they only **MAY** be used.

   */
  priority: number;

  /**
   * ## Encoding/Decoding

[Encoded Polyline Algorithm Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

## Example Libraries

* [Javascript](https://www.npmjs.com/package/polyline)
* [Erlang](https://blog.kempkens.io/posts/encoding-and-decoding-polylines-with-erlang/)
* [Elixir](https://hex.pm/packages/polyline)

   */
  polyline: string;

  /**
   * User-facing name for shape. It may, but is not required to, be a headsign
   */
  name: string;

  /**
   * Direction in which trip is traveling: '0' or '1'.

The meaning of 'direction_id' varies based on the route. You can programmatically get the direction names from '/routes' '/data/{index}/attributes/direction_names' or '/routes/{id}' '/data/attributes/direction_names'.


   */
  direction_id: number;

}
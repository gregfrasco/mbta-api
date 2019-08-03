/**
 * Shape representing the stops to which a particular trip can go. Trips grouped under the same route can have different shapes, and thus different stops. See [GTFS 'shapes.txt'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#shapestxt)

 */
export class ShapeResource {
  /**
   * The JSON-API resource type
   */
  type: string;

}
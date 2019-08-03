/**
 * Physical location where transit can pick-up or drop-off passengers. See https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt for more details and https://github.com/mbta/gtfs-documentation/blob/master/reference/gtfs.md#stopstxt for specific extensions.
 */
export class StopResource {
  /**
   * Whether there are any vehicles with wheelchair boarding or paths to stops that are wheelchair acessible: 0, 1, 2.

Wheelchair boarding ('undefinedattributes/wheelchair_boarding') corresponds to [GTFS wheelchair_boarding](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt). The MBTA handles parent station inheritance itself, so value can be treated simply:

| Value | Meaning                                       |
|-------|-----------------------------------------------|
| '0'   | No Information                                |
| '1'   | Accessible (if trip is wheelchair accessible) |
| '2'   | Inaccessible                                  |


   */
  wheelchair_boarding: number;

  /**
   * The type of transportation used at the stop. 'vehicle_type' will be a valid routes.txt 'route_type' value:

| Value | Name          | Example    |
|-------|---------------|------------|
| '0'   | Light Rail    | Green Line |
| '1'   | Heavy Rail    | Red Line   |
| '2'   | Commuter Rail |            |
| '3'   | Bus           |            |
| '4'   | Ferry         |            |


   */
  vehicle_type: string;

  /**
   * A textual description of the platform or track. See [MBTA extensions to GTFS](https://docs.google.com/document/d/1RoQQj3_-7FkUlzFP4RcK1GzqyHp4An2lTFtcmW0wrqw/view).

   */
  platform_name: string;

  /**
   * A short code representing the platform/track (like a number or letter). See [GTFS 'stops.txt' 'platform_code'](https://developers.google.com/transit/gtfs/reference/gtfs-extensions#stopstxt_1).

   */
  platform_code: string;

  /**
   * The street on which the stop is located.
   */
  on_street: string;

  /**
   * Name of a stop or station in the local and tourist vernacular.  See [GTFS 'stops.txt' 'stop_name](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt)

   */
  name: string;

  /**
   * The municipality in which the stop is located.
   */
  municipality: string;

  /**
   * Longitude of the stop or station. Degrees East, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#Longitudes_on_WGS.C2.A084) coordinate system. See
[GTFS 'stops.txt' 'stop_lon'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt).

   */
  longitude: number;

  /**
   * The type of the stop.

| Value | Type | Description |
| - | - | - |
| '0' | Stop | A location where passengers board or disembark from a transit vehicle. |
| '1' | Station | A physical structure or area that contains one or more stops. |
| '2' | Station Entrance/Exit | A location where passengers can enter or exit a station from the street. The stop entry must also specify a parent_station value referencing the stop ID of the parent station for the entrance. |
| '3' | Generic Node | A location within a station, not matching any other location_type, which can be used to link together pathways defined in pathways.txt. |

See also [GTFS 'stops.txt' 'location_type'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt).

   */
  location_type: number;

  /**
   * Latitude of the stop or station.  Degrees North, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS.C2.A084) coordinate system. See [GTFS 'stops.txt' 'stop_lat'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt).

   */
  latitude: number;

  /**
   * Description of the stop. See [GTFS 'stops.txt' 'stop_desc'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stopstxt).

   */
  description: string;

  /**
   * The cross street at which the stop is located.
   */
  at_street: string;

  /**
   * A street address for the station. See [MBTA extensions to GTFS](https://docs.google.com/document/d/1RoQQj3_-7FkUlzFP4RcK1GzqyHp4An2lTFtcmW0wrqw/view).

   */
  address: string;

}
/**
 * A schedule is the arrival drop off ('undefinedattributes/drop_off_type') time ('undefinedattributes/arrival_time') and departure pick up ('undefinedattributes/pickup_type') time ('undefinedattributes/departure_time') to/from a stop ('undefinedrelationships/stop/data/id') at a given sequence ('undefinedattributes/stop_sequence') along a trip ('undefinedrelationships/trip/data/id') going in a direction ('undefinedattributes/direction_id') on a route ('undefinedrelationships/route/data/id') when the trip is following a service ('undefinedrelationships/service/data/id') to determine when it is active.

See [GTFS 'stop_times.txt'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt) for base specification.

 */
export class ScheduleResource {
  /**
   * The JSON-API resource type
   */
  type: string;

}
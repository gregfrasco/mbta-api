/**
 * A schedule is the arrival drop off ('undefinedattributes/drop_off_type') time ('undefinedattributes/arrival_time') and departure pick up ('undefinedattributes/pickup_type') time ('undefinedattributes/departure_time') to/from a stop ('undefinedrelationships/stop/data/id') at a given sequence ('undefinedattributes/stop_sequence') along a trip ('undefinedrelationships/trip/data/id') going in a direction ('undefinedattributes/direction_id') on a route ('undefinedrelationships/route/data/id') when the trip is following a service ('undefinedrelationships/service/data/id') to determine when it is active.

See [GTFS 'stop_times.txt'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt) for base specification.

 */
export class ScheduleResource {
  /**
   * | Value   | 'undefinedattributes/arrival_time' and 'undefinedattributes/departure_time' |
|---------|---------------------------------------------------------------|
| 'true'  | Exact                                                         |
| 'false' | Estimates                                                     |

See [GTFS 'stop_times.txt' 'timepoint'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)

   */
  timepoint: boolean;

  /**
   * The sequence the 'stop_id' is arrived at during the 'trip_id'.  The stop sequence is monotonically increasing along the trip, but the 'stop_sequence' along the 'trip_id' are not necessarily consecutive.  See [GTFS 'stop_times.txt' 'stop_sequence'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)

   */
  stop_sequence: number;

  /**
   * How the vehicle departs from 'stop_id'.

| Value | Description                                   |
|-------|-----------------------------------------------|
| '0'   | Regularly scheduled pickup                    |
| '1'   | No pickup available                           |
| '2'   | Must phone agency to arrange pickup           |
| '3'   | Must coordinate with driver to arrange pickup |

See [GTFS 'stop_times.txt' 'pickup_type'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)

   */
  pickup_type: number;

  /**
   * How the vehicle arrives at 'stop_id'.

| Value | Description                                   |
|-------|-----------------------------------------------|
| '0'   | Regularly scheduled drop off                  |
| '1'   | No drop off available                         |
| '2'   | Must phone agency to arrange pickup           |
| '3'   | Must coordinate with driver to arrange pickup |

See [GTFS 'stop_times.txt' 'drop_off_type'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)

   */
  drop_off_type: number;

  /**
   * Direction in which trip is traveling: '0' or '1'.

The meaning of 'direction_id' varies based on the route. You can programmatically get the direction names from '/routes' '/data/{index}/attributes/direction_names' or '/routes/{id}' '/data/attributes/direction_names'.


   */
  direction_id: number;

  /**
   * Time when the trip departs the given stop. See [GTFS 'stop_times.txt' 'departure_time'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)
Format is ISO8601.

   */
  departure_time: string;

  /**
   * Time when the trip arrives at the given stop. See [GTFS 'stop_times.txt' 'arrival_time'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#stop_timestxt)
Format is ISO8601.

   */
  arrival_time: string;

}
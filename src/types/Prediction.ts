import {Route} from './Route';
import {Schedule} from './Schedule';
import {Stop} from './Stop';
import {Trip} from './Trip';
import {Vehicle} from './Vehicle';
import {Alert} from "./Alert";
/**
 * The predicted arrival time ('/undefinedattributes/arrival_time') and departure time ('undefinedattributes/departure_time') to/from a stop ('undefinedrelationships/stop/data/id') at a given sequence ('undefinedattriutes/stop_sequence') along a trip ('undefinedrelationships/trip/data/id') going a direction ('undefinedattributes/direction_id') along a route ('undefinedrelationships/route/data/id').

See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-tripdescriptor)
See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-stoptimeupdate)

 */
export class Prediction {
  /**
   * The sequence the stop ('undefinedrelationships/stop/data/id') is arrived at during the trip ('undefinedrelationships/trip/data/id').  The stop sequence is monotonically increasing along the trip, but the 'stop_sequence' along the trip are not necessarily consecutive.
   * See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'stop_sequence'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-stoptimeupdate).
   */
  stopSequence: string;

  /**
   * Status of the schedule
   */
  status: string;

  /**
   * How the predicted stop relates to the 'Model.Schedule.t' stops.

| Value           | Description |
|-----------------|-------------|
| '"ADDED"'       | An extra trip that was added in addition to a running schedule, for example, to replace a broken vehicle or to respond to sudden passenger load. See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor' 'ScheduleRelationship' 'ADDED'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship-1) |
| '"CANCELLED"'   | A trip that existed in the schedule but was removed. See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor' 'ScheduleRelationship' 'CANCELED'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship-1) |
| '"NO_DATA"'     | No data is given for this stop. It indicates that there is no realtime information available. See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'ScheduleRelationship' 'NO_DATA'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship) |
| '"SKIPPED"'     | The stop was originally scheduled, but was skipped. See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'ScheduleRelationship'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship) |
| '"UNSCHEDULED"' | A trip that is running with no schedule associated to it. See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor' 'ScheduleRelationship' 'UNSCHEDULED'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship-1) |
| 'null'          | Stop was scheduled.  See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor' 'ScheduleRelationship' 'SCHEDULED'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship-1) |

See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor' 'ScheduleRelationship'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship-1)
See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'ScheduleRelationship'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-schedulerelationship)

   */
  scheduleRelationship: string;

  /**
   * Direction in which trip is traveling: '0' or '1'.

The meaning of 'direction_id' varies based on the route. You can programmatically get the direction names from '/routes' '/data/{index}/attributes/direction_names' or '/routes/{id}' '/data/attributes/direction_names'.


   */
  directionId: number;

  /**
   * When the vehicle is now predicted to depart.  'null' if the last stop ('undefinedrelationships/stop/data/id') on the trip ('undefinedrelationships/trip/data/id'). See [GTFS 'Realtime' 'FeedMessage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'departure'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-stoptimeupdate).
Format is ISO8601.

   */
  departureTime: string;

  /**
   * When the vehicle is now predicted to arrive.  'null' if the first stop ('undefinedrelationships/stop/data/id') on the trip ('undefinedrelationships/trip/data/id'). See [GTFS 'Realtime' 'FeedMessage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate' 'arrival'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-stoptimeupdate).
Format is ISO8601.

   */
  arrivalTime: string;

  /**
   * A JSON-API document with a single [VehicleResource](#vehicleresource) resource
   */
  vehicle?: Vehicle;

  /**
   * A JSON-API document with a single [TripResource](#tripresource) resource
   */
  trip?: Trip;

  /**
   * A JSON-API document with a single [StopResource](#stopresource) resource
   */
  stop?: Stop;

  /**
   * 
   */
  schedule?: Schedule;

  /**
   * A JSON-API document with a single [RouteResource](#routeresource) resource
   */
  route?: Route;

  /**
   * A page of [AlertResource](#alertresource) results
   */
  alerts?: Alert[];

  id: string;

}
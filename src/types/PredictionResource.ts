/**
 * The predicted arrival time ('/undefinedattributes/arrival_time') and departure time ('undefinedattributes/departure_time') to/from a stop ('undefinedrelationships/stop/data/id') at a given sequence ('undefinedattriutes/stop_sequence') along a trip ('undefinedrelationships/trip/data/id') going a direction ('undefinedattributes/direction_id') along a route ('undefinedrelationships/route/data/id').

See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'TripDescriptor'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-tripdescriptor)
See [GTFS Realtime 'FeedMesage' 'FeedEntity' 'TripUpdate' 'StopTimeUpdate'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-stoptimeupdate)

 */
export class PredictionResource {
  /**
   * The JSON-API resource type
   */
  type: string;

}
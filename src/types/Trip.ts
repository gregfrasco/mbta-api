import {Route} from './Route';
import {RoutePattern} from "./RoutePattern";
import {Service} from './Service';
import {Shape} from './Shape';
/**
 * Representation of the journey of a particular vehicle through a given set of stops. See [GTFS 'trips.txt'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt)

 */
export class Trip {

    id: string;
    /**
     * Indicator of wheelchair accessibility: '0', '1', '2'

     Wheelchair accessibility ('undefinedattributes/wheelchair_accessible') [as defined in GTFS](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt):

     | Value | Meaning                                            |
     |-------|----------------------------------------------------|
     | '0'   | No information                                     |
     | '1'   | Accessible (at stops allowing wheelchair_boarding) |
     | '2'   | Inaccessible                                       |


     */
    wheelchairAccessible: number;

    /**
     * The text that appears in schedules and sign boards to identify the trip to passengers, for example, to identify train numbers for commuter rail trips. See [GTFS 'trips.txt' 'trip_short_name'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt)

     */
    name: string;

    /**
     * The text that appears on a sign that identifies the trip's destination to passengers. See [GTFS 'trips.txt' 'trip_headsign'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt).

     */
    headsign: string;

    /**
     * Direction in which trip is traveling: '0' or '1'.

     The meaning of 'direction_id' varies based on the route. You can programmatically get the direction names from '/routes' '/data/{index}/attributes/direction_names' or '/routes/{id}' '/data/attributes/direction_names'.


     */
    directionId: number;

    /**
     * ID used to group sequential trips with the same vehicle for a given service_id. See [GTFS 'trips.txt' 'block_id'](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt)

     */
    blockId: string;

    /**
     * Indicator of whether or not bikes are allowed on this trip: '0', '1', '2'

     Bikes allowed ('undefinedattributes/bikes_allowed') [as defined in GTFS](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#tripstxt):

     | Value | Meaning                                                                         |
     |-------|---------------------------------------------------------------------------------|
     | '0'   | No information                                                                  |
     | '1'   | Vehicle being used on this particular trip can accommodate at least one bicycle |
     | '2'   | No bicycles are allowed on this trip                                            |


     */
    bikesAllowed: number;

    /**
     * A JSON-API document with a single [ShapeResource](#shaperesource) resource
     */
    shape?: Shape;

    /**
     * A JSON-API document with a single [ServiceResource](#serviceresource) resource
     */
    service?: Service;

    /**
     *
     */
    routePattern?: RoutePattern;

    /**
     * A JSON-API document with a single [RouteResource](#routeresource) resource
     */
    route?: Route;

}
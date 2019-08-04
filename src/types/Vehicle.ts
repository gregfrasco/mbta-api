import {Route} from './Route';
import {Stop} from './Stop';
import {Trip} from './Trip';
/**
 * Current state of a vehicle on a trip.
 */
export class Vehicle {

    id: string;
    /**
     * Time at which vehicle information was last updated. Format is ISO8601.
     */
    updatedAt: string;

    /**
     * Speed that the vehicle is traveling in meters per second. See [GTFS-realtime Position speed](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-position).
     */
    speed: number;

    /**
     * Longitude of the vehicle's current position.  Degrees East, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#Longitudes_on_WGS.C2.A084) coordinate system. See [GTFS-realtime Position longitude](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-position).
     */
    longitude: number;

    /**
     * Latitude of the vehicle's current position. Degrees North, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS.C2.A084) coordinate system. See [GTFS-realtime Position latitude](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-position).
     */
    latitude: number;

    /**
     * User visible label, such as the one of on the signage on the vehicle.  See [GTFS-realtime VehicleDescriptor label](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-vehicledescriptor).
     */
    label: string;

    /**
     * Direction in which trip is traveling: '0' or '1'.

     The meaning of 'direction_id' varies based on the route. You can programmatically get the direction names from '/routes' '/data/{index}/attributes/direction_names' or '/routes/{id}' '/data/attributes/direction_names'.


     */
    directionId: number;

    /**
     * Index of current stop along trip. See [GTFS-realtime VehiclePosition current_stop_sequence](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-vehicleposition)
     */
    currentStopSequence: number;

    /**
     * Status of vehicle relative to the stops. See [GTFS-realtime VehicleStopStatus](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-vehiclestopstatus).

     | _**Value**_       | _**Description**_                                                                                          |
     |-------------------|------------------------------------------------------------------------------------------------------------|
     | **INCOMING_AT**   | The vehicle is just about to arrive at the stop (on a stop display, the vehicle symbol typically flashes). |
     | **STOPPED_AT**    | The vehicle is standing at the stop.                                                                       |
     | **IN_TRANSIT_TO** | The vehicle has departed the previous stop and is in transit.                                              |


     */
    currentStatus: string;

    /**
     * Bearing, in degrees, clockwise from True North, i.e., 0 is North and 90 is East. This can be the compass bearing, or the direction towards the next stop or intermediate location. See [GTFS-realtime Position bearing](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-position).
     */
    bearing: number;

    /**
     * A JSON-API document with a single [TripResource](#tripresource) resource
     */
    trip?: Trip;

    /**
     * A JSON-API document with a single [StopResource](#stopresource) resource
     */
    stop?: Stop;

    /**
     * A JSON-API document with a single [RouteResource](#routeresource) resource
     */
    route?: Route;

}
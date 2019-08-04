import {Stop} from './Stop';
/**
 * Amenities at a station stop ('undefinedrelationships/stop') such as elevators, escalators, parking lots, and bike storage.

 An [MBTA extension](https://groups.google.com/forum/#!topic/gtfs-changes/EzC5m9k45pA).  This spec is not yet finalized.

 ## Accessibility

 Riders with limited mobility can search any facility, either 'ELEVATOR' or 'ESCALATOR', while riders that need wheelchair access can search for 'ELEVATOR' only.

 The lack of an 'ELEVATOR' MAY NOT make a stop wheelchair inaccessible.  Riders should check '/stops/{id}' '/data/attributes/wheelchair_boarding' is '1' to guarantee a path is available from the station entrance to the stop or '0' if it MAY be accessible.  Completely avoid '2' as that is guaranteed to be INACCESSIBLE.

 */
export class Facility {
    /**
     * The type of the facility.
     */
    type: string;

    /**
     * Short name of the facility
     */
    short_name: string;

    /**
     * Longitude of the facility. Degrees East, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#Longitudes_on_WGS.C2.A084) coordinate system. See
     [GTFS 'facilities.txt' 'facility_lon']

     */
    longitude: number;

    /**
     * Name of the facility
     */
    long_name: string;

    /**
     * Latitude of the facility.  Degrees North, in the [WGS-84](https://en.wikipedia.org/wiki/World_Geodetic_System#A_new_World_Geodetic_System:_WGS.C2.A084) coordinate system. See [GTFS 'facilities.txt' 'facility_lat']

     */
    latitude: number;

    /**
     * A JSON-API document with a single [StopResource](#stopresource) resource
     */
    stop?: Stop;

}
/**
 * Physical location where transit can pick-up or drop-off passengers.
 */
export class Stop {
    /**
     * Indicator of wheelchair accessibility: 0, 1, 2<br>
     * 0: No information <br>
     * 1: Accessible (at stops allowing wheelchair_boarding)<br>
     * 2: Inaccessible
     */
    wheelchair_accessible: number;

    /**
     * The type of transportation used at the stop. vehicle_type will be a valid routes.txt route_type value:<br>
     * 0: Light Rail
     * 1: Heavy Rail
     * 2: Commuter Rail
     * 3: Bus
     * 4: Ferry
     */
    vehicle_type: number;

    /**
     * A textual description of the platform or track.
     */
    platform_name: string;

    /**
     * A short code representing the platform/track (like a number or letter).
     */
    platform_code: string;

    /**
     * The street on which the stop is located.
     */
    on_street: string;

    /**
     * Name of a stop or station in the local and tourist vernacular.
     */
    name: string;

    /**
     * The municipality in which the stop is located.
     */
    municipality: string;

    /**
     * Longitude of the stop or station. Degrees East, in the WGS-84 coordinate system.
     */
    longitude: number;

    /**
     * The type of the stop.<br>
     * 0: Stop - A location where passengers board or disembark from a transit vehicle.<br>
     * 1: Station - A physical structure or area that contains one or more stops.<br>
     * 2: Station - A location where passengers can enter or exit a station from the street. The stop entry must also specify a parent_station value referencing the stop ID of the parent station for the entrance.
     * 3: Generic Node - A location within a station, not matching any other location_type, which can be used to link together pathways defined in pathways.txt.
     */
    location_type: number;

    /**
     * Latitude of the stop or station. Degrees North, in the WGS-84 coordinate system.
     */
    latitude: number;

    /**
     * Description of the stop.
     */
    description: string;

    /**
     * The cross street at which the stop is located.
     */
    at_street: string;

    /**
     * A street address for the station.
     */
    address: string
}
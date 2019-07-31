/**
 * Representation of the journey of a particular vehicle through a given set of stops.
 */
export class TripResource {
    /**
     * Indicator of wheelchair accessibility: 0, 1, 2<br>
     * 0: No information <br>
     * 1: Accessible (at stops allowing wheelchair_boarding)<br>
     * 2: Inaccessible
     */
    wheelchair_accessible: number;

    /**
     * The text that appears in schedules and sign boards to identify the trip to passengers, for example, to identify train numbers for commuter rail trips.
     */
    name: string;

    /**
     * The text that appears on a sign that identifies the trip’s destination to passengers.
     */
    headsign: string;

    /**
     * Direction in which trip is traveling: 0 or 1.
     */
    direction_id: number;

    /**
     * ID used to group sequential trips with the same vehicle for a given service_id.
     */
    block_id: string;

    /**
     * Indicator of whether or not bikes are allowed on this trip: 0, 1, 2 <br>
     * 0: No information<br>
     * 1: Vehicle being used on this particular trip can accommodate at least one bicycle<br>
     * 2: No bicycles are allowed on this trip
     */
    bikes_allowed: number;
}

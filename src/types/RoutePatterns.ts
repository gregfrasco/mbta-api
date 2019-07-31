/**
 * Information about the different variations of service that may be run within a single route_id, including when and how often they are operated.
*/
export class RoutePatterns {
    /**
     * Explains how common the route pattern is. For the MBTA, this is within the context of the entire route. Current valid values are:<br>
     * 0: Not defined<br>
     * 1: Typical. Pattern is common for the route. Most routes will have only one such pattern per direction. A few routes may have more than 1, such as the Red Line (with one branch to Ashmont and another to Braintree); routes with more than 2 are rare.<br>
     * 2: Pattern is a deviation from the regular route.<br>
     * 3: Pattern represents a highly atypical pattern for the route, such as a special routing which only runs a handful of times per day.<br>
     * 4: Diversions from normal service, such as planned detours, bus shuttles, or snow routes.<br>
     */
    typicality: number;

    /**
     * User-facing description of when the route pattern operate. Not all route patterns will include a time description
     */
    time_desc: string;

    /**
     * Can be used to order the route patterns in a way which is ideal for presentation to customers.
     * Route patterns with smaller sort_order values should be displayed before those with larger values.
     */
    sort_order: number;

    /**
     * User-facing description of where trips on the route pattern serve.These names are published in the form Destination, Destination via Street or Landmark, Origin - Destination, or Origin - Destination via Street or Landmark. Note that names for bus and subway route patterns currently do not include the origin location, but will in the future.
     */
    name: string;

    /**
     * Direction in which trip is traveling: 0 or 1.
     * The meaning of direction_id varies based on the route. You can programmatically get the direction names from /routes
     */
    direction_id: number;
}
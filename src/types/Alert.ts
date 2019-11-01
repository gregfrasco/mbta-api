import {Facility} from './Facility';
import {ActivePeriod} from "./ActivePeriod";
import {InformedEntity} from "./InformedEntity";
import {Route} from "./Route";
import {Stop} from "./Stop";
/**
 * An effect (enumerated in 'undefinedattributes/effect' and human-readable in 'undefinedattributes/service_effect') on a provided service (facility, route, route type, stop and/or trip in '/undefinedattributes/informed_entity') described by a banner ('undefinedattributes/banner'), short header ('undefinedattributes/short_header'), header 'undefinedattributes/header', and description ('undefinedattributes/description') that is active for one or more periods ('undefinedattributes/active_period') caused by a cause ('undefinedattribute/cause') that somewhere in its lifecycle (enumerated in 'undefinedattributes/lifecycle' and human-readable in 'undefinedattributes/timeframe').

 See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-alert)

 ## Descriptions

 There are 5 descriptive attributes.

 | JSON pointer                                | Usage                                                                           |
 |---------------------------------------------|---------------------------------------------------------------------------------|
 | 'undefinedattributes/banner'       | Display as alert across application/website                                     |
 | 'undefinedattributes/short_header' | When 'undefinedattributes/header' is too long to display               |
 | 'undefinedattributes/header'       | Used before showing and prepended to 'undefinedattributes/description' |
 | 'undefinedattributes/description'  | Used when user asks to expand alert.                                            |

 ## Effect

 | JSON pointer                                  |                |
 |-----------------------------------------------|----------------|
 | 'undefinedattributes/effect'         | Enumerated     |
 | 'undefinedattributes/service_effect' | Human-readable |

 ## Timeline

 There are 3 timeline related attributes

 | JSON pointer                                 | Description                                                                              |
 |----------------------------------------------|------------------------------------------------------------------------------------------|
 | 'undefinedattributes/active_period' | Exact Date/Time ranges alert is active                                                   |
 | 'undefinedattributes/lifecycle'     | Enumerated, machine-readable description of 'undefinedattributes/active_period' |
 | 'undefinedattributes/timeframe'     | Human-readable description of 'undefinedattributes/active_period'               |

 */
export class Alert {

    id: string;
    /**
     * A URL for extra details, such as outline construction or maintenance plans.
     */
    url: string | undefined | null;

    /**
     * Date/Time alert last updated. Format is ISO8601.
     */
    updatedAt: string | undefined | null;

    /**
     * Summarizes when an alert is in effect.
     */
    timeframe: string | undefined | null;

    /**
     * A shortened version of 'undefinedattributes/header'.
     */
    shortHeader: string | undefined | null;

    /**
     * How severe the alert it from least ('0') to most ('10') severe.
     */
    severity: string | undefined | null;

    /**
     * Summarizes the service and the impact to that service.
     */
    serviceEffect: string | undefined | null;

    /**
     * Identifies whether alert is a new or old, in effect or upcoming.

     | Value                |
     |----------------------|
     | '"NEW"'              |
     | '"ONGOING"'          |
     | '"ONGOING_UPCOMING"' |
     | '"UPCOMING"'         |


     */
    lifecycle: string | undefined | null;

    /**
     * This plain-text string will be highlighted, for example in boldface. See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert' 'header_text'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-alert)

     */
    header: string | undefined | null;

    /**
     * The effect of this problem on the affected entity.

     | Value |
     |-------|
     | '"ACCESS_ISSUE"' |
     | '"ADDITIONAL_SERVICE"' |
     | '"AMBER_ALERT"' |
     | '"BIKE_ISSUE"' |
     | '"CANCELLATION"' |
     | '"DELAY"' |
     | '"DETOUR"' |
     | '"DOCK_CLOSURE"' |
     | '"DOCK_ISSUE"' |
     | '"ELEVATOR_CLOSURE"' |
     | '"ESCALATOR_CLOSURE"' |
     | '"EXTRA_SERVICE"' |
     | '"FACILITY_ISSUE"' |
     | '"MODIFIED_SERVICE"' |
     | '"NO_SERVICE"' |
     | '"OTHER_EFFECT"' |
     | '"PARKING_CLOSURE"' |
     | '"PARKING_ISSUE"' |
     | '"POLICY_CHANGE"' |
     | '"SCHEDULE_CHANGE"' |
     | '"SERVICE_CHANGE"' |
     | '"SHUTTLE"' |
     | '"SNOW_ROUTE"' |
     | '"STATION_CLOSURE"' |
     | '"STATION_ISSUE"' |
     | '"STOP_CLOSURE"' |
     | '"STOP_MOVE"' |
     | '"STOP_MOVED"' |
     | '"SUMMARY"' |
     | '"SUSPENSION"' |
     | '"TRACK_CHANGE"' |
     | '"UNKNOWN_EFFECT"' |

     See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert' 'effect'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-alert)


     */
    effect: string | undefined | null;

    /**
     * This plain-text string will be formatted as the body of the alert (or shown on an explicit "expand" request by the user). The information in the description should add to the information of the header. See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert' 'description_text'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#message-alert)

     */
    description: string | undefined | null;

    /**
     * Date/Time alert created. Format is ISO8601.
     */
    createdAt: string | undefined | null;

    /**
     * What is causing the alert.

     | Value |
     |-------|
     | '"ACCIDENT"' |
     | '"AMTRAK"' |
     | '"AN_EARLIER_MECHANICAL_PROBLEM"' |
     | '"AN_EARLIER_SIGNAL_PROBLEM"' |
     | '"AUTOS_IMPEDING_SERVICE"' |
     | '"COAST_GUARD_RESTRICTION"' |
     | '"CONGESTION"' |
     | '"CONSTRUCTION"' |
     | '"CROSSING_MALFUNCTION"' |
     | '"DEMONSTRATION"' |
     | '"DISABLED_BUS"' |
     | '"DISABLED_TRAIN"' |
     | '"DRAWBRIDGE_BEING_RAISED"' |
     | '"ELECTRICAL_WORK"' |
     | '"FIRE"' |
     | '"FOG"' |
     | '"FREIGHT_TRAIN_INTERFERENCE"' |
     | '"HAZMAT_CONDITION"' |
     | '"HEAVY_RIDERSHIP"' |
     | '"HIGH_WINDS"' |
     | '"HOLIDAY"' |
     | '"HURRICANE"' |
     | '"ICE_IN_HARBOR"' |
     | '"MAINTENANCE"' |
     | '"MECHANICAL_PROBLEM"' |
     | '"MEDICAL_EMERGENCY"' |
     | '"PARADE"' |
     | '"POLICE_ACTION"' |
     | '"POWER_PROBLEM"' |
     | '"SEVERE_WEATHER"' |
     | '"SIGNAL_PROBLEM"' |
     | '"SLIPPERY_RAIL"' |
     | '"SNOW"' |
     | '"SPECIAL_EVENT"' |
     | '"SPEED_RESTRICTION"' |
     | '"SWITCH_PROBLEM"' |
     | '"TIE_REPLACEMENT"' |
     | '"TRACK_PROBLEM"' |
     | '"TRACK_WORK"' |
     | '"TRAFFIC"' |
     | '"UNRULY_PASSENGER"' |
     | '"WEATHER"' |

     See [GTFS Realtime 'FeedMessage' 'FeedEntity' 'Alert' 'Cause'](https://github.com/google/transit/blob/master/gtfs-realtime/spec/en/reference.md#enum-cause)


     */
    cause: string | undefined | null;

    /**
     * Set if alert is meant to be displayed prominently, such as the top of every page.
     */
    banner: string | undefined | null;

    /**
     * A JSON-API document with a single [FacilityResource](#facilityresource) resource
     */
    facility?: Facility;

    /**
     * Start and End dates for active alert
     */
    activityPeriod: ActivePeriod[];

    informedEntity: InformedEntity[];

    routes: Route[];

    stops: Stop[];

}